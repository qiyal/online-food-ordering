export class Customer {
  constructor(
    public email: string,
    public password: string,
    public firstName: string,
    public lastName: string,
    public phoneNumber: string,
    public genre: string,
    public cashback: number,
    public urlAvatar: string
  ) {
  }
}
