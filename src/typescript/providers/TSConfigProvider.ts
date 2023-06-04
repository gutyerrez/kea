import { ParseConfigFileHost } from 'typescript';

import { IProvider } from '@gentifly/zeraph/providers';

import { TypeScriptProvider } from '@gentifly/zeraph/typescript/providers/TypeScriptProvider';

import { existsSync } from 'fs';

import * as path from 'path';

import { FileNotFoundException } from '@gentifly/zeraph/exceptions/FileNotFoundException';
import { UnprocessableEntityException } from '@gentifly/zeraph/exceptions/UnprocessableEntityException';

export class TSConfigProvider implements IProvider<any> {
  private typeScriptProvider: TypeScriptProvider;

  private provider!: any;

  constructor() {
    this.typeScriptProvider = new TypeScriptProvider();
  }

  public prepare = async () => {
    this.typeScriptProvider.prepare();

    const configFile = path.join(process.cwd(), 'tsconfig.json');

    if (!existsSync(configFile)) {
      throw new FileNotFoundException('tsconfig.json not found');
    }

    const config = this.typeScriptProvider.provide().getParsedCommandLineOfConfigFile(
      configFile,
      undefined,
      this.typeScriptProvider.provide().sys as unknown as ParseConfigFileHost
    );

    if (!config) {
      throw new UnprocessableEntityException('cannot parse tsconfig.json');
    }

    this.provider = {
      options: config.options,
      fileNames: config.fileNames,
      projectReferences: config.projectReferences
    };
  };

  public provide = () => this.provider;
}
