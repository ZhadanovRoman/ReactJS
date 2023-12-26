import axios from "axios";
import { useEffect, useRef, useState } from "react";


interface IDataProps {
    inpt: string | null | number,
    leftBtn: boolean,
    rightBtn: boolean
}

export const useDataOperations = ({ inpt, leftBtn, rightBtn }: IDataProps) => {
    const [load, setLoad] = useState<boolean>(true);
    const [dataNextPrev, setDataNextPrev] = useState<Array<any> | undefined>();
    const [mainData, setMainData] = useState<any>();
    const rightBtnCount = useRef<number>(0);

    const leftBtnCount = useRef<number>(0);
    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/location')
            .then(response => {
                const data = response.data.results;
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
                    if (leftBtnCount.current) { leftBtnCount.current-- };
                    let formula = Number(inpt) * rightBtnCount.current;
                    let newArrSlice = data.slice(formula);
                    let newArr = newArrSlice.slice(0, inpt);
                    setDataNextPrev(newArr);
                    setMainData(newArr);
                 
                }

                if (leftBtn) {
                    leftBtnCount.current++;
                    if (rightBtnCount.current) { rightBtnCount.current-- };
                    let formula = Number(inpt) * rightBtnCount.current;
                    let newArrSlice = data.slice(formula);
                    let newArr = newArrSlice.slice(0, inpt);
                    setDataNextPrev(newArr);
                    setMainData(newArr);
                }

            })
            .catch(error => {

                console.error('Ошибка при запросе данных:', error);
            })
            .finally(() => {
                setLoad(false)
            });

    }, [inpt, rightBtn, leftBtn]);

    return { mainData, load }
}