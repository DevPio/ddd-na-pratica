import Order from "./Order";
import Product from "./Product";
import OrderItem from "./order_item";

describe("Ordem unit test", () => {
  it("should thorw error when id is empty", () => {
    expect(() => {
      new Order("", "", []);
    }).toThrowError("Id is required");
  });

  it("should thorw error when Customer is empty", () => {
    expect(() => {
      new Order("1223", "", []);
    }).toThrowError("Customer is required");
  });

  it("should thorw error when items is empty", () => {
    expect(() => {
      new Order("1223", "23111232", []);
    }).toThrowError("items qts must be greater than 0");
  });

  it("should calculate total", () => {
    const product = new Product("2323", "product 1", 12121);

    const item = new OrderItem("Item 1", "Item", 100, product.id, 2);

    const item2 = new OrderItem("Item 1", "Item", 1200, product.id, 2);

    const items: Array<OrderItem> = [];

    items.push(item);
    items.push(item2);

    const order = new Order("322332", "232332", items);

    expect(order.total()).toBe(2600);
  });

  it("should check if the qts qtd is greater than 0", () => {
    expect(() => {
      const product = new Product("2323", "product 1", 12121);

      const item = new OrderItem("Item 1", "Item", 100, product.id, 0);

      const items: Array<OrderItem> = [];

      items.push(item);

      const order = new Order("322332", "232332", items);
      order.total();
    }).toThrowError("Quantity must be greater than 0");
  });
});
