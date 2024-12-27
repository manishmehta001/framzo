import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import * as KeycloakConnect from 'keycloak-connect';
import { KeycloakGuard } from '@app/common';
import { APP_GUARD } from '@nestjs/core';
import * as session from 'express-session';

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    KeycloakConnect,
    {
      provide: 'KEYCLOAK_INSTANCE',
      useFactory: () => {
        const memoryStore = new session.MemoryStore();
        const keycloakConfig: any = {
          clientId: 'nestjs-app', // your client ID registered in Keycloak
          bearerOnly: true,
          serverUrl: 'http://localhost:8080/auth', // Keycloak server URL
          realm: 'myrealm', // your Keycloak realm
          credentials: {
            secret: '0WTj0b2hwdrrmBDJzLXK91JV187USUWX', // client secret for confidential clients
          },
        };
        return new KeycloakConnect({ store: memoryStore }, keycloakConfig);
      },
    },
    {
      provide: APP_GUARD,
      useClass: KeycloakGuard, // Keycloak guard for authorization
    },
  ],
})
export class AuthModule {}
