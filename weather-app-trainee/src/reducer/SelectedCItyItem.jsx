export function selectedCityItem(state=[],action){
    
    switch(action.type){
       case 'ADD_SELECTED_CITY':
        
          return  action.city
        
        default: return state;     
    }
    
}