import { fetchFoodList } from '../../services/foodService';
import { call, put, takeEvery } from 'redux-saga/effects'
import { getCachedFoods, getFoodCachedKey, setCachedFoods } from '../../utils/cacheFood';
import * as foodAction from '../actions/foodAction';

export function * fetchFoodSaga(action) {
  const cachedKey = getFoodCachedKey(action.payload);
  let data
  try {
    data = yield call(fetchFoodList, action.payload);
  } catch (err) {
    const cachedFoods = getCachedFoods(cachedKey);
  }
  yield put(foodAction.setFoodList(data));
  setCachedFoods(cachedKey, data)
}

export default function* watchFetchFoodSaga() {
  yield takeEvery(foodAction.fetchFoodList.toString(), fetchFoodSaga)
}
