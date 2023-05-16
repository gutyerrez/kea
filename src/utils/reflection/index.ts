export type Constructor<T> = { new (...args: any[]): T }

export class Reflection {
  public static createInstance = <T> (constructor: Constructor<T>, ...args: any[]): T => {
    return new constructor(args);
  };
}
