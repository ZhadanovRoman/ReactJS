import { Reducer } from "redux";
import { RootState } from ".";

const initialState: any = {
    contxt: ''
}

 

    const selectValRdcr: Reducer<RootState> = (state=initialState, action) => {
        switch (action.type) {
            case 'SELECT_VAL':
               
                return {
                    ...state,
                    contxt: action
                }
    
            default:
                return state;
    
        }}
    
        export default selectValRdcr;