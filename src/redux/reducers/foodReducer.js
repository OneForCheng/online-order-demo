import { handleActions } from 'redux-actions'
import * as foodActions from '../actions/foodAction'
import { combineReducers } from 'redux';

const initState = {}

const foodList = handleActions({
  [foodActions.setFoodList]: (state, action) => {
    return {
      ...state,
      ...action.payload,
    };
  },
}, initState);

export default combineReducers({
  foodList
})
