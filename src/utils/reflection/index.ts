import { NotImplementedException } from '@gentifly/zeraph/exceptions';

export type Constructor<T> = { new (...args: any[]): T }

export class Reflection {
  public static createInstance = <T> (constructor: Constructor<T>, ..._args: any[]): T => {
    if (_args.length) {
      throw new NotImplementedException();
    }

    return new constructor();
  };
}
