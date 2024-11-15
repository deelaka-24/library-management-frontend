export class Member {
  public id: number;
  public name: string;
  public address: string;
  public email: string;
  public phone: string;

  constructor(
    id: number,
    name: string,
    address: string,
    email: string,
    phone: string
  ) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.email = email;
    this.phone = phone;
  }

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getAddress(): string {
    return this.address;
  }

  getEmail(): string {
    return this.email;
  }

  getPhone(): string {
    return this.phone;
  }
}
