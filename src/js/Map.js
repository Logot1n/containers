export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [400, 'Ошибка1'],
      [401, 'Ошибка2'],
      [403, 'Ошибка3'],
      // итд
    ]);
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
