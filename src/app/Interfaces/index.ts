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
    productName: string
    order_id: string
    image: string
    count: number
    isCancelled:number
    status:string
}

export interface OrderAdmin{
   user_name:string
    email: string
    order_status: string
    order_id:string

}

export interface OrderUser{
    product_name:string
    description:string
    order_id: string
    product_image:string
    order_status:string
}