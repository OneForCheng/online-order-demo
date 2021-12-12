export const getFoodCachedKey = ({ page, size }) => `cached_foods_page_${page}_size_${size}`

export const setCachedFoods = (key, foods) => {
  try {
    localStorage.setItem(key, JSON.stringify(foods));
  } catch (err) {
    console.log(err)
  }
}

export const getCachedFoods = key => {
  try {
    const data = localStorage.getItem(key);
    return JSON.parse(data) || null;
  } catch (err) {
    console.log(err)
    return null;
  }
}
