declare module '@gentifly/zeraph/providers' {
  export interface IProvider<T> {
    prepare: () => Promise<void>

    provide: () => T
  }
}
