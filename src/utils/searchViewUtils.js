import { isEmpty } from 'lodash';
import { CATEGORIES, FACILITIES } from '../constants/searchConstants';

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

export const getIsOpenViewMeta = (isOpen) => {
  if (isOpen === 'Y') {
    return {
      statusText: 'เปิดอยู่',
      tagColor: '#1BC300',
      visible: true,
    };
  }
  if (isOpen === 'N') {
    return {
      statusText: 'ปิดแล้ว',
      tagColor: '#A1A1A1',
      visible: true,
    };
  }
  // N/A
  return {
    visible: false,
  };
};

export const getFacilityViewMeta = (facility) => {
  if (facility === FACILITIES.CAR_PARK) {
    return { visible: true, iconUrl: '/car-park.png' };
  }
  if (facility === FACILITIES.ALLOW_PET) {
    return { visible: true, iconUrl: '/allow-pet.png' };
  }
  if (facility === FACILITIES.ALLOW_BOOK) {
    return { visible: true, iconUrl: '/allow-book.png' };
  }
  return {
    visible: false,
  };
};

export const getRecommendedItemsViewMeta = (categoryName, recommendedItems) => {
  const viewMeta = {
    recommendText: '',
    recommendedItems: '',
  };

  if (categoryName === 'ร้านอาหาร') {
    viewMeta.recommendText = 'เมนูแนะนำ';
  } else {
    viewMeta.recommendText = 'สินค้าแนะนำ';
  }

  for (const [index, item] of recommendedItems.entries()) {
    if (index === 0) {
      viewMeta.recommendedItems += item;
    } else {
      viewMeta.recommendedItems += `, ${item}`;
    }
  }

  return viewMeta;
};
