import { SELECTE_CATAGORY } from "../constants";

export function select_catagories(catagory) {
    return {
        type: SELECTE_CATAGORY,
        payload: catagory
    };
}