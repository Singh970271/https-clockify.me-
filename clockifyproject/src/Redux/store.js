import { legacy_createStore as createstore,applyMiddleware,compose } from "redux";
import thunk from "redux-thunk"
import { projectReducer } from "./reducer";


const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store=createstore(projectReducer,composeEnhancers(applyMiddleware(thunk)))