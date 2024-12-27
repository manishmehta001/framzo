import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule, LoggerModule } from '@app/common';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [DatabaseModule, LoggerModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
