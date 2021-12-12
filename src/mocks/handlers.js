import { rest } from 'msw';
import { API_ADDRESS } from '../constants/config';
import { mockFoods } from './data';

const foodsAPI = rest.get(`${API_ADDRESS}/foods`, (req, res, ctx) => {
  const page = parseInt(req.url.searchParams.get('page'));
  const size = parseInt(req.url.searchParams.get('size'));
  return res(ctx.json({
    page,
    size,
    totalPages: Math.ceil(mockFoods.length / size),
    totalElements: mockFoods.length,
    content: mockFoods.slice((page - 1) * size, page * size),
  }))
});

export const handlers = [foodsAPI];
