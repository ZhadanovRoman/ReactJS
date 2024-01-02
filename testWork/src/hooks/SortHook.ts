import { useStore } from "react-redux";
import { RootState, sortArrAction } from "../reducers";
import { useDispatch } from "react-redux";
import { useEffect} from "react";


/*
interface IProps {
    clickState: boolean | string,
    //clickType: string ,
    
}*/



export const useSortHook = (clickState: boolean | undefined, clickType: string) => {
    //const [sortArr, setSortArr] = useState<any>()
    
    const store = useStore<RootState>();
    const mainArr = store.getState().mainArrRdcr.contxt.mainArr;
    
    const dispatch = useDispatch();
    useEffect(() => {

        if (!clickState) {

            switch (clickType) {
                case 'name':
                    mainArr.sort((a: { name: string; }, b: { name: any; }) => {
                        return a.name.localeCompare(b.name, 'en', { sensitivity: 'base' });
                    });
                    break;
                case 'type':
                    mainArr.sort((a: { type: string; }, b: { type: any; }) => {
                        return a.type.localeCompare(b.type, 'en', { sensitivity: 'base' });
                    });
                    break;
                case '#':
                    mainArr.sort((a: { id: number; }, b: { id: number; }) => {
                        return a.id - b.id
                    });
                    break;
            }
        } else {

            switch (clickType) {
                case 'name':
                    mainArr.sort((a: { name: string; }, b: { name: any; }) => {
                        return b.name.localeCompare(a.name, 'en', { sensitivity: 'base' });
                    });
                    break;
                case 'type':
                    mainArr.sort((a: { type: string; }, b: { type: any; }) => {
                        return b.type.localeCompare(a.type, 'en', { sensitivity: 'base' });
                    });
                    break;
                case '#':
                    mainArr.sort((a: { id: number; }, b: { id: number; }) => {
                        return b.id - a.id
                    });
                    break;
            }

        }



    }, [clickState])
   
    dispatch(sortArrAction(mainArr))

}
