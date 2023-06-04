import { Exception } from '@gentifly/zeraph/exceptions';

export class UnprocessableEntityException extends Exception {
  constructor(message = 'unprocessable entity') {
    super('UnprocessableEntity', message, 422);
  }
}
