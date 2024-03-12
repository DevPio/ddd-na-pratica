import Product from "../Entity/Product";

export default class ProductService {
  static increasePrice(products: Product[], percent: number) {
    for (const product of products) {
      product.price = product.price + product.price * (percent / 100);
    }

    return products;
  }
}
