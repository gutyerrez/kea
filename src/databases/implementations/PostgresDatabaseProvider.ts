import { IProvider } from '@gentifly/zeraph/providers';

import { Environment } from '@gentifly/environment';

import { PrismaClient } from '@prisma/client';

export class PostgresDatabaseProvider implements IProvider<PrismaClient> {
  private provider!: PrismaClient;

  public prepare = async () => {
    this.provider = new PrismaClient({
      datasources: {
        url: String.format(
          'postgresql://%s:%s@%s:%d/%s',
          Environment.getString('POSTGRES_USERNAME'),
          Environment.getString('POSTGRES_PASSWORD'),
          Environment.getString('POSTGRES_HOST'),
          Environment.getInt('POSTGRES_PORT'),
          Environment.getString('POSTGRES_DATABASE')
        )
      }
    });

    await this.provider.$connect();

    await this.provider.$executeRaw(`SET search_path TO ${Environment.getString('POSTGRES_SCHEMA')}`);
  };

  public provide = () => this.provider;
}
