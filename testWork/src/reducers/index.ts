
import { ActionCreator, AnyAction, combineReducers } from "redux";
import sortArrRdcr from "./SortArr";
import clickTypeRdcr from './ClickType';
import clickState from './ClickState';
import mainArrRdcr from './MainArr';
import inptValRdcr from "./InptVal";
import selectValRdcr from "./SelectedVal";


export type RootState = {
    inptValRdcr: any,

    selectValRdcr: {
        contxt:{
            selectVal: string
        }
    },

    sortArrRdcr: {
        contxt: {
            sortArr: Array<any>
        }
    },
    clickState: {
        contxt: {
            clickSt: string
        }
    },
    clickTypeRdcr: {
        contxt: {
            clickType: string
        }
    },
    mainArrRdcr: {
        contxt: {
            mainArr: Array<any>
        }
    }

};
export const sortArrAction: ActionCreator<AnyAction> = (sortArr) => ({
    type: 'SORT_ARR',
    sortArr,
});

export const clickStAction: ActionCreator<AnyAction> = (clickSt) => ({
    type: 'CLICK_ITEM',
    clickSt,
});

export const clickTypeAction: ActionCreator<AnyAction> = (clickType) => ({
    type: 'CLICK_TYPE',
    clickType,
});

export const mainArrAction: ActionCreator<AnyAction> = (mainArr) => ({
    type: 'MAIN_ARR',
    mainArr,
});
export const inptValueAction: ActionCreator<AnyAction> = (inpValue) => ({
    type: 'INPT_VAL',
    inpValue
})
export const selectValueAction: ActionCreator<AnyAction> = (selectVal) => ({
    type: 'SELECT_VAL',
    selectVal
})


export const combineReducer = combineReducers({ clickState, clickTypeRdcr, mainArrRdcr, sortArrRdcr, inptValRdcr, selectValRdcr });