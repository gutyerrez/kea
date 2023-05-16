import { Exception } from '@gentifly/zeraph/exceptions';

export class EnvironmentFileNotFoundException extends Exception {
  constructor() {
    super('EnvironmentFileNotFound', 'environment file not found', 404);
  }
}
