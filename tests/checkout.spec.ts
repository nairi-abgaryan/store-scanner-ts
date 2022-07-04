import {PriceRules} from '../priceRules';
import {PriceDiscount} from '../discount';
import {Checkout} from '../checkout';
import {Bonus} from '../bonus';

describe('Checkout', function () {
  describe('scan', function () {
    //atv, ipd, ipd, atv, ipd, ipd, ipd
    it('should return 2718.95 scanning price rules for ipd 499.99 after 4 item', function () {
      const priceRules = new PriceRules()
      priceRules.setPriceRules(new PriceDiscount('ipd', 499.99, 4))
    
      let checkout = new Checkout(priceRules)
      checkout.scan('atv')
      checkout.scan('ipd')
      checkout.scan('ipd')
      checkout.scan('atv')
      checkout.scan('ipd')
      checkout.scan('ipd')
      checkout.scan('ipd')
    
      expect(checkout.total).toBe(2718.95)
    });
    
    // atv, atv, atv, vga
    it('should return 249 after scanning atv, atv, atv, vga, bonus rules 1 for after each 2', function () {
      const priceRules = new PriceRules()
      priceRules.setBonusRules(new Bonus('atv', 1, 2))
      
      let checkout = new Checkout(priceRules)
      checkout.scan('atv')
      checkout.scan('atv')
      checkout.scan('atv')
      checkout.scan('vga')
      
      expect(checkout.total).toBe(249.00)
    });
  });
  
  describe('applyPriceDiscount', function () {
    it('should apply price discount for after certain number', function () {
      const priceRules = new PriceRules()
      priceRules.setPriceRules(new PriceDiscount('ipd', 300, 4))
      
      let checkout = new Checkout(priceRules)
      checkout.scan('ipd')
      checkout.scan('ipd')
      checkout.scan('ipd')
      checkout.scan('ipd')
      checkout.scan('ipd')
      
      expect(checkout.total).toBe(1500)
    });
  });
  
  describe('applyBonusDiscount', function () {
    it('should give bonus after reaching certain number', function () {
      const priceRules = new PriceRules()
      priceRules.setBonusRules(new Bonus('atv', 2, 3))
      
      let checkout = new Checkout(priceRules)
      checkout.scan('atv')
      checkout.scan('atv')
      checkout.scan('atv')
      checkout.scan('atv')
      checkout.scan('atv')
      checkout.scan('atv')
      checkout.scan('atv')
      
      expect(checkout.total).toBe(547.5)
    });
  });
});
