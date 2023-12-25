import { Reducer } from "redux";
import { RootState } from ".";

const initialState: any = {
    contxt: ''
}

 

    const clickTypeRdcr: Reducer<RootState> = (state = initialState, action) => {
        switch (action.type) {
            case 'CLICK_TYPE':
             
                return {
                    ...state,
                    contxt: action
                }
    
            default:
                return state;
    
        }}
    
        export default clickTypeRdcr;