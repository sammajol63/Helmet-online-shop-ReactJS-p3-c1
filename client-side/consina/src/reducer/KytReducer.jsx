import {KYT_PENDING, KYT_SUCCESS, KYT_REJECT} from '../actions/type'

const initialState = {
    isLoading: true,
    resultKyt: [],
    errorMsg:""
}

const KytReducer = (state = initialState, action)=> {
    switch(action.type) {
        case KYT_PENDING:
            return{
                ...initialState
            };
        case KYT_SUCCESS:
            return{
                ...state,
                isLoading: false,
                resultKyt: action.payload
            }
        case KYT_REJECT:
            return{
                ...state,
                isLoading: false,
                errorMsg: action.payload
            };
        default:
            return state;
        
        }
}

export default KytReducer