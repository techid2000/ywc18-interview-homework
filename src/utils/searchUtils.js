import { isEmpty, isEqual } from 'lodash';
import {
  CATEGORIES,
  LOCATIONS,
  PRICERANGE,
  SUBCATEGORIES,
  WORD,
} from '../constants/searchConstants';

// #region filterByShopNameTH
export const filterByShopNameTH = (merchants, shopNameTH) => {
  if (isEmpty(shopNameTH)) {
    return merchants;
  }

  return (merchants = merchants.filter((merchant) =>
    merchant.shopNameTH.toLowerCase().includes(shopNameTH.toLowerCase())
  ));
};
// #endregion

// #region filterByCategoryName
const suspectFoodAndBeverage = (merchant) => {
  return (
    merchant.categoryName.includes(WORD.FOOD) ||
    merchant.categoryName.includes(WORD.BEVERAGE) ||
    merchant.subcategoryName.includes(WORD.FOOD) ||
    merchant.subcategoryName.includes(WORD.BEVERAGE)
  );
};

const suspectOTOP = (merchant) => {
  return (
    merchant.categoryName.includes(WORD.OTOP) ||
    merchant.subcategoryName.includes(WORD.OTOP)
  );
};

const suspectThongFah = (merchant) => {
  return (
    merchant.categoryName.includes(WORD.THONGFAH) ||
    merchant.subcategoryName.includes(WORD.THONGFAH)
  );
};

export const filterByCategoryName = (merchants, categoryName) => {
  if (isEmpty(categoryName)) {
    return merchants;
  }

  if (categoryName === CATEGORIES.ALL) {
    return merchants;
  }

  if (categoryName === CATEGORIES.FOOD_AND_BEVERAGE) {
    return merchants.filter((merchant) => suspectFoodAndBeverage(merchant));
  }

  if (categoryName === CATEGORIES.OTOP) {
    return merchants.filter((merchant) => suspectOTOP(merchant));
  }

  if (categoryName === CATEGORIES.THONGFAH) {
    return merchants.filter((merchant) => suspectThongFah(merchant));
  }

  if (categoryName === CATEGORIES.GENERAL) {
    return merchants.filter((merchant) => !suspectFoodAndBeverage(merchant));
  }

  return merchants;
};
// #endregion

// #region filterByAddressProvinceName
export const filterByAddressProvinceName = (merchants, addressProvinceName) => {
  if (isEmpty(addressProvinceName)) {
    return merchants;
  }

  // [🚧] Need GPS API
  if (addressProvinceName === LOCATIONS.NEAR_ME) {
    return merchants;
  }

  if (addressProvinceName === LOCATIONS.ALL) {
    return merchants;
  }

  return (merchants = merchants.filter((merchant) =>
    isEqual(merchant.addressProvinceName, addressProvinceName)
  ));
};
// #endregion

// #region filterByPriceLevel
export const filterByPriceLevel = (merchants, priceLevel) => {
  if (isEqual(priceLevel, PRICERANGE.ALL)) {
    return merchants;
  }

  return (merchants = merchants.filter((merchant) =>
    isEqual(merchant.priceLevel, priceLevel)
  ));
};
// #endregion

// #region filterBySubcategoryName
export const filterBySubcategoryName = (merchants, subcategoryName) => {
  if (isEmpty(subcategoryName)) {
    return merchants;
  }

  if (isEqual(subcategoryName, SUBCATEGORIES.ALL)) {
    return merchants;
  }

  return (merchants = merchants.filter((merchant) =>
    isEqual(merchant.subcategoryName, subcategoryName)
  ));
};
// #endregion
