import {
  CREATE_HOUSE,
  DELETE_HOUSE,
  REQUEST_HOUSES_PENDING,
  REQUEST_HOUSES_SUCCESS,
  REQUEST_HOUSES_FAILED
} from 'constants.js';

export const requestHouses = () => (dispatch) => {
  dispatch({ type : REQUEST_HOUSES_PENDING });
  fetch("http://mr-test-backend.sadek.usermd.net/swagger/#/houses/get_houses")
  .then( response => response.json() )
  .then( data => dispatch({ type : REQUEST_HOUSES_SUCCESS, payload : data }))
  .catch(error => dispatch({ type : REQUEST_HOUSES_FAILED, payload : error }))
}

export const deleteHouse = (text) => ({
    type : DELETE_HOUSE,
    payload : text
})

export const createHouse = (text) => ({
    type : CREATE_HOUSE,
    payload : text
})
