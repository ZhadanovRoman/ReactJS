import { Reducer } from "redux";
import { RootState } from ".";

const initialState: any = {
    contxt: ''
}

 const bestPostsReducer: Reducer<RootState> = (state = initialState, action) => {
    switch (action.type) {
      
         case 'TEXT_POSTS_DATA':
          console.log(state)
            return {
                ...state,
                
                contxt: action.postsData
            }

        default:
            return state;

    }}

    export default bestPostsReducer;