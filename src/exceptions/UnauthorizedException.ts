import { Exception } from '@gentifly/zeraph/exceptions';

export class UnauthorizedException extends Exception {
  constructor(message = 'unauthorized access') {
    super('UnauthorizedAccess', message, 401);
  }
}
