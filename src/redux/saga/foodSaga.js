import { fetchFoodList } from '../../services/foodService';
import { call, put } from 'redux-saga/effects'
import { getFoodCachedKey, setCachedFoods } from '../../utils/cacheFood';

export function * fetchFoodSaga(action) {
  const data = yield call(fetchFoodList, action.payload);
  yield put({ payload: data });
  const cachedKey = getFoodCachedKey(action.payload);
  setCachedFoods(cachedKey, data)
}
