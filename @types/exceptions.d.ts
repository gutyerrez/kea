declare module '@gentifly/zeraph/exceptions' {
  import { Exception } from '@gentifly/exceptions';

  export class UnauthorizedException extends Exception {
    constructor()

    constructor(message: string)
  }

  export class NotImplementedException extends Exception {
    constructor()
  }
}
