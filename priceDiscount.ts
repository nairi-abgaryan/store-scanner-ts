import { IPriceDiscount } from "./interfaces";

export class PriceDiscount implements IPriceDiscount {
  productId: string;
  appliedCount: number;
  price: number;

  constructor(productId, discountPrice, appliedCount) {
    this.productId = productId;
    this.price = discountPrice;
    this.appliedCount = appliedCount;
  }
}
