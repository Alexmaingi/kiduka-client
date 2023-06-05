import { CartStateInterface, OrdersStateInterface, ProductStateInterface } from "../Interfaces";

export interface AppState{
    products: ProductStateInterface
    cart:CartStateInterface
    orders:OrdersStateInterface
}