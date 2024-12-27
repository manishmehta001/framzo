import { Injectable, NestInterceptor, ExecutionContext, CallHandler, BadRequestException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { genSalt, hash } from 'bcrypt';

@Injectable()
export class PasswordsMatchInterceptor implements NestInterceptor {
  async intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest();
    const { password, oldPassword, newPassword } = request.body;

    function validatePassword(password) {
      if (typeof password !== 'string') {
        throw new BadRequestException('Password must be a string.');
      }

      if (password.length < 8 || password.length > 12) {
        throw new BadRequestException('Password must be between 8 and 12 characters.');
      }

      const hasUpperCase = /[A-Z]/.test(password);
      const hasLowerCase = /[a-z]/.test(password);
      const hasNumbers = /\d/.test(password);
      const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);

      if (!hasUpperCase || !hasLowerCase || !hasNumbers || !hasSymbols) {
        throw new BadRequestException(
          'Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 symbol.'
        );
      }
    }

    if (password) {
      validatePassword(password);
      const salt = await genSalt();
      request.body.password = await hash(password, salt);
    }

    if (oldPassword && newPassword) {
      validatePassword(newPassword);

      // Compare old and new passwords
      if (oldPassword === newPassword) {
        throw new BadRequestException('New password cannot be the same as the old password');
      }
    }

    return next.handle(); // Continue the request
  }
}
