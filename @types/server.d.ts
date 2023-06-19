declare module '@gentifly/zeraph/http/server' {
  export type Request = {
    body: any;
    params: Record<string, string>;
    query: Record<string, string>;
    headers: Record<string, string>;
  };

  export class Response {
    public status: (code: number) => Response;

    public send: (body?: any) => void;
  }
}
