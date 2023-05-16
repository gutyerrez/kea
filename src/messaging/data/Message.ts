export abstract class AbstractMessage<T> {
  public abstract onMessage?: (message: T) => Promise<void>

  public abstract publishMessage: <M> (data: M) => Promise<void>
}
