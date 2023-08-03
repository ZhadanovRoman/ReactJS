import initialState from "../store/initialState";

function btnSwip(state=initialState,action){
    
    switch(action.type){
       case 'ADD_BTN_STATE':
        
          return  action.stat
        
        default: return state;     
    }
    
}

export default btnSwip;

/*хранилище */