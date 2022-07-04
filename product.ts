import { IProduct } from "./interfaces";

export class Product implements IProduct {
  id: string;
  name: string;
  price: number;

  constructor(id, name, price) {
    this.id = price;
    this.price = price;
    this.name = name;
  }
}
