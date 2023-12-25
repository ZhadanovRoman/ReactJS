import { Reducer } from "redux";
import { RootState } from ".";

const initialState: any = {
    contxt: ''
}

 

    const mainArrRdcr: Reducer<RootState> = (state = initialState, action) => {
        switch (action.type) {
            case 'MAIN_ARR':
           
                return {
                    ...state,
                    contxt: action
                }
    
            default:
                return state;
    
        }}
    
        export default mainArrRdcr;