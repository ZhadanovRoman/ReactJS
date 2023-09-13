import { Reducer } from "redux";
import { RootState } from ".";

const initialState: any = {
    contxt: ''
}

 const tokenReducer: Reducer<RootState> = (state = initialState, action) => {
    switch (action.type) {
        case 'TEXT_TOKEN':
            
            return {
                ...state,

                contxt: action.token
            }
        
        default:
            return state;

    }}

    export default tokenReducer;