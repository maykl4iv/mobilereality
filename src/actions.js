import {
  REQUEST_HOUSES_PENDING,
  REQUEST_HOUSES_SUCCESS,
  REQUEST_HOUSES_FAILED
} from './constants.js';

export const requestHouses = () => (dispatch) => {
  dispatch({ type : REQUEST_HOUSES_PENDING });
  fetch("http://mr-test-backend.sadek.usermd.net/swagger/#/houses/get_houses",{
    method: 'get',
    mode: 'no-cors'
  })
  .then( response => {
    return response.text();

  } )
  .then( data => dispatch({ type : REQUEST_HOUSES_SUCCESS, payload : data }))
  .catch(error => dispatch({ type : REQUEST_HOUSES_FAILED, payload : error }))
}
