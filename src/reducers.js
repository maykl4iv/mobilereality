import {
  REQUEST_HOUSES_PENDING,
  REQUEST_HOUSES_SUCCESS,
  REQUEST_HOUSES_FAILED
} from './constants';

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
