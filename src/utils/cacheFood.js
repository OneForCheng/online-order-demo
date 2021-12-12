export const getFoodCachedKey = ({ page, size }) => `cached_foods_page_${page}_size_${size}`

export const setCachedFoods = (key, foods) => {
  try {
    localStorage.setItem(key, foods);
  } catch (err) {
    console.log(err)
  }
}

export const getCachedFoods = key => {

}
