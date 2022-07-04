import {store} from './index';
import {IBonusDiscount, IPriceDiscount, IPriceRules} from './interfaces';

export class Checkout {
  priceRules: IPriceRules
  items: Map<string, number>
  total: number
  
  constructor(priceRules: IPriceRules) {
    this.priceRules = priceRules
    this.items = new Map()
    this.total = 0;
  }
  
  scan(productId: string): number {
      if(!store.has(productId)) throw new Error('Product not found')
   
      if(!this.items.has(productId))
        this.items.set(productId, 0)
      
      this.total += store.get(productId).price
      this.total = this.applyPriceDiscount(productId)
      this.total = this.applyBonusDiscount(productId)
      this.items.set(productId, this.items.get(productId) + 1)
    
      return this.total
  }
  
  applyPriceDiscount(productId: string): number {
    if (!this.priceRules.priceRules.has(productId)) return this.total
    
    let priceDiscount: IPriceDiscount = this.priceRules.priceRules.get(productId)
    let currentCount = this.items.get(productId)
    if(priceDiscount.appliedCount === this.items.get(productId)){
      this.total -= (currentCount + 1 )* store.get(productId).price
      this.total += priceDiscount.price * (currentCount + 1)
    }
    
    return Number((this.total).toFixed(2))
  }
  
  applyBonusDiscount(productId: string): number {
    if (!this.priceRules.bonusRules.has(productId)) return this.total
    
    let bonus: IBonusDiscount = this.priceRules.bonusRules.get(productId)
    let totalCount: number = this.items.get(productId)
    let appliedCount: number = Math.floor(totalCount / (bonus.appliedCount + bonus.bonusCount))
    let lastApplyCount = appliedCount * (bonus.appliedCount + bonus.bonusCount)
  
    if(totalCount - lastApplyCount - bonus.appliedCount + 1 > 0){
      this.total -= store.get(productId).price
    }
    
    return this.total
  }
}
