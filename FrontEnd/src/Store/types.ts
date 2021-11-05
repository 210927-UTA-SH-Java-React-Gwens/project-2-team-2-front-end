export interface IUser {

    id: number,
    username: string,
    email:string,
    funds : number,
    password : string

}

export interface IListing {

    id: number,
    price: number,
    title:string,
    content : string,
    author_id: number,
    purchaser_id?: number,
    category:string
}

export interface IMessages {

    id: number
    sender_id: number,
    receiver_id: number,
    time: string,
    content:string
}

export type AppState = {
    user: IUser,
    listing:IListing[],
    messages: IMessages[]

}