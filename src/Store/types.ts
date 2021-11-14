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
    purchaser_id: number,
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
    listing: IListing[],
    messages: IMessages[]

}

export type Img = {
  name: string;
  data: File;
  key: string;
  src: string;
};



export type Listing = {
    id: number;
    title: string;
    price: number;
    content: string;
    category: string;
    poster: IUser;
    purchaser?: IUser;
    posted: Date;
    images: Img[];
}