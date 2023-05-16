declare module '@gentifly/zeraph/exceptions' {
  export class Exception extends Error {
    public readonly status: number;

    constructor(name: string, message: string, status: number)
  }

  export class UnauthorizedException extends Exception {
    constructor()

    constructor(message: string)
  }

  export class InhabitantNotFoundException extends Exception {
    constructor()
  }

  export class NotImplementedException extends Exception {
    constructor()
  }
}
