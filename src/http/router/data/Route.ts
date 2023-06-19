import { IController } from '@gentifly/zeraph/http/controllers';

import { Method } from '@gentifly/zeraph/http/router/enums/Method';

export class Route {
  public path: string;
  public method: Method;
  public middlewares: any[];
  public controller: IController;

  constructor(
    path: string,
    method: Method,
    middlewares: any[],
    controller: IController
  ) {
    this.path = path;
    this.method = method;
    this.middlewares = middlewares;
    this.controller = controller;
  }
}
