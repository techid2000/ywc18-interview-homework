import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';

import SearchContext from '../contexts/SearchContext';

import { getFilteredSearchResult } from '../utils/searchUtils';
import { getSearchReplaceURL } from '../utils/routerUtils';

import {
  CATEGORIES,
  LOCATIONS,
  PRICERANGE,
  SUBCATEGORIES,
} from '../constants/searchConstants';
import { getAllSearch } from '../api/searchAPI';

const useSearch = (allSearchResult) => {
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
    const criteria = {
      shopNameTH,
      categoryName,
      addressProvinceName,
      priceLevel,
      subcategoryName,
    };

    setLoading(true);

    if (resetCriteria) {
      setCategoryName(CATEGORIES.ALL);
      setPriceLevel(PRICERANGE.ALL);
      setSubcategoryName(SUBCATEGORIES.ALL);
    }

    router.replace(getSearchReplaceURL(criteria));

    setSearchResult(
      getFilteredSearchResult((await getAllSearch()).allSearchResult, criteria)
    );

    // await new Promise((resolve) => setTimeout(() => resolve(), 1000));

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
