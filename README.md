Environment

```chef
node -v14.15.4
```

```chef
npm - v8.3.1
```

## Installation

```bash
$ git clone https://github.com/nairi-abgaryan/store-scanner-ts.git

$ npm install
```

## How to test

_**checkout.spec.test contains all test cases**_

```bash
# unit tests
$ npm run test:unit
```

Classes

```chef
Bonus -> for giving bonuses after buying a specific number of products
PriceDiscount -> for giving price discount after buying a specific number of products
Checkout -> Contains the functional for counting total after applying discount strategy
```

Applying new price or bonus rules

```js
const priceRules = new PriceRules();
priceRules.setBonusRules(new Bonus("atv", 1, 2)); // Each time will give 1 item after buying a 2
priceRules.setPriceRules(new PriceDiscount("ipd", 499.99, 4)); // Will change the item price to 499.99 after buyning 4 
item 
```
