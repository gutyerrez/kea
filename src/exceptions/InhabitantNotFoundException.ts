import { Exception } from '@gentifly/zeraph/exceptions';

export class InhabitantNotFoundException extends Exception {
  constructor() {
    super('InhabitantNotFound', 'inhabitant not found', 404);
  }
}
