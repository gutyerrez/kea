import TypeScript from 'typescript';

import { IProvider } from '@gentifly/zeraph/providers';

export class TypeScriptProvider implements IProvider<typeof TypeScript> {
  private provider!: typeof TypeScript;

  public prepare = async () => {
    this.provider = await import('typescript');
  };

  public provide = (): typeof TypeScript => this.provider;
}
