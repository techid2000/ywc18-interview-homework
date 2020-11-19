import { isEmpty } from 'lodash';
import { useRouter } from 'next/router';

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
  const router = useRouter();
  const { query } = router;

  const [shopNameTH, setShopNameTH] = useState(query.searchQuery ?? '');
  const [categoryName, setCategoryName] = useState(
    query.category ?? CATEGORIES.ALL
  );
  const [addressProvinceName, setAddressProvinceName] = useState(
    query.province ?? LOCATIONS.ALL
  );
  const [priceLevel, setPriceLevel] = useState(
    query.priceLevel ?? PRICERANGE.ALL
  );
  const [subcategoryName, setSubcategoryName] = useState(
    query.subcategory ?? SUBCATEGORIES.ALL
  );

  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  const performSearch = async (resetCriteria = true) => {
    setLoading(true);

    if (resetCriteria) {
      setCategoryName(CATEGORIES.ALL);
      setPriceLevel(PRICERANGE.ALL);
      setSubcategoryName(SUBCATEGORIES.ALL);
    }

    let url = '/search/result';
    url += `?searchQuery=${encodeURIComponent(
      shopNameTH
    )}&category=${encodeURIComponent(
      categoryName
    )}&province=${encodeURIComponent(
      addressProvinceName
    )}&priceLevel=${encodeURIComponent(
      priceLevel
    )}&subcategory=${encodeURIComponent(subcategoryName)}`;

    router.replace(url);

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
    searchQuery: query.searchQuery,
  };
};

export const useSearchController = () => {
  return useContext(SearchContext);
};

export default useSearch;
