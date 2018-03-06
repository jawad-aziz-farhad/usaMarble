import { Post } from '../models';

export class Shop {
    
    private post: Post;

    constructor(){}

    /* SETTING DATA */
    setAll(post: Post): void { this.post = post;}
    setId(id: number){ this.post.id = id; }
    setName(name: string){ this.post.name = name;}
    setPrice(price: number){ this.post.price = price;}
    setCartPrice(cartPrice: number) { this.post.cartPrice = cartPrice;}
    setImage(image: string){ this.post.image = image;}
    setOrderDate(order_date: any){ this.post.order_date = order_date;}
    setDeliveryDate(delivery_date: any){ this.post.delivery_date = delivery_date; }

    /* GETTING DATA */
    getAll(): Post { return this.post;}
    getId(): number { return this.post.id; }
    getName(): string { return this.post.name; }
    getPrice(): number { return this.post.price; }
    getCartPrice():number { return this.post.cartPrice;}
    getImage(): string { return this.post.image; }
    getOrderDate(): any{ return this.post.order_date; }
    getDeliveryDate(): any{ return this.post.delivery_date;}

}