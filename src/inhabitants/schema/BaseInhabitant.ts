export class BaseInhabitant {
  public id: string;
  public name: string;
  public email: string;
  public birthday: Date;
  public balance: number;
  public plan: {
    name: string
    description: string
    code: number
  };
  public place: {
    name: string
    externalStoreId: string
  };
  public createdAt: Date;
  public updatedAt: Date | null;

  constructor(
    id: string,
    name: string,
    email: string,
    birthday: Date,
    balance: number,
    plan: {
      name: string
      description: string
      code: number
    },
    place: {
      name: string
      externalStoreId: string
    },
    createdAt: Date,
    updatedAt: Date
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.birthday = birthday;
    this.balance = balance;
    this.plan = plan;
    this.place = place;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
