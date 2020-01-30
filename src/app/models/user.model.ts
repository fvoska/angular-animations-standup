export class User {
  public readonly avatar: string;

  constructor(public username: string) {
    this.avatar = `https://api.adorable.io/avatars/64/${username}.png`;
  }
}
