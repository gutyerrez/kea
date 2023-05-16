import { readFileSync, existsSync } from 'fs';

import { EnvironmentFileNotFoundException } from '@gentifly/zeraph/environment/exceptions/EnvironmentFileNotFoundException';

import { EnvironmentNotFoundException } from '@gentifly/zeraph/environment/exceptions/EnvironmentNotFoundException';

export class Environment {
  private static ENVIRONMENT_FILE = `${process.cwd()}/.env`;

  public static prepare() {
    return Environment.readEnvironmentFile();
  }

  private static readEnvironmentFile() {
    if (!existsSync(Environment.ENVIRONMENT_FILE)) {
      throw new EnvironmentFileNotFoundException();
    }

    const variables = readFileSync(Environment.ENVIRONMENT_FILE).toString().split(/\n/);

    for (const variable of variables) {
      if (/^$/.test(variable) || variable === '' || variable.startsWith('#')) {
        continue;
      }

      const parts = variable.split(/=/);

      const key = parts[0];
      let value = parts[1];

      if (process.env[key]) {
        continue;
      }

      const regex = /\$\{(.*?)\}/g;

      value.match(regex)?.forEach((match) => {
        const environment = match.split(/\{/)[1].split(/\}/)[0];

        value = value.replace(match, process.env[environment] ?? '');
      });

      process.env[key] = value.replace(
        /("|\n)/g,
        ''
      );
    }
  }

  private static get<K extends keyof NodeJS.ProcessEnv>(key: K): unknown | undefined {
    return process.env[key];
  }

  public static getString<K extends keyof NodeJS.ProcessEnv>(key: K): string {
    const value = Environment.getStringOrNull(key);

    if (value == null || value == undefined) {
      throw new EnvironmentNotFoundException();
    }

    return value;
  }

  public static getStringOrNull<K extends keyof NodeJS.ProcessEnv>(key: K): string | null {
    const value = Environment.get(key);

    if (value == null || value == undefined) {
      return null;
    }

    return String(value);
  }

  public static getInt<K extends keyof NodeJS.ProcessEnv>(key: K): number {
    const value = Environment.getIntOrNull(key);

    if (value == null || value == undefined) {
      throw new EnvironmentNotFoundException();
    }

    return value;
  }

  public static getIntOrNull<K extends keyof NodeJS.ProcessEnv>(key: K): number | null {
    const value = Environment.get(key);

    if (value == null || value == undefined) {
      return null;
    }

    return Number(value);
  }

  public static get isTestEnvironment() {
    return Environment.getStringOrNull('NODE_ENV') == 'test';
  }
}
