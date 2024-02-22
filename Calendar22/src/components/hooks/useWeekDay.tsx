
 

export const useWeekDay = <T extends number | undefined>(month: T, year: T): number | undefined=>{
  
    if (month !== undefined && year !== undefined) {
        let date = new Date(year, month, 1);
        let dayOfWeek = date.getDay();
        return dayOfWeek;
    } else {
    
        return undefined;
    }
}