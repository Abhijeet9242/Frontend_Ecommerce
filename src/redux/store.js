import {legacy_createStore,applyMiddleware,combineReducers} from "redux";
import thunk from "redux-thunk";

import { adminReducer, productReducer } from "./reducers/adminReducer";
import { userReducer } from "./reducers/userReducer";

export const rootReducer = combineReducers({
    product:productReducer,
    user:userReducer,
    admin:adminReducer

})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))