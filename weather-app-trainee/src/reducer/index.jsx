import { combineReducers } from "redux";
import btnSwip from './BtnSwipperVector' ;
import { preloadState } from "./PreloadState";
import { cityData } from "./CityData";
import { selectedCityItem } from "./SelectedCItyItem";
import  cityDataArr from "./CityDataArray"

export default combineReducers({
    btnSwip,preloadState,cityData,selectedCityItem,cityDataArr
});