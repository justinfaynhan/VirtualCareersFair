export interface IHttpRequest {
  body: string;
  query: any;
  params: any;
  ip: string;
  method: string;
  path: string;
  headers: {
    'Content-Type': string;
    Referer?: string;
    'User-Agent'?: string;
  }
}

export interface IHttpResponse {
  headers: any;
  statusCode: number;
  body: any;
}