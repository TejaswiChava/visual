const initialState = {

}

import {GET_CATS,GET_DOGS,GET_LANDSCAPES,GET_NATURE} from '../actions/actions';
export default function (state = initialState,action){
    switch(action.type){
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