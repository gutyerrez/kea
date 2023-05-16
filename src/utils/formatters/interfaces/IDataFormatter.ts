export interface IDataFormatter<T> {
  execute: (data: T) => Promise<Record<string, unknown>>
}
