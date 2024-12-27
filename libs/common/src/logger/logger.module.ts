import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { LoggerModule as PinoLoggerModule } from 'nestjs-pino';
import { ConfigEnv } from '../enums';
import { ConfigModule } from '../config';

@Module({
  imports: [
    PinoLoggerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return {
          pinoHttp: {
            transport: {
              target: 'pino-pretty',
              options: {
                singleLine:
                  configService.get<string>(ConfigEnv.ENVIRONMENT) !==
                  'development'
                    ? true
                    : false,
              },
            },
            // autoLogging: false,
            // base: null,
            // quietReqLogger: true,
            level: configService.get<string>(ConfigEnv.LOG_LEVEL),
          },
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class LoggerModule {}
