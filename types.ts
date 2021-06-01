export interface Article {
    id: number;
    name: string;
    price: number;
}

export interface TopArticle {
    id: number,
    name: string,
    quantity: number,
    progress: number
}

export interface CartArticle {
    id: number,
    name: string,
    price: number,
    quantity: number
}

export interface Transaction {
    id: number,
    totalPrice: number,
    cart: Array<CartArticle>
}