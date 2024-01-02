import { Reducer } from "redux";
import { RootState } from ".";

const initialState: any = {
    contxt: ''
}

    const apiSelectRdcr: Reducer<RootState> = (state = initialState, action) => {
        switch (action.type) {
            case 'API_SELECT':
           
                return {
                    
                    ...state,
                    contxt: action
                }
    
            default:
                return state;
    
        }}
    
        export default apiSelectRdcr;