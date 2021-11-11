import { combineReducers } from "redux";

import { userReducer } from "./UserReducer";
import { listingReducer } from "./ListingReducer";
import { messageReducer } from "./MessageReducer";

export default combineReducers({
    user:userReducer,
    listing:listingReducer,
    message:messageReducer
});