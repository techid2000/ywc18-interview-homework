import { useContext, useEffect, useState } from 'react';

import { getSearchResult } from '../api/search';
import SearchContext from '../contexts/SearchContext';

const useSearch = () => {
  const [shopNameTH, setShopNameTH] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [addressProvinceName, setAddressProvinceName] = useState('');
  const [priceLevel, setPriceLevel] = useState('');
  const [subcategoryName, setSubcategoryName] = useState('');

  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  const performSearch = async () => {
    setLoading(true);
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
    performSearch();
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
