export enum StatusCode {
  success = 200,
  created = 201,
  found = 302,
  bad_req = 400,
  not_found = 404,
  internal_error = 500,
}

class LambdaResponse<RType> {
  private message: string;
  private statusCode: number;
  private data?: RType;

  constructor(message: string, statusCode: number, data?: RType) {
    this.message = message;
    this.statusCode = statusCode;
    this.data = data;
  }

  toString() {
    return {
      statusCode: this.statusCode,
      body: JSON.stringify({
        message: this.message,
        data: this.data,
      }),
    };
  }
}

export class LambdaMessage {
  static resolve(data: object, status: StatusCode) {
    const result = new LambdaResponse('success', status, data);

    return result.toString();
  }

  static error(messageError: string, status: StatusCode) {
    const result = new LambdaResponse(messageError, status || 500);

    return result.toString();
  }
}
