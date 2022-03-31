import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabasesModule } from "./database/databases.module";

@Module({
  imports: [DatabasesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
