import { DocumentBuilder } from '@nestjs/swagger';
import config from './config';

export default new DocumentBuilder()
  .setTitle('AppMarket Backend')
  .setDescription('AppMarket Backend REST API')
  .setVersion('1.0')
  .addBearerAuth()
  .addServer(`http://${config.server.base_url}${config.server.route_prefix}`)
  .addServer(`https://${config.server.base_url}${config.server.route_prefix}`)
  .build();
