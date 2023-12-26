import { useEffect, useRef, useState } from 'react';
import axios from 'axios'
import styles from './table.module.scss';
import { useDispatch, useStore } from 'react-redux';
import { RootState, clickStAction, clickTypeAction, mainArrAction } from '../../reducers';
import { useSortHook } from '../../hooks/SortHook';
import FooterTable from '../FooterTable/FooterTable';
import HeaderTable from '../HeaderTable/HeaderTable';




const Table = () => {
   const [mainArrLength, setMainArrLength] = useState();
   const [mainData, setMainData] = useState<any>();
   const [load, setLoad] = useState<boolean>(true);
   const [renderArr, setRenderArr] = useState<any>();
   const [renderArgument, setRenderArgument] = useState<Array<any> | undefined>();
   const [inpt, setInpt] = useState<string | null | number>(15);
   const [dataNextPrev, setDataNextPrev] = useState<Array<any> | undefined>();
   const [rightBtn, setRightBtn] = useState(false);
   const [leftBtn, setLeftBtn] = useState(false);
   const store = useStore<RootState>();

   const dispatch = useDispatch();
   dispatch(mainArrAction(mainData));

   
    

   const [clickState, setClickState] = useState<boolean>(false);
   const [clickType, setClickType] = useState<string>('');

   useSortHook(clickState, clickType);

   dispatch(clickStAction(clickState));
   dispatch(clickTypeAction(clickType));

   const countName = useRef<number>(1);
   const countType = useRef<number>(1);
   const countNumb = useRef<number>(1);



   const itemClick = (e: any) => {

      if (!clickState) {
         setClickState(true)
      } else {
         setClickState(false)
      }

      setClickType(e.target.textContent)

      let countTypeName = ['name', 'type', '#']
      let countArr = [countName, countType, countNumb]

      for (let i = 0; i < countArr.length; i++) {
         switch (e.target.textContent) {// смена HeaderArrowTop/Bottom
            case countTypeName[i]:
               if (countArr[i].current % 2 === 0) {
                  countArr[i].current++
                  e.target.childNodes[2].style.opacity = 0;
                  e.target.childNodes[3].style.opacity = 1;

               } else {
                  countArr[i].current++
                  e.target.childNodes[2].style.opacity = 1;
                  e.target.childNodes[3].style.opacity = 0;
               }
               break;
         }
      }
   }

  const rightBtnCount = useRef<number>(0);
  
  const leftBtnCount = useRef<number>(0);
   useEffect(() => {
      axios.get('https://rickandmortyapi.com/api/location')
         .then(response => {
            const data = response.data.results
            setDataNextPrev(data)
           
            if(dataNextPrev){
            if (inpt && inpt !== '0') {// меняем размер массива по данным из инпута
               let newArr =dataNextPrev.slice(0, Number(inpt)) 
              
               setMainData(newArr)
             
            } else { //render default
               let newArr = dataNextPrev.slice(0, 15)
               setMainData(newArr);
              
            }
         }else{
            if (inpt && inpt !== '0') {// меняем размер массива по данным из инпута
               let newArr =data.slice(0, inpt) 
              
               setMainData(newArr)
             
            } else { //render default
               let newArr =data.slice(0, 15)
               setMainData(newArr);
              
            }
         }
            if (rightBtn ) {// нужно вынеси в функцию повторы
               rightBtnCount.current++;
               if(leftBtnCount.current){leftBtnCount.current--}
               let formula = Number(inpt)*rightBtnCount.current
               let newArrSlice = data.slice(formula)
               let newArr = newArrSlice.slice(0, inpt)
               setDataNextPrev(newArr)
                  setMainData(newArr)
                 
            }
            
               if (leftBtn ) {
                  leftBtnCount.current++;
                  if(rightBtnCount.current){rightBtnCount.current--}
                  let formula = Number(inpt)*rightBtnCount.current
                  let newArrSlice = data.slice(formula)
                  let newArr = newArrSlice.slice(0, inpt)
                  setDataNextPrev(newArr)
                     setMainData(newArr)
               }
            
         })
         .catch(error => {

            console.error('Ошибка при запросе данных:', error);
         })
         .finally(() => {
            setLoad(false)
         });

   }, [inpt, rightBtn, leftBtn]);

   const handleLeftBtn = (state: boolean | ((prevState: boolean) => boolean)) => {
      setLeftBtn(state)

   }
   const handleRightBtn = (state: boolean | ((prevState: boolean) => boolean)) => {
      setRightBtn(state)  
   }

   const handleInputChange = (value: any) => { //прокидываем state от инпута
      setInpt(value);

      const selectValue = store.getState().selectValRdcr.contxt.selectVal
      if(selectValue){
         setInpt( selectValue )//// передача числа из SELECT
      }
      
   }

   useEffect(() => {// передача массива в render
      if (store.getState().mainArrRdcr.contxt.mainArr) {
         const sortArray = store.getState().mainArrRdcr.contxt.mainArr;//отсортированный массив
        
         setRenderArgument(sortArray)

      } else {
         if (mainData) {
            setMainArrLength(mainData.length)
           
            setRenderArgument(mainData)
         }
      }
      
   }, [mainData, clickState, inpt])


   
   


   useEffect(() => {  //отрисовка таблицы
      const renderArr: any = renderArgument

      if (renderArr) {


         const item: any = renderArr.map((el: {
            id: string,
            name: string,
            url: string,
            type: string
         },
            index: number) =>
            <li key={index} className={styles.table__item}>
               <span className={styles.table__itemNumber}>{el.id}</span>
               <span className={styles.table__itemName}>{el.name}</span>
               <span className={styles.table__itemUrl}>{el.url}</span>
               <span className={styles.table__itemType}>{el.type}</span>
            </li>
         )

         setRenderArr(item)
      }
   }, [renderArgument, clickState])
   
   
   return (
      <div className={styles.table} onClick={itemClick}>

         {load ? <div className={styles.table__preloader}></div> :

            <><HeaderTable
               name={mainData ? Object.keys(mainData[0])[1] : ''}
               type={mainData ? Object.keys(mainData[0])[2] : ''}
               url={mainData ? Object.keys(mainData[0])[5] : ''}
               onInputChange={handleInputChange}
            />
               <ul className={styles.table__list}>
                  {renderArr}
               </ul>
               <FooterTable
                  tableLength={mainArrLength ? mainArrLength : '20'}
                  handleLeft={handleLeftBtn}
                  handleRight={handleRightBtn}
                  row={inpt}
               />
            </>
         }
      </div>
   )
}

export { Table }


