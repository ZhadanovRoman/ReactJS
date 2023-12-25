import { Reducer } from "redux";
import { RootState } from ".";

const initialState: any = {
    contxt: ''
}

 

    const inptValRdcr: Reducer<RootState> = (state = initialState, action) => {
        switch (action.type) {
            case 'INPT_VAL':
               
                return {
                    ...state,
                    contxt: action
                }
    
            default:
                return state;
    
        }}
    
        export default inptValRdcr;