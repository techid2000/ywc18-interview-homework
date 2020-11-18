import { useContext, useEffect, useState } from 'react';
import {
  CATEGORIES,
  PRICERANGE,
  SUBCATEGORIES,
} from '../../constants/searchConstants';

import { getSearchResult } from '../api/searchAPI';
import SearchContext from '../contexts/SearchContext';

const useSearch = () => {
  const [shopNameTH, setShopNameTH] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [addressProvinceName, setAddressProvinceName] = useState('');
  const [priceLevel, setPriceLevel] = useState('');
  const [subcategoryName, setSubcategoryName] = useState('');

  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  const performSearch = async (resetCriteria = true) => {
    setLoading(true);

    if (resetCriteria) {
      setCategoryName(CATEGORIES.ALL);
      setPriceLevel(PRICERANGE.ALL);
      setSubcategoryName(SUBCATEGORIES.ALL);
    }

    setSearchResult(
      await getSearchResult({
        shopNameTH,
        categoryName,
        addressProvinceName,
        priceLevel,
        subcategoryName,
      })
    );
    setLoading(false);
  };

  useEffect(() => {
    performSearch(false);
  }, [categoryName, addressProvinceName, priceLevel, subcategoryName]);

  return {
    shopNameTH,
    setShopNameTH,
    categoryName,
    setCategoryName,
    addressProvinceName,
    setAddressProvinceName,
    priceLevel,
    setPriceLevel,
    subcategoryName,
    setSubcategoryName,
    performSearch,
    searchResult,
    loading,
  };
};

export const useSearchController = () => {
  return useContext(SearchContext);
};

export default useSearch;
