export default class Address {
  #street!: string;
  #number!: number;
  #zip!: string;
  #city!: string;

  constructor(street: string, number: number, zip: string, city: string) {
    this.#street = street;
    this.#number = number;
    this.#zip = zip;
    this.#city = city;
  }

  public get street(): string {
    return this.#street;
  }

  public get number(): number {
    return this.#number;
  }

  public get zip(): string {
    return this.#zip;
  }

  public get city(): string {
    return this.#city;
  }
}
