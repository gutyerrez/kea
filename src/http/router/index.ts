import { FastifyInstance, FastifyPluginOptions } from 'fastify';

import fs from 'fs';
import path from 'path';

import { IController } from '@gentifly/zeraph/http/controllers';

import { Route } from '@gentifly/zeraph/http/router/data/Route';

import {
  InhabitantRequest,
  Request,
  Response
} from '@gentifly/zeraph/http/server';

import { ExceptionHandlerMiddleware, InhabitantMiddleware } from '@gentifly/zeraph/http/middlewares';

import { Reflection } from '@gentifly/zeraph/utils/reflection';

export class Router {
  private static routes: Route[] = [];

  public static get = <T extends { new (...args: any[]): IController }> (
    path: string,
    controllerInstance: T,
    ...middlewares: any[]
  ): void => {
    const controller = Reflection.createInstance(controllerInstance);

    this.routes.push({
      path,
      method: 'GET',
      middlewares,
      controller: controller
    });
  };

  public static head = <T extends { new (...args: any[]): IController }> (
    path: string,
    controllerInstance: T,
    ...middlewares: any[]
  ): void => {
    const controller = Reflection.createInstance(controllerInstance);

    this.routes.push({
      path,
      method: 'HEAD',
      middlewares,
      controller: controller
    });
  };

  public static post = <T extends { new (...args: any[]): IController }> (
    path: string,
    controllerInstance: T,
    ...middlewares: any[]
  ): void => {
    const controller = Reflection.createInstance(controllerInstance);

    this.routes.push({
      path,
      method: 'POST',
      middlewares,
      controller: controller
    });
  };

  public static put = <T extends { new (...args: any[]): IController }> (
    path: string,
    controllerInstance: T,
    ...middlewares: any[]
  ): void => {
    const controller = Reflection.createInstance(controllerInstance);

    this.routes.push({
      path,
      method: 'PUT',
      middlewares,
      controller: controller
    });
  };

  public static patch = <T extends { new (...args: any[]): IController }> (
    path: string,
    controllerInstance: T,
    ...middlewares: any[]
  ): void => {
    const controller = Reflection.createInstance(controllerInstance);

    this.routes.push({
      path,
      method: 'PATCH',
      middlewares,
      controller: controller
    });
  };

  public static delete = <T extends { new (...args: any[]): IController }> (
    path: string,
    controllerInstance: T,
    ...middlewares: any[]
  ): void => {
    const controller = Reflection.createInstance(controllerInstance);

    this.routes.push({
      path,
      method: 'DELETE',
      middlewares,
      controller: controller
    });
  };

  public static options = <T extends { new (...args: any[]): IController }> (
    path: string,
    controllerInstance: T,
    ...middlewares: any[]
  ): void => {
    const controller = Reflection.createInstance(controllerInstance);

    this.routes.push({
      path,
      method: 'OPTIONS',
      middlewares,
      controller: controller
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

  public static router = async (fastify: FastifyInstance, _options: FastifyPluginOptions) => {
    Router.prepare(`${process.cwd()}/src`);

    fastify.setErrorHandler(ExceptionHandlerMiddleware);

    for (const route of this.routes) {
      fastify.route({
        method: route.method,
        url: route.path,
        handler: async (legacyRequest, legacyResponse) => {
          const controller = route.controller;

          const headers: Record<string, string> = {};
          const params: Record<string, string> = {};
          const query: Record<string, string> = {};

          for (const header of Object.keys(legacyRequest.headers)) {
            headers[header] = legacyRequest.headers[header]!.toString();
          }

          for (const param of Object.keys(legacyRequest.params as any)) {
            params[param] = (legacyRequest.params as any)[param].toString();
          }

          for (const query of Object.keys(legacyRequest.query as any)) {
            params[query] = (legacyRequest.query as any)[query].toString();
          }

          const request: Request = {
            headers,
            params,
            query,
            body: legacyRequest.body
          };

          const response = new Response();

          if (route.middlewares.some(it => it == InhabitantMiddleware)) {
            const inhabitantId = legacyRequest.headers['x-inhabitant-id']!.toString();

            await controller.handle({ ...request, inhabitantId }, response);
          } else {
            await controller.handle(request as Request & InhabitantRequest, response);
          }

          return legacyResponse.status((response as any).statusCode).send((response as any).body);
        },
        preHandler: route.middlewares
      });
    }
  };
}
