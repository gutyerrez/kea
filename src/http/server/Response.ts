export class Response {
  protected _status = 200;
  protected _body: any = {};

  public status = (code: number): Response => {
    this._status = code;

    return this;
  };

  public send = (body: any = {}): void => {
    this._body = body;

    return;
  };

  public get statusCode(): number {
    return this._status;
  }

  public get body(): any {
    return this._body;
  }
}
