import Address from "./Address";

export default class Customer {
  private _id: string = "";
  private _name: string = "";
  private _address!: Address;
  private _rewardPoints: number = 0;
  private _active: boolean = false;

  constructor(id: string, name: string, address: Address) {
    this._id = id;
    this._name = name;
    this._address = address;
    this.valide();
  }

  valide() {
    if (!this._id) throw new Error("Id is required");

    if (!this._name || this._name.length === 0)
      throw new Error("Name is required");
  }

  changeName(name: string) {
    this._name = name;
    this.valide();
  }

  isActive() {
    this._active = true;

    return this, this._active;
  }

  get active() {
    return this._active;
  }

  set active(val) {
    this._active = val;
  }

  get rewardPoints(): number {
    return this._rewardPoints;
  }

  set rewardPoints(value: number) {
    this._rewardPoints = value;
  }

  get adress() {
    return this._address;
  }

  get name() {
    return this._name;
  }
  get id() {
    return this._id;
  }

  addRewardPoints(points: number) {
    this._rewardPoints += points;
  }
}
