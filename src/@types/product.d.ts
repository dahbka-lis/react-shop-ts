export interface IProduct {
    id: number;
    category: string;
    title: string;
    description: string;
    image: string;
    price: number;
    rating: {
        rate: number;
        count: number;
    };
}

export type ICartItem = IProduct & { count: number };
