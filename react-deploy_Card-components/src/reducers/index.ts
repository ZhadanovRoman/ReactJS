import { Reducer } from "redux";
import { ActionCreator, AnyAction, combineReducers } from "redux";
import  bestPostsReducer  from "./BestPostsReducer";
import  tokenReducer  from "./TokenReducer";
const initialState: any = {
    contxt: ''
}
export type RootState = {
    bestPostsReducer:any,
tokenReducer:any

}

export const updateToken: ActionCreator<AnyAction> = (token) => ({
    type: 'TEXT_TOKEN',
    token,

})
export const updatePostsData: ActionCreator<AnyAction> = (postsData) => ({
    type: 'TEXT_POSTS_DATA',
    postsData,

})

export const combineReducer = combineReducers({bestPostsReducer, tokenReducer})



  
        
    

