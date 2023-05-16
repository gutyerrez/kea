declare module '@gentifly/zeraph/http/router' {
  import { IController } from '@gentifly/zeraph/http/controllers';

  import { RequestHandler, Router as ExpressRouter } from 'express';

  export class Router {
    public static get: <T extends { new (...args: any[]): IController }> (
      path: string | RegExp,
      controllerInstance: T,
      ...middlewares: RequestHandler[]
    ) => void;

    public static head: <T extends { new (...args: any[]): IController }> (
      path: string | RegExp,
      controllerInstance: T,
      ...middlewares: RequestHandler[]
    ) => void;

    public static post: <T extends { new (...args: any[]): IController }> (
      path: string | RegExp,
      controllerInstance: T,
      ...middlewares: RequestHandler[]
    ) => void;

    public static put: <T extends { new (...args: any[]): IController }> (
      path: string | RegExp,
      controllerInstance: T,
      ...middlewares: RequestHandler[]
    ) => void;

    public static patch: <T extends { new (...args: any[]): IController }> (
      path: string | RegExp,
      controllerInstance: T,
      ...middlewares: RequestHandler[]
    ) => void;

    public static delete: <T extends { new (...args: any[]): IController }> (
      path: string | RegExp,
      controllerInstance: T,
      ...middlewares: RequestHandler[]
    ) => void;

    public static options: <T extends { new (...args: any[]): IController }> (
      path: string | RegExp,
      controllerInstance: T,
      ...middlewares: RequestHandler[]
    ) => void;

    public static get routes(): ExpressRouter
  }
}
