import {
  REQUEST_HOUSES_PENDING,
  REQUEST_HOUSES_SUCCESS,
  REQUEST_HOUSES_FAILED
} from './constants.js';

export const requestHouses = () => (dispatch) => {
  dispatch({ type : REQUEST_HOUSES_PENDING });
  fetch("http://mr-test-backend.sadek.usermd.net/houses",{
    method: "get"
  })
  .then( response => response.json())
  .then( resp => {
    const arr = resp.houses.map( (house, id) => {
      house.idNumber = id;
      return house;
    })
    return arr;
  })
  .then( data =>dispatch({ type : REQUEST_HOUSES_SUCCESS, payload : data }) )
  .catch(error => dispatch({ type : REQUEST_HOUSES_FAILED, payload : error }) )
}
