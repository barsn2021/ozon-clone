export const searchFilter = (goods, value) => {
  return goods.filter((goodsItem) => {
    return goodsItem.title.toLowerCase().includes(value)
  })
}

export const categoryFilter = (goods, value) => {
  return goods.filter((goodsItem) => {
    return goodsItem.category.includes(value);
  })
}

export const sideFilter = (goods, optionsObj) => {
  return goods.filter((goodsItem) => {
    if (optionsObj.sale === true && goodsItem.sale === false) { return false };
    if (
      goodsItem.price >= optionsObj.priceFrom &&
      goodsItem.price <= optionsObj.priceTo
    ) {
      return true;
    }
  })
}