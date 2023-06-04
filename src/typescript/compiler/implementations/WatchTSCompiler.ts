import { ICompiler } from '@gentifly/zeraph/typescript/compiler/interfaces/ICompiler';

import { Diagnostic } from 'typescript';

import { TSConfigProvider, TypeScriptProvider } from '@gentifly/zeraph/typescript/providers';

import * as path from 'path';

export class WatchTSCompiler implements ICompiler {
  private typeScriptProvider: TypeScriptProvider;
  private tsConfigProvider: TSConfigProvider;

  constructor() {
    this.typeScriptProvider = new TypeScriptProvider();
    this.tsConfigProvider = new TSConfigProvider();
  }

  public watch = () => {
    this.typeScriptProvider.prepare();
    this.tsConfigProvider.prepare();

    const typescript = this.typeScriptProvider.provide();
    const config = this.tsConfigProvider.provide();

    const createProgram = typescript.createEmitAndSemanticDiagnosticsBuilderProgram;

    const originalDiagnosticReporter = (typescript as any).createDiagnosticReporter(
      typescript.sys,
      true
    );

    const originalWatchStatusReporter = (typescript as any).createWatchStatusReporter(
      typescript.sys,
      true
    );

    const host = typescript.createWatchCompilerHost(
      path.join(process.cwd(), 'tsconfig.json'),
      config.options,
      typescript.sys,
      createProgram,
      this.createDiagnosticReporter(originalDiagnosticReporter),
      this.createWatchStatusChanged(originalWatchStatusReporter, () => {
        console.log('opa');
      })
    );

    host.createProgram;

    return;
  };

  private createDiagnosticReporter(
    diagnosticReporter: (diagnostic: Diagnostic, ...args: any[]) => any
  ) {
    return function(this: any, diagnostic: Diagnostic, ...args: any[]) {
      return diagnosticReporter.call(this, diagnostic, ...args);
    };
  }

  private createWatchStatusChanged(
    watchStatusReporter: (diagnostic: Diagnostic, ...args: any[]) => any,
    onSuccess?: () => void
  ) {
    return function(this: any, diagnostic: Diagnostic, ...args: any[]) {
      const messageText = diagnostic && diagnostic.messageText;
      const noErrorsMessage = '0 errors';

      if (
        messageText &&
        (messageText as string).includes &&
        (messageText as string).includes(noErrorsMessage) &&
        onSuccess
      ) {
        onSuccess();
      }

      return watchStatusReporter.call(this, diagnostic, ...args);
    };
  }
}
