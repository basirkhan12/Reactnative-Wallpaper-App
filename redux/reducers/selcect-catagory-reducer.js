import { SELECTE_CATAGORY } from "../constants";

const initialState = {
    items: [],
}

export default function selectCatagoryReducer(state = initialState, action) {
    let newstate = { ...state }

    switch (action.type) {


        case SELECTE_CATAGORY:
            return newstate = {
                items: [...newstate.items, action.payload]
            }



        default:
            return state;
    }
}