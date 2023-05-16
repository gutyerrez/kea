import { PrismaClient } from '@prisma/client';

import { IDatabaseProvider } from '@gentifly/zeraph/databases/interfaces/IDatabaseProvider';

export class MongoDatabaseProvider implements IDatabaseProvider<PrismaClient> {
  private provider!: PrismaClient;

  public prepare = async (): Promise<void> => {
    try {
      this.provider = new PrismaClient();

      await this.provider.$connect();
    } catch (err) {
      console.log(err);
    }
  };

  public provide = (): PrismaClient => {
    return this.provider;
  };
}
