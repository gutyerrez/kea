import { AbstractMessage } from '@gentifly/zeraph/messaging/data/Message';

import { Message } from '@google-cloud/pubsub';

export class PubSubMessage extends AbstractMessage<Message & {
  attributes: {
    operation: 'C' | 'U' | 'D'
  }
}> {
  constructor(_topicName: string) {
    super();

    this.setupMessageConsumer();
  }

  public override onMessage?: (message: Message) => Promise<void>;

  public override publishMessage = async <T> (_data: T) => {
    // TODO: later
  };

  public setupMessageConsumer = async () => {
    // TODO: later
  };
}
