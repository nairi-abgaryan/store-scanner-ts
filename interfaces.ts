export interface IProduct {
  id: string
  name: string
  price: number
}

export interface IDiscount {
  productId: string
  appliedCount: number
}

export interface IBonusDiscount extends IDiscount{
  bonusCount: number
}

export interface IPriceDiscount extends IDiscount {
  price: number
}

export interface IPriceRules {
  bonusRules: Map<string, IBonusDiscount>
  priceRules: Map<string, IPriceDiscount>
}
