import axios from "axios";
import {FETCH_SMURF_START, FETCH_SMURF_SUCCESS, FETCH_SMURF_FALURE} from "./reducer"

export const getSmurfs = () => dispatch => {
  dispatch({type: FETCH_SMURF_START});
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      console.log(res);
      dispatch({type: FETCH_SMURF_SUCCESS, payload: res.data} )
    })
    .catch(err => {
      console.log(err);
      dispatch({type: FETCH_SMURF_FALURE, payload: err.response})
    })
}

export const postSmurfs = (smurf) => dispatch => {
  axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(res => {
      console.log("post res", res)
      dispatch({type: 'POST_SMURF_SUCCESS', payload: res.data})
    })
}