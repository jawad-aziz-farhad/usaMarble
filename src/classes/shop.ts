import { Post } from '../models';

export class Shop {
    
    private post: Post;

    constructor(){}

    /* SETTING DATA */
    setAll(post: Post): void { this.post = post;}
    setId(id: number){ this.post.id = id; }
    setName(name: string){ this.post.name = name;}
    setPrice(price: string){ this.post.price = price;}
    setImage(image: string){ this.post.image = image;}

    /* GETTING DATA */
    getAll(): Post { return this.post;}
    getId(): number { return this.post.id; }
    getName(): string { return this.post.name; }
    getPrice(): string { return this.post.price; }
    getImage(): string { return this.post.image; }

}