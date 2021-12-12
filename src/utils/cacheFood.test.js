import { getCachedFoods, setCachedFoods } from './cacheFood';
import { localStorageMock } from './localStorageMock';

describe('cache food', () => {
  it('should set cached key-value correctly in localStorage',  () => {
    setCachedFoods('cached_key', {
      page: 1,
      size: 10,
      totalPages: 1,
      totalElements: 1,
      content: [{ id: 1, name: "香甜考肉饭", price: 15.5, description: "香甜可口，巴适得板" }]
    });

    expect(localStorageMock.getItem('cached_key')).toEqual("{\"page\":1,\"size\":10,\"totalPages\":1,\"totalElements\":1,\"content\":[{\"id\":1,\"name\":\"香甜考肉饭\",\"price\":15.5,\"description\":\"香甜可口，巴适得板\"}]}");
  });

  it('should get cached value correctly in localStorage',  () => {
    setCachedFoods('mock_key', {
      page: 1,
      size: 10,
    });

    expect(getCachedFoods('mock_key')).toEqual({
      page: 1,
      size: 10,
    });
  });
})
