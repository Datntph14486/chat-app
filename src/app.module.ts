import { Module } from '@nestjs/common';
import { AppGateway } from './app.gateway';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'), // đường dẫn tới thư mục chứa index.html
    }),
  ],
  controllers: [],
  providers: [AppGateway],
})
export class AppModule {}
