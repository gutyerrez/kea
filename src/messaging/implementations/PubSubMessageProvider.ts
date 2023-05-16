import { IMessageProvider } from '@gentifly/zeraph/messaging';

import { PubSub } from '@google-cloud/pubsub';

import { Environment } from '@gentifly/zeraph/environment';

export class PubSubMessageProvider implements IMessageProvider<PubSub> {
  private provider!: PubSub;

  public prepare = async (): Promise<void> => {
    this.provider = new PubSub({
      projectId: Environment.getString('GCP_PROJECT_ID'),
      credentials: {
        'private_key': Environment.getString('GCP_PRIVATE_KEY').replace(/\\n/g, '\n'),
        'client_email': Environment.getString('GCP_CLIENT_EMAIL')
      }
    });
  };

  public provide = (): PubSub => this.provider;
}
