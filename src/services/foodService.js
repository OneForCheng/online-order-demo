import * as queryString from 'query-string';
import { API_ADDRESS } from '../constants/config';

export const fetchFoodList = params => {
  return fetch(`${API_ADDRESS}/foods?${queryString.stringify(params)}`).then(response => response.json())
}
