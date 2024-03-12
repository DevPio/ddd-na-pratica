export default class Product {
  private _id!: string;
  private _name!: string;
  private _price!: number;

  constructor(id: string, name: string, price: number) {
    this._id = id;
    this._name = name;
    this._price = price;
    this.isValid();
  }

  isValid(): boolean {
    if (!this._id) throw new Error("Id is required");
    if (!this._name) throw new Error("Name is required");

    return true;
  }

  get id() {
    return this._id;
  }

  get price() {
    return this._price;
  }

  set price(value) {
    this._price = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}
