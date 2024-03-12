import Address from "../Entity/Address";
import Customer from "../Entity/Customer";
import Order from "../Entity/Order";
import OrderItem from "../Entity/order_item";
import OrderService from "./order.service";

describe("Order service unit test", () => {
  it("Should place an order", () => {
    const adress = new Address("Rua x", 2323, "", "");
    const customer = new Customer("123", "Client x", adress);

    const item1 = new OrderItem("i1", "Item 1", 10, "p1", 1);

    const order = OrderService.placeOrder(customer, [item1]);

    expect(true).toBe(true);
  });
  it("it should get total orders", () => {
    const item1 = new OrderItem("121212", "item 1", 100, "product 1", 1);
    const item2 = new OrderItem("121212", "item 1", 200, "product 1", 2);

    const order = new Order("1", "1", [item1]);
    const order2 = new Order("1", "1", [item2]);

    const total = OrderService.total([order, order2]);

    expect(total).toBe(500);
  });
});
