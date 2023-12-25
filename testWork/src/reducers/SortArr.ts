import { Reducer } from "redux";
import { RootState } from ".";

const initialState: any = {
    contxt: ''
}

 

    const sortArrRdcr: Reducer<RootState> = (state = initialState, action) => {
        switch (action.type) {
            case 'SORT_ARR':
           
                return {
                    ...state,
                    contxt: action
                }
    
            default:
                return state;
    
        }}
    
        export default sortArrRdcr;