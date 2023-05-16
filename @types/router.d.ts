declare module '@gentifly/zeraph/http/router' {
  import { FastifyInstance, FastifyPluginOptions } from 'fastify';

  import { IController } from '@gentifly/zeraph/http/controllers';

  export class Router {
    public static get: <T extends { new (...args: any[]): IController }> (
      path: string | RegExp,
      controllerInstance: T,
      ...middlewares: any[]
    ) => void;

    public static head: <T extends { new (...args: any[]): IController }> (
      path: string | RegExp,
      controllerInstance: T,
      ...middlewares: any[]
    ) => void;

    public static post: <T extends { new (...args: any[]): IController }> (
      path: string | RegExp,
      controllerInstance: T,
      ...middlewares: any[]
    ) => void;

    public static put: <T extends { new (...args: any[]): IController }> (
      path: string | RegExp,
      controllerInstance: T,
      ...middlewares: any[]
    ) => void;

    public static patch: <T extends { new (...args: any[]): IController }> (
      path: string | RegExp,
      controllerInstance: T,
      ...middlewares: any[]
    ) => void;

    public static delete: <T extends { new (...args: any[]): IController }> (
      path: string | RegExp,
      controllerInstance: T,
      ...middlewares: any[]
    ) => void;

    public static options: <T extends { new (...args: any[]): IController }> (
      path: string | RegExp,
      controllerInstance: T,
      ...middlewares: any[]
    ) => void;

    public static router: (fastify: FastifyInstance, _options: FastifyPluginOptions) => Promise<void>;
  }
}
