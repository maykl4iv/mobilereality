import {
  CREATE_HOUSE,
  DELETE_HOUSE,
  REQUEST_HOUSES_PENDING,
  REQUEST_HOUSES_SUCCESS,
  REQUEST_HOUSES_FAILED
} from 'constants.js';

const initialStateHouses = {
  isPending : false,
  houses : [],
  error : ''
}

export const requestHouses = ( state=initialStateHouses, action={} ) => {
  switch(action.type){
    case REQUEST_HOUSES_PENDING :
      return Object.assign({}, state, { isPending : true });
    case REQUEST_HOUSES_SUCCESS :
      return Object.assign({}, state, { houses : action.payload, isPending : false});
    case REQUEST_HOUSES_FAILED :
      return Object.assign({}, state, { error : action.payload, isPending : false});
    default:
      return state;
  }
}

const initialStateForCreate = {
  id: "",
  address: "",
  owner: "",
  price: "",
  area: 0
}

export const createHouse = (state=initialStateForCreate, action={}) => {
  switch(action.type){
    case CREATE_HOUSE :
      return Object.assign({}, state, {createHouse: action.payload})
    default :
      return state;
  }
}

const initialStateForDelete = {
  id: ""
}

export const deleteHouse = (state=initialStateForCreate, action={}) => {
  switch(action.type){
    case DELETE_HOUSE :
      return Object.assign({}, state, {deleteHouse: action.payload})
    default :
      return state;
  }
}
