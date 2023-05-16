export interface IProvider<T> {
  prepare: () => Promise<void>

  provide: () => T
}
