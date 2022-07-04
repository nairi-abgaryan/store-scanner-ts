import {IBonusDiscount} from './interfaces';

export class Bonus implements IBonusDiscount {
  productId: string;
  appliedCount: number;
  bonusCount: number;
  
  constructor(productId, bonusCount, appliedCount) {
      this.productId = productId
      this.bonusCount = bonusCount
      this.appliedCount = appliedCount
  }
}
