export abstract class Feature {
  protected name: string;
  protected description: string;
  protected enabled: boolean;

  constructor(name: string, description: string, enabled: boolean) {
    this.name = name;
    this.description = description;
    this.enabled = enabled;
  }

  public abstract execute: <T, V> (data: T) => Promise<V | undefined | null | void>;
}
