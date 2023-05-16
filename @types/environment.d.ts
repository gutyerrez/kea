declare module '@gentifly/zeraph/environment' {
  export class Environment {
    public static prepare(): void

    public static getString<K extends keyof NodeJS.ProcessEnv>(key: K): string

    public static getStringOrNull<K extends keyof NodeJS.ProcessEnv>(key: K): string | null

    public static getInt<K extends keyof NodeJS.ProcessEnv>(key: K): number

    public static getIntOrNull<K extends keyof NodeJS.ProcessEnv>(key: K): number | null

    public static get isTestEnvironment(): boolean
  }
}
