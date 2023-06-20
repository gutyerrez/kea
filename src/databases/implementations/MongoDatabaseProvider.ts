import mongoose, { Connection } from 'mongoose';

import { IDatabaseProvider } from '@gentifly/zeraph/databases';

import { Environment } from '@gentifly/environment';

export class MongoDatabaseProvider implements IDatabaseProvider<Connection> {
  public prepare = async (): Promise<void> => {
    try {
      mongoose.connect(Environment.getString('MONGO_URI'), {
        maxPoolSize: 8,
        minPoolSize: 4
      });
    } catch (err) {
      console.log(err);
    }
  };

  public provide = (): Connection => mongoose.connection;
}
