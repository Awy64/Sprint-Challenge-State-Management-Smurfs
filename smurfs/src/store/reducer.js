export const FETCH_SMURF_START =  "FETCH_SMURF_START";
export const FETCH_SMURF_SUCCESS =  "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FALURE =  "FETCH_SMURF_FALURE";
export const POST_SMURF_START = "POST_SMURF_START";
export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCESS";
export const POST_SMURF_FALURE = "POST_SMURF_FALURE";

const initialState = {
  smurfs: [],
  errors: ""
}

export const reducer = (state = initialState, action) => {
  switch(action.type){
    default:
      return state;
      case FETCH_SMURF_START:
        return {
          ...state,
          smurfs: [],
          errors: "",
        }
      case FETCH_SMURF_SUCCESS:
        return {
          ...state,
          smurfs: action.payload,
          errors: "",
        }
      case FETCH_SMURF_FALURE:
        return {
          ...state,
          smurfs: [],
          errors: action.payload,
        }
      case "POST_SMURF_SUCCESS":
        return {
          ...state,
          smurfs: action.payload,
          errors: "",
        }
  }
}