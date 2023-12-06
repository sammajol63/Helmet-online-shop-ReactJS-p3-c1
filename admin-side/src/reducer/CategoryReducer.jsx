import {KYT_PENDING, KYT_SUCCESS, KYT_REJECT} from '../actions/type'

const initialState = {
    isLoading: true,
    resultCategory: [],
    errorMsg:""
}


const CategoryReducer = (state = initialState, action)=> {
    switch(action.type) {
        case KYT_PENDING:
            return{
                ...initialState
            };
        case KYT_SUCCESS:
            return{
                ...state,
                isLoading: false,
                resultCategory: action.payload
            }
        case KYT_REJECT:
            return{
                ...state,
                errorMsg: action.payload
            };
        default:
            return state;
        
        }
}

export default CategoryReducer