import { createParamDecorator, ExecutionContext } from '@nestjs/common';

// TODO: Add types for UserDocument
// const getCurrentUserByContext = (context: ExecutionContext): UserDocument => {

const getCurrentUserByContext = (context: ExecutionContext) => {
  return context.switchToHttp().getRequest().user;
};

export const CurrentUser = createParamDecorator((_data: unknown, context: ExecutionContext) =>
  getCurrentUserByContext(context),
);
