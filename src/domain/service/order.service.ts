import Customer from "../Entity/Customer";
import Order from "../Entity/Order";
import OrderItem from "../Entity/order_item";

export default class OrderService {
  static placeOrder(customer: Customer, orders: OrderItem[]) {}
  static total(items: Order[]) {
    const total = items.reduce((acc, item) => {
      return item.total() + acc;
    }, 0);

    return total;
  }
}
