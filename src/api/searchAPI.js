import axios from 'axios';
import { omit } from 'lodash';

export const getAllSearch = async () => {
  try {
    const raw = await axios.get('https://panjs.com/ywc18.json');

    let searchMeta = omit(raw.data, ['merchants']);

    // [🐛] Remove some duplicated subcategories
    searchMeta = {
      ...searchMeta,
      categories: searchMeta.categories.map((category) => ({
        ...category,
        subcategories: [...new Set(category.subcategories)],
      })),
    };

    const allSearchResult = raw.data.merchants;

    return { searchMeta, allSearchResult };
  } catch (error) {
    return error;
  }
};
