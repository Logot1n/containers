export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
  }

  addError(number, text) {
    this.errors.set(number, text);
  }

  translate(code) {
    const message = this.errors.get(code);
    if (!message) {
      return 'Unknown Error';
    }
    return message;
  }
}
