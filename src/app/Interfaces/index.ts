export interface NewUser {
  name: string;
  email: string;
  phoneNumber: number;
  password: string;
  confirmPassword?: string;
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
    cart_id:string
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
    isCancelled:number
}

export interface addToCart{
    product_id:string
    user_id:string
}

export interface successMessages{
    message:string
}

export interface AddUserSuccess {
  message: string;
}

export interface Login {
  email: string;
  password: string;
}
export interface LogUserSuccess {
  message: string;
  token: string;
}

