declare module  '@gentifly/zeraph/utils' {
  module 'formatters' {
    export interface IDataFormatter<T> {
      execute: (data: T) => Promise<Record<string, unknown>>
    }

    export type Data<T = Record<string, unknown>> = {
      data: {
        id: unknown
        type: string
        attributes: T
      }
    }

    export type ListData<T = Record<string, unknown>> = {
      data: Array<T>
      links: {
        current: string
        first: string
        previous: string | null
        next: string | null
        last: string | null
      }
      meta: {
        current: number,
        next: number | null,
        previous: number | null,
        totalPages: number,
        totalCount: number
      }
    }

    export abstract class DataFormatter<T> implements IDataFormatter<T> {
      public abstract execute: (data: T) => Promise<Data>
    }

    export abstract class ListDataFormatter<T> implements IDataFormatter<T> {
      public abstract execute: (data: T) => Promise<ListData>
    }
  }

  module 'reflection' {
    export type Constructor<T> = { new (...args: any[]): T }

    export class Reflection {
      public static createInstance: <T> (constructor: Constructor<T>, ..._args: any[]) => T;
    }
  }
}
