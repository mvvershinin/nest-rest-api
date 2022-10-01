import { Module } from '@nestjs/common';

import DatabaseModule from './database/database.module.js';
import RoutesModule from './routes/routes.module';

@Module({
  imports: [DatabaseModule, RoutesModule],
})
export default class AppModule {}
