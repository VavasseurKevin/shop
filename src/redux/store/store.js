import { 
    applyMiddleware,
    createStore } from "redux";
import rootReducer from "../reducers";
import thunk from "redux-thunk";

export default () => {
    const store = createStore(
        rootReducer,
        applyMiddleware(thunk)
    );
};