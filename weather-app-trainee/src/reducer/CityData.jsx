export function cityData(state=[],action){
    
    switch(action.type){
       case 'ADD_CITY_DATA':
        
          return  action.data
        
        default: return state;     
    }
    
}