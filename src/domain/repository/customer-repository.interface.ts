import CustomerModel from "../../infrastructure/db/sequelize/model/customer.model";
import Address from "../Entity/Address";
import Customer from "../Entity/Customer";

import RepositoryInterface from "./repository-interface";

export default class CustomerRepositoryInterface
  implements RepositoryInterface<Customer>
{
  async create(entity: Customer): Promise<void> {
    await CustomerModel.create({
      id: entity.id,
      name: entity.name,
      number: entity.adress.number,
      street: entity.adress.street,
      zipcode: entity.adress.zip,
      city: entity.adress.city,
      active: entity.isActive(),
      rewardPoints: entity.rewardPoints,
    });
  }
  async update(entity: Customer): Promise<void> {
    await CustomerModel.update(
      {
        id: entity.id,
        name: entity.name,
        number: entity.adress.number,
        street: entity.adress.street,
        zipcode: entity.adress.zip,
        city: entity.adress.city,
        active: entity.active,
        rewardPoints: entity.rewardPoints,
      },
      {
        where: {
          id: entity.id,
        },
      }
    );
  }
  async find(id: string): Promise<Customer> {
    const customer = await CustomerModel.findOne({
      where: {
        id,
      },
    });
    const adress = new Address(
      customer!.street,
      customer!.number,
      customer!.zipcode,
      customer!.city
    );
    const customerResult = new Customer(customer!.id, customer!.name, adress);

    customerResult.active = customer!.active;
    return customerResult;
  }
  async findAll(): Promise<Customer[]> {
    const CustomersModel = await CustomerModel.findAll();
    return CustomersModel.map((customer) => {
      const adress = new Address(
        customer.street,
        customer.number,
        customer.zipcode,
        customer.city
      );
      const customerResult = new Customer(customer.id, customer.name, adress);

      customerResult.active = customer.active;
      return customerResult;
    });
  }
}
