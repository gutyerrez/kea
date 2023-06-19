declare module '@gentifly/zeraph/http/controllers' {
  import { Request, Response } from '@gentifly/zeraph/http/server';

  export interface IController<T = Response | void> {
    handle: (request: Request, response: Response) => Promise<T>
  }
}
