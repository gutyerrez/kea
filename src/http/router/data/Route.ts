import { IController } from '@gentifly/zeraph/http/controllers';

export class Route {
  public path: string;
  public method: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'PATCH' |'DELETE' | 'OPTIONS';
  public middlewares: any[];
  public controller: IController;

  constructor(
    path: string,
    method: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'PATCH' |'DELETE' | 'OPTIONS',
    middlewares: any[],
    controller: IController
  ) {
    this.path = path;
    this.method = method;
    this.middlewares = middlewares;
    this.controller = controller;
  }
}
