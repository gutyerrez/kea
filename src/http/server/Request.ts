import { Request as ExpressRequest } from 'express';

export type Request = ExpressRequest;

export type InhabitantRequest = Request & {
  inhabitantId: string
}
