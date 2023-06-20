import { Exception } from '@gentifly/exceptions';

export class UnauthorizedException extends Exception {
  constructor(message = 'unauthorized access') {
    super('UnauthorizedAccess', message, 401);
  }
}
