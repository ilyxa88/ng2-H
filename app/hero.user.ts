export class User {
  constructor(
    public id: number,
    public name: string,
    public password: string,
    public power?: string,
    public alterEgo?: string
  ) {  }
}
