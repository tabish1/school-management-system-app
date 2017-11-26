/**
 * Created by tabish on 11/26/17.
 */
import { GET_USER } from '../constants'

export const user = (state = [], action = {}) => {
    switch (action.type){
        case GET_USER:
            return action.payload;
        default:
            return state;
    }
};