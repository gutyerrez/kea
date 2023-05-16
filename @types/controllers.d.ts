declare module '@gentifly/zeraph/http/controllers' {
  import {
    Request,
    InhabitantRequest,
    Response
  } from '@gentifly/zeraph/http/server';

  export interface IController<T = Response | void> {
    handle: (request: Request & InhabitantRequest, response: Response) => Promise<T>
  }
}
