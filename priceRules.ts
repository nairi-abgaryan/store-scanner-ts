import { IBonusDiscount, IPriceDiscount } from "./interfaces";
import { PriceDiscount } from "./priceDiscount";
import { Bonus } from "./bonus";

export class PriceRules {
  bonusRules: Map<string, IBonusDiscount>;
  priceRules: Map<string, IPriceDiscount>;
  constructor() {
    this.bonusRules = new Map<string, IBonusDiscount>();
    this.priceRules = new Map<string, IPriceDiscount>();
  }

  setPriceRules(priceDiscount: PriceDiscount): void {
    this.validate(priceDiscount.price, priceDiscount.appliedCount);

    this.priceRules.set(
      priceDiscount.productId,
      new PriceDiscount(
        priceDiscount.productId,
        priceDiscount.price,
        priceDiscount.appliedCount
      )
    );
  }

  setBonusRules(bonusDiscount: IBonusDiscount): void {
    this.validate(bonusDiscount.bonusCount, bonusDiscount.appliedCount);

    this.bonusRules.set(
      bonusDiscount.productId,
      new Bonus(
        bonusDiscount.productId,
        bonusDiscount.bonusCount,
        bonusDiscount.appliedCount
      )
    );
  }

  validate(discount: number, count: number) {
    if (discount < 1 || count < 1) throw new Error("Invalid Request");
  }
}
