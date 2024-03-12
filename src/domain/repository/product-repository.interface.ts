import ProductModel from "../../infrastructure/db/sequelize/model/product.model";
import Product from "../Entity/Product";
import RepositoryInterface from "./repository-interface";

export default class ProductRepositoryInterface
  implements RepositoryInterface<Product>
{
  async create(entity: Product): Promise<void> {
    await ProductModel.create({
      id: entity.id,
      name: entity.name,
      price: entity.price,
    });
  }
  async update(entity: Product): Promise<void> {
    await ProductModel.update(
      {
        id: entity.id,
        name: entity.name,
        price: entity.price,
      },
      {
        where: {
          id: entity.id,
        },
      }
    );
  }
  async find(id: string): Promise<Product> {
    const produt = await ProductModel.findOne({
      where: {
        id,
      },
    });

    return new Product(produt!.id, produt!.name, produt!.price);
  }
  async findAll(): Promise<Product[]> {
    const productsModel = await ProductModel.findAll();
    return productsModel.map(
      (product) => new Product(product.id, product.name, product.price)
    );
  }
}
