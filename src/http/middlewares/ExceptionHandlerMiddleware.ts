// abstract that
import { FastifyRequest as MiddlewareRequest, FastifyReply as MiddlewareResponse } from 'fastify';

import { Exception } from '@gentifly/zeraph/exceptions';

export const ExceptionHandlerMiddleware = (
  error: Error,
  _request: MiddlewareRequest,
  response: MiddlewareResponse
) => {
  return response.status(error instanceof Exception ? error.status : 500).send({
    error: {
      'lang': i18n.getLocale(),
      'message': i18n.__(error.name),
      'initial_message': error.message,
      'status': error instanceof Exception ? error.status : 500
    }
  });
};
