
export const useNumberPage = (inpt: string | number | null, arr: Array<any> | undefined ) => {
    if(!inpt){inpt = 15}// задаем число строк по умолчанию
     if(arr){
        
        return Math.ceil(arr.length/Number(inpt));
     }  
}