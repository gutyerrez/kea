import {
  RequestHandler,
  Request,
  Response,
  NextFunction
} from 'express';

import { Environment } from '@gentifly/zeraph/environment';

import { verify } from 'jsonwebtoken';

import { UnauthorizedException } from '@gentifly/zeraph/exceptions';

export const InhabitantMiddleware: RequestHandler = (
  request: Request,
  _response: Response,
  next: NextFunction
) => {
  const accessToken = request.headers.authorization;

  if (!accessToken || !RegExp(/Bearer+\s+[A-Za-z0-9\-\._~\+\/]*/).test(accessToken)) {
    throw new UnauthorizedException();
  }

  const token = accessToken.split(' ').last();

  try {
    const payload = verify(token, Environment.getString('JWT_SECRET'));

    if (payload instanceof Object) {
      const inhabitantId = payload['inhabitant_id'];

      Object.assign(request, { inhabitantId });
    }
  } catch {
    throw new UnauthorizedException('invalid jwt signature');
  }

  return next();
};
