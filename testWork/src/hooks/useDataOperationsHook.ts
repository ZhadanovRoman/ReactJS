import axios from "axios";
import { useEffect, useRef, useState } from "react";

import { useSelector } from "react-redux";


interface IDataProps {
    inpt: string | null | number,
    leftBtn: boolean,
    rightBtn: boolean,

}
interface IState {
    apiSelectRdcr: {
        contxt: {
            apiSelectVal: string
        }
    }
}

export const useDataOperations = ({ inpt, leftBtn, rightBtn }: IDataProps) => {

    const [load, setLoad] = useState<boolean>(true);
    const [firstData, setFirstData] = useState<Array<any>>()
    const [numRows, setNumRow] = useState<string | number>();
    const [pageCount, setPageCount] = useState<number>(1)
    const [dataNextPrev, setDataNextPrev] = useState<Array<any> | undefined>();
    const [mainData, setMainData] = useState<any>();
    const rightBtnCount = useRef<number>(0);
    const apiLink = useSelector((state: IState) => state.apiSelectRdcr.contxt.apiSelectVal);

    useEffect(()=>{
     rightBtnCount.current=0;
    },[inpt])
    useEffect(() => {
     
        axios.get(apiLink || 'https://rickandmortyapi.com/api/location')
            .then(response => {
                const data = response.data.results;
                setFirstData(data)
                setDataNextPrev(data);

                if (dataNextPrev) {
                    if (inpt && inpt !== '0') {// меняем размер массива по данным из инпута
                        let newArr = dataNextPrev.slice(0, Number(inpt));
                        setMainData(newArr);
                    } else { //render default
                        let newArr = dataNextPrev.slice(0, 15);
                        setMainData(newArr);
                    }
                }
                if (!inpt) { inpt = 15 }



                if (rightBtn) {// нужно вынеси в функцию повторы

                    rightBtnCount.current++;
                    let rigtBtnFn=()=>{
                        let formula = Number(inpt) * rightBtnCount.current;
                        let newArrSlice = data.slice(formula);
                        let newArr = newArrSlice.slice(0, inpt);
                        setDataNextPrev(newArr);
                        setMainData(newArr);
                    }
                    if (Number(inpt) * rightBtnCount.current >= data.length) {
                        rightBtnCount.current--
                        rigtBtnFn();
                    } else {
                        rigtBtnFn();
                    }
                }

                if (leftBtn) {

                    if (rightBtnCount.current) { rightBtnCount.current-- };
                    let formula = Number(inpt) * rightBtnCount.current;
                    let newArrSlice = data.slice(formula);
                    let newArr = newArrSlice.slice(0, inpt);
                    setDataNextPrev(newArr);
                    setMainData(newArr);
                }
                if (inpt) {
                    setNumRow(inpt)
                }

                setPageCount(rightBtnCount.current + 1)
            })
            .catch(error => {

                console.error('Ошибка при запросе данных:', error);
            })
            .finally(() => {
                setLoad(false)
            });
    
    }, [inpt, rightBtn, leftBtn, apiLink]);

    return { mainData, load, firstData, pageCount }

}