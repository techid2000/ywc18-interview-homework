import { useContext, useEffect, useState } from 'react';
import {
  CATEGORIES,
  LOCATIONS,
  PRICERANGE,
  SUBCATEGORIES,
} from '../../constants/searchConstants';

import { getSearchResult } from '../api/searchAPI';
import SearchContext from '../contexts/SearchContext';

const useSearch = () => {
  const [shopNameTH, setShopNameTH] = useState('');
  const [categoryName, setCategoryName] = useState(CATEGORIES.ALL);
  const [addressProvinceName, setAddressProvinceName] = useState(LOCATIONS.ALL);
  const [priceLevel, setPriceLevel] = useState(PRICERANGE.ALL);
  const [subcategoryName, setSubcategoryName] = useState(SUBCATEGORIES.ALL);

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

  useEffect(() => {
    performSearch(false);
  }, []);

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
