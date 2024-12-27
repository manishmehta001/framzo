import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
} from '@nestjs/common';
import KeycloakConnect from 'keycloak-connect';

@Injectable()
export class KeycloakGuard implements CanActivate {
  constructor(
    @Inject('KEYCLOAK_INSTANCE') private keycloak: KeycloakConnect.Keycloak,
  ) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const response = context.switchToHttp().getResponse();

    return new Promise<boolean>((resolve) => {
      this.keycloak.protect()(request, response, (err) => {
        if (err) {
          resolve(false);
        } else {
          resolve(true);
        }
      });
    });
  }
}
