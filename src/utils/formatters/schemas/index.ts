export type Data<T = Record<string, unknown>> = {
  data: {
    id: unknown
    type: string
    attributes: T
  }
}

export type ListData<T = Record<string, unknown>> = {
  data: Array<T>
  links: {
    current: string
    first: string
    previous: string | null
    next: string | null
    last: string | null
  }
  meta: {
    current: number,
    next: number | null,
    previous: number | null,
    totalPages: number,
    totalCount: number
  }
}
