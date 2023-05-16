import { Exception } from '@gentifly/zeraph/exceptions';

export class NotImplementedException extends Exception {
  constructor() {
    super('NotImplementedException', 'not implemented yet', 400);
  }
}
