export interface ICompiler {
  processSourceFile?: () => void

  watch?: () => void
}
