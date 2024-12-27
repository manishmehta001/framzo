import { Module } from '@nestjs/common';
import {
  ConfigModule as NestConfigModule,
  ConfigService,
} from '@nestjs/config';

import * as Joi from 'joi';

@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        DB_URI: Joi.string().required(),
        NODE_ENV: Joi.string().required(),
        PORT: Joi.number().required(),
        FRONTEND_URL: Joi.string().required(),
        HOST_URL: Joi.string().required(),
        JWT_EXPIRY: Joi.string().required(),
        JWT_SECRET_KEY: Joi.string().required(),
      }),
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
