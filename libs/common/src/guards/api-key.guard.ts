import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  private readonly validApiKeys: string[];

  constructor(private configService: ConfigService) {
    // Load the API keys from the configuration (e.g., from environment variables)
    this.validApiKeys = this.configService.get<string>('API_KEYS', 'test-key').split(',');
  }

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const apiKey = request.headers['x-api-key']; // Assume API key is sent in 'x-api-key' header

    if (this.isValidApiKey(apiKey)) {
      return true;
    } else {
      throw new UnauthorizedException('Invalid API key');
    }
  }

  private isValidApiKey(apiKey: string): boolean {
    return this.validApiKeys.includes(apiKey);
  }
}
