import  {legacy_createStore,applyMiddleware, compose, combineReducers} from "redux";

import thunk from "redux-thunk"

import { reducer  as authReducer} from "./authReducer/reducer";

const rootReducer = combineReducers({authReducer})
const composeEnhancers =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


const store = legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))

export {store}