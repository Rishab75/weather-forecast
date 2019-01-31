import { FETCH_DATA_FULFILLED, FETCH_DATA_REJECTED } from "../constants/ActionTypes";

const initialState={
    WeatherStation:{
        data:null,
        status:null
    }
};

export default function reducer(state=initialState , action) {
  switch (action.type) {
    case FETCH_DATA_FULFILLED: {
      return {
        ...state,
        WeatherStation:{
        data: action.payload,
        status: "success"
        }
      };
      // break;
    }
    case FETCH_DATA_REJECTED: {
      return {
        ...state,
        WeatherStation:{
        data: action.payload.response.data,
        status: "failed"
        }
      };

      console.error(`Could not fetch the data from webservice. ${action.payload}.`); // eslint-disable-line
      break;
    }
  }

  return state;
}