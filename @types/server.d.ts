declare module '@gentifly/zeraph/http/server' {
  import { Request as ExpressRequest, Response as ExpressResponse } from 'express';

  export type Request = ExpressRequest;

  export type InhabitantRequest = Request & {
    inhabitantId: string
  }

  export type Response = ExpressResponse;
}
