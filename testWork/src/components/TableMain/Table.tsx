import { useEffect, useRef, useState } from 'react';
import styles from './table.module.scss';
import { useDispatch, useStore } from 'react-redux';
import { RootState, clickStAction, clickTypeAction, mainArrAction } from '../../reducers';
import { useSortHook } from '../../hooks/useSortHook';
import FooterTable from '../FooterTable/FooterTable';
import HeaderTable from '../HeaderTable/HeaderTable';
import { useDataOperations } from '../../hooks/useDataOperationsHook';
import { useNumberPage } from '../../hooks/useNumberPage';





const Table = () => {

   const [mainArrLength, setMainArrLength] = useState<number>();
   const [renderArr, setRenderArr] = useState<any>();
   const [renderArgument, setRenderArgument] = useState<Array<any> | undefined>();
   const [inpt, setInpt] = useState<string | null | number>(15);
   const [rightBtn, setRightBtn] = useState<boolean>(false);
   const [leftBtn, setLeftBtn] = useState<boolean>(false);

   const store = useStore<RootState>();
   const dispatch = useDispatch();

   const { mainData, load, firstData, pageCount } = useDataOperations({ inpt, leftBtn, rightBtn })

   useEffect(() => {
      dispatch(mainArrAction(mainData));
      if (mainData) {
         setMainArrLength(mainData.length)
      }

   }, [mainData]);




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



      let countTypeName = [Object.keys(mainData[0])[1], Object.keys(mainData[0])[2], Object.keys(mainData[0])[5]]/// получаем названия колонок
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

   const selectValCount = useRef<number | undefined | null>()


   const handleLeftBtn = (state: boolean | ((prevState: boolean) => boolean)) => {
      setLeftBtn(state)

   }
   const handleRightBtn = (state: boolean | ((prevState: boolean) => boolean)) => {
      setRightBtn(state)
   }

   selectValCount.current = 1;
   const handleInputChange = (value: any) => { //прокидываем state от инпута
      setInpt(value);
      const selectValue = store.getState().selectValRdcr.contxt.selectVal;

      if (selectValue && !value) {
         setInpt(selectValue)//// передача числа из SELECT
      }

   }





   useEffect(() => {// передача массива в render
      if (store.getState().mainArrRdcr.contxt.mainArr) {
         const sortArray = store.getState().mainArrRdcr.contxt.mainArr;//отсортированный массив

         setRenderArgument(sortArray)
      }
   }, [mainData, clickState, inpt, store])


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

   const numPage = useNumberPage(inpt, firstData) // получаем число страниц 

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
                  pageCount={pageCount ? pageCount : 1}
                  numberPages={numPage}
                  tableLength={mainArrLength ? mainArrLength : 15}
                  handleLeft={handleLeftBtn}
                  handleRight={handleRightBtn}
                  firstData={firstData ? firstData : []}
                  row={inpt}
               />
            </>
         }
      </div>
   )
}

export { Table }


