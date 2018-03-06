export interface Post {
    id: number;
    name: string;
    image: string;
    price?: number;
    cartPrice?: number;
    quantity: number;
    order_date: any;
    delivery_date: any;
}