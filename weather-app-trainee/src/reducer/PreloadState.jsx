export function preloadState(state=true,action){
    
    switch(action.type){
       case 'ADD_PRELOAD_STATE':
        
          return  action.stat
        
        default: return state;     
    }
    
}

