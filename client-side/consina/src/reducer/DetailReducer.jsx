import { detail_PENDING, detail_SUCCESS, detail_REJECT } from "../actions/type";

const initialState = {
  isLoading: true,
  resultDetail: {},
  errorMsg: "",
};

const DetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case detail_PENDING:
      return {
        ...initialState,
      };
    case detail_SUCCESS:
      return {
        ...state,
        isLoading: false,
        resultDetail: action.payload,
      };
    case detail_REJECT:
      return {
        ...state,
        isLoading: false,
        errorMsg: action.payload,
      };
    default:
      return state;
  }
};

export default DetailReducer;
