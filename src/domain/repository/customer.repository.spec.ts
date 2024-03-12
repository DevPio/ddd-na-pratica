import { Sequelize } from "sequelize-typescript";

import Customer from "../Entity/Customer";
import CustomerModel from "../../infrastructure/db/sequelize/model/customer.model";
import Address from "../Entity/Address";
import CustomerRepositoryInterface from "./customer-repository.interface";

describe("Product Repository test", () => {
  let sequelize: Sequelize;
  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });

    sequelize.addModels([CustomerModel]);

    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });
  it("should create a Customer", async () => {
    const customerRepository = new CustomerRepositoryInterface();

    const adress = new Address(
      "Rua ze das colves",
      123,
      "2323",
      "Rio de Janeiro"
    );

    const customer = new Customer("1", "Leandro", adress);

    await customerRepository.create(customer);

    const customertModel = await CustomerModel.findOne({
      where: {
        id: "1",
      },
    });

    expect(customertModel?.toJSON()).toStrictEqual({
      active: true,
      city: "Rio de Janeiro",
      id: "1",
      name: "Leandro",
      number: 123,
      rewardPoints: 0,
      street: "Rua ze das colves",
      zipcode: "2323",
    });
  });

  it("should update a product", async () => {
    const customerRepository = new CustomerRepositoryInterface();

    const adress = new Address(
      "Rua ze das colves",
      123,
      "2323",
      "Rio de Janeiro"
    );

    const customer = new Customer("1", "Leandro", adress);

    await customerRepository.create(customer);

    const customertModel = await CustomerModel.findOne({
      where: {
        id: "1",
      },
    });

    customer.changeName("Leandro Pereira");

    await customerRepository.update(customer);

    const productModel = await CustomerModel.findOne({
      where: {
        id: "1",
      },
    });

    expect(productModel?.toJSON()).toStrictEqual({
      active: true,
      city: "Rio de Janeiro",
      id: "1",
      name: "Leandro Pereira",
      number: 123,
      rewardPoints: 0,
      street: "Rua ze das colves",
      zipcode: "2323",
    });
  });

  it("should return a product", async () => {
    const customerRepository = new CustomerRepositoryInterface();

    const adress = new Address(
      "Rua ze das colves",
      123,
      "2323",
      "Rio de Janeiro"
    );

    const customer = new Customer("1", "Leandro", adress);

    await customerRepository.create(customer);

    const customerResult = await customerRepository.find("1");

    const customerModel = await CustomerModel.findOne({
      where: {
        id: "1",
      },
    });

    expect(customerModel?.toJSON()).toStrictEqual({
      active: customerResult.active,
      city: customer.adress.city,
      id: customer.id,
      name: customer.name,
      number: customer.adress.number,
      rewardPoints: customer.rewardPoints,
      street: customer.adress.street,
      zipcode: customer.adress.zip,
    });
  });

  it("should return all product", async () => {
    const customerRepository = new CustomerRepositoryInterface();

    const customers = [
      new Customer(
        "1",
        "Mario Fernando",
        new Address("Rua ze das colves", 123, "2323", "Rio de Janeiro")
      ),
      new Customer(
        "2",
        "Leandro Almeida",
        new Address("Rua maria das colves", 123, "2323", "Rio de Janeiro")
      ),
    ];

    await Promise.all(
      customers.map((customer) => customerRepository.create(customer))
    );

    const customersModel = await customerRepository.findAll();

    expect(customersModel).toStrictEqual(customers);
  });
});
