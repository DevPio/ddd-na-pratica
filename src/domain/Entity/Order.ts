import OrderItem from "./order_item";

class Order {
  private _id!: string;
  private _customerId!: string;
  private _items!: OrderItem[];
  private _total!: number;

  constructor(id: string, customerId: string, items: OrderItem[]) {
    this._id = id;
    this._customerId = customerId;
    this._items = items;
    this._total = this.total();
    this.isValid();
  }

  isValid(): boolean {
    if (!this._id) throw new Error("Id is required");
    if (!this._customerId) throw new Error("Customer is required");
    if (!this._items || this._items.length === 0)
      throw new Error("items qts must be greater than 0");

    return true;
  }

  total() {
    const total = this._items.reduce((acc, item) => {
      return item.price * item.quantity + acc;
    }, 0);

    return total;
  }
}

export default Order;
