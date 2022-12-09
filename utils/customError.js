class CustomError extends Error {
  constructor(message, code) {
    super(mesasge);
    this.code = code;
  }
}
export default CustomError;
