import { createAction } from 'redux-actions'

const FOOD_ACTIONS = {
  SET_FOOD_LIST: 'SET_FOOD_LIST',
  FETCH_FOOD_LIST: 'FETCH_FOOD_LIST',
}

export const setFoodList = createAction(
  FOOD_ACTIONS.SET_FOOD_LIST,
  payload => payload,
)

export const fetchFoodList = createAction(
  FOOD_ACTIONS.FETCH_FOOD_LIST,
  payload => payload,
)
