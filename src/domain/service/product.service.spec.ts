import Product from "../Entity/Product";
import ProductService from "./product.service";

describe("Product service unit tests", () => {
  it("Should change the prices all producsts", () => {
    const product1 = new Product("product 1", "product 1", 12);
    const product2 = new Product("product 2", "product 2", 10);

    const products = [product1, product2];

    ProductService.increasePrice(products, 100);

    expect(product1.price).toBe(24);
    expect(product2.price).toBe(20);
  });
});
