import {Product} from "./product";

export class Category {

  constructor(
    public id?: string,
    public name?: string,
    public description?: string,
    public products: Array<Product> = []
  ) {}
}
