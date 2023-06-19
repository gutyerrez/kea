import { Exception } from '@gentifly/zeraph/exceptions';

export class EnvironmentNotFoundException extends Exception {
  constructor(name: keyof NodeJS.ProcessEnv) {
    super('EnvironmentNotFound', `environment ${name} not found`, 404);
  }
}
