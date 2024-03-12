class OrderItem {
  private _id!: string;
  private _name!: string;
  private _price!: number;
  private _productId!: string;
  private _quantity!: number;

  constructor(
    id: string,
    name: string,
    price: number,
    productId: string,
    quantity: number
  ) {
    this._id = id;
    this._name = name;
    this._price = price;
    this._productId = productId;
    this._quantity = quantity;
    this.isValid();
  }

  isValid() {
    if (this.quantity <= 0) throw new Error("Quantity must be greater than 0");
  }

  get price() {
    return this._price;
  }

  get quantity() {
    return this._quantity;
  }
}

export default OrderItem;
