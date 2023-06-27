import { Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { LoggerService } from 'src/logger/logger.service';

@Injectable()
export class AuthGuard {
  constructor(
    private jwtService: JwtService,
    private reflector: Reflector,
    private loggerService: LoggerService,
  ) {}
}
