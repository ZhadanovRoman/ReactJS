export const btnsSwipperState = (st) => (
    {
        type: 'ADD_BTN_STATE',
        stat: st
    }
);

export const PreloadState = (st) => (

    {
        type: 'ADD_PRELOAD_STATE',
        stat: st
    }
);

export const CityData = (data) => (
    {
        type: 'ADD_CITY_DATA',
        data: data
    }
)

export const SelectedCityItem = (city) => (
    {
        type: 'ADD_SELECTED_CITY',
        city: city
    }
)

export const CityDataArray = (data) => (
    {
        type: 'ADD_CITY_DATA_ARR',
        data: data
    }
)