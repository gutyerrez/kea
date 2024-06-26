export type Request = {
  body: any;
  params: Record<string, string>;
  query: Record<string, string>;
  headers: Record<string, string>;
};
