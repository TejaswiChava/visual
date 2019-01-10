const initialState = {

}

import {GET_CATS,GET_DOGS,GET_LANDSCAPES,GET_NATURE,GET_BUTTONS, LOAD_INIT, LOAD_SUCCESS} from '../actions/actions';
export default function (state = initialState,action){
    switch(action.type){
        case LOAD_INIT:
            return {...state, isLoading: action.payload}
        case LOAD_SUCCESS:
             return {...state, isLoading: action.payload}

        case GET_BUTTONS:
        return { ...state,buttons: action.payload }
        case GET_DOGS:
        return {...state, dogsimages: action.payload}

        case GET_CATS:
        return {...state, catsimages: action.payload}

        case GET_LANDSCAPES:
        return {...state,landscapeimages: action.payload}

        case GET_NATURE:
        return {...state,natureimages: action.payload}

        default:
        return state;
    }
}