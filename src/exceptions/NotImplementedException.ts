import { Exception } from '@gentifly/exceptions';

export class NotImplementedException extends Exception {
  constructor() {
    super('NotImplementedException', 'not implemented yet', 400);
  }
}
