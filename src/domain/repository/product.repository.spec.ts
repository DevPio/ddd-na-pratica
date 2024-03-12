import { Sequelize } from "sequelize-typescript";
import ProductModel from "../../infrastructure/db/sequelize/model/product.model";
import ProductRepositoryInterface from "./product-repository.interface";
import Product from "../Entity/Product";

describe("Product Repository test", () => {
  let sequelize: Sequelize;
  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });

    sequelize.addModels([ProductModel]);

    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });
  it("should create a product", async () => {
    const productRepository = new ProductRepositoryInterface();

    const product = new Product("1", "Cafeteira", 120);

    await productRepository.create(product);

    const productModel = await ProductModel.findOne({
      where: {
        id: "1",
      },
    });

    expect(productModel?.toJSON()).toStrictEqual({
      id: "1",
      name: "Cafeteira",
      price: 120,
    });
  });

  it("should update a product", async () => {
    const productRepository = new ProductRepositoryInterface();

    const product = new Product("1", "Cafeteira", 120);

    await productRepository.create(product);

    product.name = "Cafeteira Nacional";

    await productRepository.update(product);

    const productModel = await ProductModel.findOne({
      where: {
        id: "1",
      },
    });

    expect(productModel?.toJSON()).toStrictEqual({
      id: "1",
      name: "Cafeteira Nacional",
      price: 120,
    });
  });

  it("should return a product", async () => {
    const productRepository = new ProductRepositoryInterface();

    const product = new Product("1", "Cafeteira", 120);

    await productRepository.create(product);

    const productModel = await productRepository.find(product.id);

    expect({
      id: productModel.id,
      name: productModel.name,
      price: productModel.price,
    }).toStrictEqual({
      id: "1",
      name: "Cafeteira",
      price: 120,
    });
  });

  it("should return all product", async () => {
    const productRepository = new ProductRepositoryInterface();

    const products = [
      new Product("1", "Cafeteira", 120),
      new Product("2", "Cafeteira Mult", 140),
    ];

    await Promise.all(
      products.map((product) => productRepository.create(product))
    );

    const productModel = await productRepository.findAll();

    expect(productModel).toStrictEqual(products);
  });
});
