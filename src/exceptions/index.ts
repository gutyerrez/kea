export class Exception extends Error {
  public readonly status: number;

  constructor(name: string, message: string, status: number) {
    super();

    this.name = name;
    this.message = message;
    this.status = status;

    delete this.stack;
  }
}

export * from '@gentifly/zeraph/exceptions/UnauthorizedException';
export * from '@gentifly/zeraph/exceptions/InhabitantNotFoundException';
export * from '@gentifly/zeraph/exceptions/NotImplementedException';
