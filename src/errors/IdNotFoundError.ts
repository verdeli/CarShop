export default class IdNotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.message = message;
    this.name = 'IdNotFoundError';
    this.stack = '404';
  }
}