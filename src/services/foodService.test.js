import { fetchFoodList } from './foodService';
import { setupServer } from 'msw/native';
import { rest } from 'msw';
import { API_ADDRESS } from '../constants/config';

describe('food service test', () => {
  const server = setupServer()

  beforeAll(() => server.listen())

  afterEach(() => server.resetHandlers())

  afterAll(() => server.close())

  it('should return 1 data for fetchFoodList when there is only a data', async () => {
    server.use(rest.get(`${API_ADDRESS}/foods`, (req, res, ctx) => {
      const page = req.url.searchParams.get('page')
      const size = req.url.searchParams.get('size')
      return res(ctx.json({
        page: parseInt(page),
        size: parseInt(size),
        totalPages: 1,
        totalElements: 1,
        content: [{ id: 1, name: "香甜考肉饭", price: 15.5, description: "香甜可口，巴适得板" }]
      }))
    }));

    const response = await fetchFoodList({
      page: 1,
      size: 10,
    });
    expect(response).toEqual({
      page: 1,
      size: 10,
      totalPages: 1,
      totalElements: 1,
      content: [{ id: 1, name: "香甜考肉饭", price: 15.5, description: "香甜可口，巴适得板" }]
    })
  });
})
