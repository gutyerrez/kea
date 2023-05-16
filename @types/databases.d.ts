declare module '@gentifly/zeraph/databases' {
  import { IProvider } from '@gentifly/zeraph/providers';

  import { PrismaClient } from '@prisma/client';

  export class MongoDatabaseProvider implements IProvider<PrismaClient> {
    public prepare: () => Promise<void>;

    public provide: () => PrismaClient;
  }
}
