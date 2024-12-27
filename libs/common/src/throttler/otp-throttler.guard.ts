import { Injectable, ExecutionContext } from '@nestjs/common';
import {
  ThrottlerGuard,
  ThrottlerException,
  ThrottlerStorageService,
} from '@nestjs/throttler';

@Injectable()
export class OtpThrottlerGuard extends ThrottlerGuard {
  protected async handleRequest(requestProps: {
    context: ExecutionContext;
    limit: number;
    ttl: number;
  }): Promise<boolean> {
    const { context, limit, ttl } = requestProps;

    // Extract the request and user
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    if (!user || !user.id) {
      throw new ThrottlerException('User ID is required for throttling.');
    }

    // Generate a unique key for throttling
    const key = this.generateKey(user);

    // Increment the hit count with all required arguments
    const record = await this.storageService.increment(
      key,
      ttl,
      limit,
      0, // blockDuration (0 means no blocking)
      'otp-throttler', // throttlerName (optional identifier for the throttle mechanism)
    );

    // Validate total hits
    if (record.totalHits > limit) {
      throw new ThrottlerException(
        'Too many OTP requests. Please try again later.',
      );
    }

    return true;
  }

  // Generate a unique key for throttling based on the user
  protected generateKey(user: any): string {
    return `${user.id}-otp`; // Customize this logic as per your application
  }
}
