import axios from 'axios';
var parseString = require('react-native-xml2js').parseString;
export const GET_DOGS = 'GET_DOGS';
export const GET_CATS = 'GET_CATS';
export const GET_LANDSCAPES = 'GET_LANDSCAPES';
export const GET_NATURE = 'GET_NATURE';
export const GET_BUTTONS = 'GET_BUTTONS';

export const LOAD_INIT= 'LOADING_INIT';
export const LOAD_SUCCESS = 'LOAD_SUCCESS'

var animalImageMap = [];
var buttonsList = [];
//  export const GET_IMAGES = 'GET_IMAGES'
const getImages = (data) =>{
    
    const xml = data.data;
    parseString(xml, function (err, result) {
        console.log(result.ListBucketResult.Contents);
        var contents = result.ListBucketResult.Contents;
        for(var i=0;i<contents.length;i++) {
            var key = contents[i].Key[0];
            var split = key.split('/');
            
            if(!key.endsWith('/') && split.length > 1) {                
                if(!animalImageMap[split[0]]) {
                    animalImageMap[split[0]] = [];
                    buttonsList.push({id:i,title: split[0],status:false,selectedButton: false});
                }
                animalImageMap[split[0]].push({url:("https://s3.amazonaws.com/visual-therapy/"+split[0]+'/'+split[1]).replace(/ /g, '+')});
            }            
        }
    });
    return {
        type: GET_BUTTONS,
        payload: buttonsList
    }
   
}

const getDogsImages = () => {
    return {
        type:GET_DOGS,
        payload:animalImageMap.dogs
    }
}
const getCatsImages = () => {
    return {
        type:GET_CATS,
        payload:animalImageMap.cats
    }
}
const getLandScapeImages = () => {
    return {
        type: GET_LANDSCAPES,
        payload:animalImageMap.landscapes
    }
}
const getNatureImages = () => {
    return {
        type: GET_NATURE,
        payload:animalImageMap.nature
    }
}

const dispatchLoadInit = () => {
    return {
        type: LOAD_INIT,
        payload: true
    }
}

const dispatchLoadSuccess = () => {
    return {
        type: LOAD_SUCCESS,
        payload: false
    }
}

export function loadInit(){
    return function(dispatch){
        dispatch(dispatchLoadInit())
    }
}
export function getimages(){
    return function(dispatch){
        return axios.get('https://s3.amazonaws.com/visual-therapy').then(response=>{
            dispatch(getImages(response))
            dispatch(dispatchLoadSuccess())
        })
    }
}
 export function getdogsimages(){
    return function(dispatch){
        dispatch(getDogsImages())
    }
}
 
 export function getcatsimages(){
    return function(dispatch){
        dispatch(getCatsImages())
    }
 }
 export function getlandscapesimages(){
    return function(dispatch){
        dispatch(getLandScapeImages())
    }
 }
 export function getnatureimages(){
    return function(dispatch){
        dispatch(getNatureImages())
    }
 }
 