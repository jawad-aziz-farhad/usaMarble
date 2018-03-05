import { Shop } from './index';

export class Parse {

   private shop: Shop;

   constructor() {}
   
   setData(shop: Shop): void { this.shop = shop; }
   getData(): Shop { return this.shop; }

}