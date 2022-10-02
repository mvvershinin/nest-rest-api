import { ValidationPipe } from '@nestjs/common';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';

import * as helmet from 'helmet';

import AppModule from './app/app.module';

import AppExceptionsFilter from './app/utils/app.exceptions.filter';
import AppValidationPipe from './app/utils/app.validation.pipe';
import ResponseInterceptor from './app/utils/app.response.interceptor';

import config from './app/config/config';

import swagger from './app/config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const adapter = app.get(HttpAdapterHost);
  /** todo exception handler
  const exceptionFilter = new AppExceptionsFilter(adapter);
  app.useGlobalFilters(exceptionFilter);
  */
  app.enableShutdownHooks();
  app.setGlobalPrefix(config.server.route_prefix);
/** todo validation exception handler
  const validatorPipe = new AppValidationPipe();
  app.useGlobalPipes(validatorPipe);
*/
  app.useGlobalPipes(new ValidationPipe());

  const responseInterceptor = new ResponseInterceptor();
  app.useGlobalInterceptors(responseInterceptor);

  const document = SwaggerModule.createDocument(app, swagger, {
    ignoreGlobalPrefix: true,
  });

  SwaggerModule.setup(
    `${config.server.route_prefix}${config.swagger.prefix}`,
    app,
    document,
  );

  app.enableCors(config.server.cors);
  app.use(helmet());

  await app.startAllMicroservices();
  await app.listen(config.server.port);
}

bootstrap();
