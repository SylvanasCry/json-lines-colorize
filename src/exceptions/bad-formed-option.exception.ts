export class BadFormedOptionException extends Error {
  constructor(
    public readonly option: string,
    public readonly value: string,
  ) {
    super(`Bad formed option "${option}", value: "${value}"\n`);
  }
}
