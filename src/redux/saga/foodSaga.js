import { fetchFoodList } from '../../services/foodService';
import { call, put } from 'redux-saga/effects'
import { getFoodCachedKey, setCachedFoods } from '../../utils/cacheFood';
import { setFoodList } from '../actions/foodAction';

export function * fetchFoodSaga(action) {
  const data = yield call(fetchFoodList, action.payload);
  yield put(setFoodList(data));
  const cachedKey = getFoodCachedKey(action.payload);
  setCachedFoods(cachedKey, data)
}
