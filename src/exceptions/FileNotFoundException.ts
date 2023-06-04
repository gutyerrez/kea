import { Exception } from '@gentifly/zeraph/exceptions';

export class FileNotFoundException extends Exception {
  constructor(message = 'File not found') {
    super('FileNotFound', message, 404);
  }
}
