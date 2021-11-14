import { IUser, Listing, Img } from "./types";

export const defaultUser:IUser = {
  id: 0,
  username: "",
  email: "",
  funds : 0,
  password : ""
};

export const defaultListing:Listing = {
  id: 0,
  title: "",
  content: "",
  price: -1,
  category: "",
  posted: new Date(0),
  poster: defaultUser,
  images: []
};

export const defaultFile:Img = {
  name: "",
  data: new File([""], ""),
  key: "",
  src: ""
}