import Address from "./Address";
import Customer from "./Customer";

describe("Customer unit test", () => {
  it("should thorw error when id is empty", () => {
    expect(() => {
      const customer = new Customer("", "", new Address("", 12112, "2323", ""));
    }).toThrowError("Id is required");
  });

  it("should thorw error when name is empty", () => {
    expect(() => {
      const customer = new Customer(
        "323233",
        "",
        new Address("", 0, "2323", "")
      );
    }).toThrowError("Name is required");
  });

  it("should thorw error when call change with params name is empty", () => {
    expect(() => {
      const customer = new Customer(
        "323233",
        "name",
        new Address("", 0, "2323", "")
      );

      customer.changeName("");
    }).toThrowError("Name is required");
  });
});
