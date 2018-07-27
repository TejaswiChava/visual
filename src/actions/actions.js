export const GET_DOGS = 'GET_DOGS';
export const GET_CATS = 'GET_CATS';
export const GET_LANDSCAPES = 'GET_LANDSCAPES';
export const GET_NATURE = 'GET_NATURE';
//  export const GET_IMAGES = 'GET_IMAGES'
const getDogsImages=() => {
    return{
        type:GET_DOGS,
        payload:[
            {
              title: 'Title 1',
              caption: 'Caption 1',
              url: 'https://s3.amazonaws.com/visual-therapy/dogs/dog1.jpeg',
            }, {
              title: 'Title 2',
              caption: 'Caption 2',
              url: 'https://s3.amazonaws.com/visual-therapy/dogs/dog2.jpg',
            },
          ],
    }
}
const getCatsImages = () => {
    return {
        type:GET_CATS,
        payload:[
            {
                title: 'Cats',
                caption: 'Cats',
                url: 'https://s3.amazonaws.com/visual-therapy/cats/cat2.jpg'
            }
        ]
    }
}
const getLandScapeImages = () => {
    return {
        type: GET_LANDSCAPES,
        payload:[
            {
                title: 'Title 1',
                caption: 'Caption 1',
                url: 'https://s3.amazonaws.com/visual-therapy/dogs/dog1.jpeg',
              }, {
                title: 'Title 2',
                caption: 'Caption 2',
                url: 'https://s3.amazonaws.com/visual-therapy/dogs/dog2.jpg',
              },
        ]
    }
}
const getNatureImages = () => {
    return {
        type: GET_NATURE,
        payload:[
            {
                title: 'Title 1',
                caption: 'Caption 1',
                url: 'https://s3.amazonaws.com/visual-therapy/dogs/dog1.jpeg',
              }, {
                title: 'Title 2',
                caption: 'Caption 2',
                url: 'https://s3.amazonaws.com/visual-therapy/dogs/dog2.jpg',
              },
        ]
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