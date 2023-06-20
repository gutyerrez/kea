interface String {
  equalsIgnoreCase(other: string): boolean
}

interface StringConstructor {
  format(format: string, ...args: any[]): string
}
