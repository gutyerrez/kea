import {
  ErrorRequestHandler,
  Request,
  Response,
  NextFunction
} from 'express';

import { Exception } from '@gentifly/zeraph/exceptions';

export const ExceptionHandlerMiddleware: ErrorRequestHandler = (
  error: Error,
  _request: Request,
  response: Response,
  _next: NextFunction
) => {
  return response.status(error instanceof Exception ? error.status : 500).json({
    error: {
      'lang': i18n.getLocale(),
      'message': i18n.__(error.name),
      'initial_message': error.message,
      'status': error instanceof Exception ? error.status : 500
    }
  });
};
