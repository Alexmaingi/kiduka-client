import { CartStateInterface, ProductStateInterface } from "../Interfaces";

export interface AppState{
    products: ProductStateInterface
    cart:CartStateInterface
}