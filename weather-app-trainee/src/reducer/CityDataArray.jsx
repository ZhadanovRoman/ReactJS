

function cityDataArr(state=[],action){
    
    switch(action.type){
       case 'ADD_CITY_DATA_ARR':
        
          return  action.data
        
        default: return state;     
    }
    
}

export default cityDataArr;