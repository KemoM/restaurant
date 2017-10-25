import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

//import { stylesPopular, stylesClearance } from './popularClearance';
//import allCategories from './allCategories';
//import selectedCategory from './selectedCategory';


const reducers = combineReducers({
    //stylesPopular: stylesPopular,
    //stylesClearance: stylesClearance,
    //allCategories: allCategories,
    //selectedCategory: selectedCategory,
    router: routerReducer
});

export default reducers;