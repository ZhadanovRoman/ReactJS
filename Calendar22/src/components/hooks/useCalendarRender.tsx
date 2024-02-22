

export const useCalendarRendor = <T extends number | undefined>(weekDay: T, daysOfMonth: T) => {
    const emptyArr = [];
    const dayOfMonthArr = [];
    if(weekDay!==undefined&&daysOfMonth){
        if(weekDay===0){// если воскресенье то ...
            for(let j = 0; j<6 ; j++){
                emptyArr.push('')
            }
        }else{
        for(let j = 0; j<weekDay-1 ; j++){
            emptyArr.push('')
        }
    }
         for(let i = 1; i<daysOfMonth+1; i++ ){
            dayOfMonthArr.push(i);
         }
         
        }
       return [emptyArr, dayOfMonthArr];
}