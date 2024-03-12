import Product from "./Product";

describe("Product unit test", () => {
  it("should thorw error when id is empty", () => {
    expect(() => {
      new Product("", "Product name", 100);
    }).toThrowError("Id is required");
  });

  it("should thorw error when name is empty", () => {
    expect(() => {
      new Product("232323", "", 100);
    }).toThrowError("Name is required");
  });
});
