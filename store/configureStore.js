import { createStore, combineReducers } from "redux"
import selectCatagoryReducer from "../redux/reducers/selcect-catagory-reducer"

const rootReducer = combineReducers({
    selectCatagory: selectCatagoryReducer
});

const store = () => {
    return createStore(rootReducer)
};

export default store;