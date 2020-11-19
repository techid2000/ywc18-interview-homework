import { isEmpty } from 'lodash';
import { CATEGORIES } from '../constants/searchConstants';

export const getSearchResultTitle = (categoryName, searchQuery) => {
  if (categoryName === CATEGORIES.ALL && isEmpty(searchQuery)) {
    return 'ผลการค้นหาทั้งหมด';
  }
  if (categoryName === CATEGORIES.ALL) {
    return `ผลการค้นหา ${searchQuery} ทั้งหมด`;
  }
  if (isEmpty(searchQuery)) {
    return `ผลการค้นหา ${categoryName} ทั้งหมด`;
  }
  return `ผลการค้นหา ${categoryName}, ${searchQuery} ทั้งหมด`;
};
