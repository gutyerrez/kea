import fs from 'fs';
import path from 'path';

// TODO: turn it more abstract like as LSP (Liskov Substitution Principle)
import {
  Router as ExpressRouter,
  Request as ExpressRequest,
  Response as ExpressResponse,
  RequestHandler
} from 'express';

import { IController } from '@gentifly/zeraph/http/controllers';

import {
  Request,
  InhabitantRequest,
  Response
} from '@gentifly/zeraph/http/server';

import { Reflection } from '@gentifly/zeraph/utils/reflection';

export class Router {
  private static _routes = ExpressRouter({
    strict: true,
    caseSensitive: true
  });

  public static get = <T extends { new (...args: any[]): IController }> (
    path: string | RegExp,
    controllerInstance: T,
    ...middlewares: RequestHandler[]
  ): void => {
    const controller = Reflection.createInstance(controllerInstance);

    Router._routes.get(path, middlewares, async (request: ExpressRequest, response: ExpressResponse) => {
      return controller.handle(
        request as Request & InhabitantRequest,
        response as Response
      );
    });
  };

  public static head = <T extends { new (...args: any[]): IController }> (
    path: string | RegExp,
    controllerInstance: T,
    ...middlewares: RequestHandler[]
  ): void => {
    const controller = Reflection.createInstance(controllerInstance);

    Router._routes.head(path, middlewares, async (request: ExpressRequest, response: ExpressResponse) => {
      return controller.handle(
        request as Request & InhabitantRequest,
        response as Response
      );
    });
  };

  public static post = <T extends { new (...args: any[]): IController }> (
    path: string | RegExp,
    controllerInstance: T,
    ...middlewares: RequestHandler[]
  ): void => {
    const controller = Reflection.createInstance(controllerInstance);

    Router._routes.post(path, middlewares, async (request: ExpressRequest, response: ExpressResponse) => {
      return controller.handle(
        request as Request & InhabitantRequest,
        response as Response
      );
    });
  };

  public static put = <T extends { new (...args: any[]): IController }> (
    path: string | RegExp,
    controllerInstance: T,
    ...middlewares: RequestHandler[]
  ): void => {
    const controller = Reflection.createInstance(controllerInstance);

    Router._routes.put(path, middlewares, async (request: ExpressRequest, response: ExpressResponse) => {
      return controller.handle(
        request as Request & InhabitantRequest,
        response as Response
      );
    });
  };

  public static patch = <T extends { new (...args: any[]): IController }> (
    path: string | RegExp,
    controllerInstance: T,
    ...middlewares: RequestHandler[]
  ): void => {
    const controller = Reflection.createInstance(controllerInstance);

    Router._routes.patch(path, middlewares, async (request: ExpressRequest, response: ExpressResponse) => {
      return controller.handle(
        request as Request & InhabitantRequest,
        response as Response
      );
    });
  };

  public static delete = <T extends { new (...args: any[]): IController }> (
    path: string | RegExp,
    controllerInstance: T,
    ...middlewares: RequestHandler[]
  ): void => {
    const controller = Reflection.createInstance(controllerInstance);

    Router._routes.delete(path, middlewares, async (request: ExpressRequest, response: ExpressResponse) => {
      return controller.handle(
        request as Request & InhabitantRequest,
        response as Response
      );
    });
  };

  public static options = <T extends { new (...args: any[]): IController }> (
    path: string | RegExp,
    controllerInstance: T,
    ...middlewares: RequestHandler[]
  ): void => {
    const controller = Reflection.createInstance(controllerInstance);

    Router._routes.options(path, middlewares, async (request: ExpressRequest, response: ExpressResponse) => {
      return controller.handle(
        request as Request & InhabitantRequest,
        response as Response
      );
    });
  };

  private static prepare(directory: string) {
    const files = fs.readdirSync(directory, { withFileTypes: true });

    for (const file of files) {
      if (file.isDirectory()) {
        Router.prepare(path.join(directory, file.name));
      } else {
        if (/route|routes|router/.test(file.name)) {
          require(path.join(directory, file.name));
        }
      }
    }
  }

  public static get routes(): ExpressRouter {
    Router.prepare(`${process.cwd()}/src`);

    return Router._routes;
  }
}
