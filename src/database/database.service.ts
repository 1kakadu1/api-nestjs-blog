import { INestApplication, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class DataBaseService extends PrismaClient {
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy(){
    await this.$disconnect();
  }

  async enableShutDownHooks(app: INestApplication){
    await app.close();
  }
}
