import { IProvider } from '@gentifly/zeraph/providers';

export interface IDatabaseProvider<T> extends IProvider<T> {
  prepare: () => Promise<void>

  provide: () => T
}
