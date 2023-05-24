export interface User{
    name:string
    email:string
    phone:number
    password:string
    confirmPassword?:string
}

export interface Product{
    name: string
}

export interface Cart{
    productName: string
    id: string
    description: string
    price: number
    image: string
    count: number
}

export interface Order{
    order_id:string
    product_id:string
    user_id:string
    count:number
    isCncelled:number
    status:string
}