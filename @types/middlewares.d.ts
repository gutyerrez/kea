declare module '@gentifly/zeraph/http/middlewares' {
  import { FastifyRequest as Request, FastifyReply as Response } from 'fastify';

  export const InhabitantMiddleware: (
    error: Error,
    request: Request,
    _response: Response
  ) => void;

  export const ExceptionHandlerMiddleware: (
    error: Error,
    _request: Request,
    response: Response,
  ) =>  void;
}
