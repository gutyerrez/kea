declare module '@gentifly/zeraph/http/middlewares' {
  import {
    Request,
    Response,
    NextFunction,
    RequestHandler,
    ErrorRequestHandler
  } from 'express';

  export const InhabitantMiddleware: (
    request: Request,
    _response: Response,
    next: NextFunction
  ) => RequestHandler;

  export const ExceptionHandlerMiddleware: (
    error: Error,
    _request: Request,
    response: Response,
    _next: NextFunction
  ) =>  ErrorRequestHandler;
}
