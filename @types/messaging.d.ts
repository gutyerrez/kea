declare module '@gentifly/zeraph/messaging' {
  import { IProvider } from '@gentifly/zeraph/providers';

  import { PubSub, Message } from '@google-cloud/pubsub';

  export type IMessageProvider<T> = IProvider<T>

  export class PubSubMessageProvider implements IMessageProvider<PubSub> {
    public prepare: () => Promise<void>;

    public provide: () => PubSub;
  }

  export abstract class AbstractMessage<T> {
    public abstract onMessage?: (message: T) => Promise<void>

    public abstract publishMessage: <M> (data: M) => Promise<void>
  }

  export class PubSubMessage extends AbstractMessage<Message & {
    attributes: {
      operation: 'C' | 'U' | 'D'
    }
  }> {
    constructor(topicName: string)

    public override onMessage?: (message: Message) => Promise<void>;

    public override publishMessage: <T> (data: T) => Promise<void>;
  }
}
