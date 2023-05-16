declare module '@gentifly/zeraph/databases' {
  import { IProvider } from '@gentifly/zeraph/providers';

  import { Collection, Connection } from 'mongoose';

  export type MongoCollection<T> = Collection<T & { _id: string }>

  export interface IDatabaseProvider<T> extends IProvider<T> {
    prepare: () => Promise<void>

    provide: () => T
  }

  export class MongoDatabaseProvider implements IDatabaseProvider<Connection> {
    public prepare: () => Promise<void>;

    public provide: () => Connection;
  }
}
