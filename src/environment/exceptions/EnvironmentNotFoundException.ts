import { Exception } from '@gentifly/zeraph/exceptions';

export class EnvironmentNotFoundException extends Exception {
  constructor() {
    super('EnvironmentNotFound', 'environment not found', 404);
  }
}
