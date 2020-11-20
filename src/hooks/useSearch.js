import { useRouter } from 'next/router';
import { useContext, useEffect, useRef, useState } from 'react';

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
import { isEmpty } from 'lodash';

const useSearch = () => {
  const router = useRouter();
  const { query } = router;

  const [criteria, setCriteria] = useState({
    shopNameTH: '',
    categoryName: CATEGORIES.ALL,
    addressProvinceName: LOCATIONS.NEAR_ME,
    priceLevel: PRICERANGE.ALL,
    subcategoryName: SUBCATEGORIES.ALL,
    updateTrigger: false,
  });

  const applyURLParams = useRef(false);
  const [loading, setLoading] = useState(true);
  const [searchResult, setSearchResult] = useState([]);

  const performSearch = async (resetCriteria = true) => {
    setLoading(true);

    if (resetCriteria) {
      setCriteria({
        ...criteria,
        categoryName: CATEGORIES.ALL,
        priceLevel: PRICERANGE.ALL,
        subcategoryName: SUBCATEGORIES.ALL,
      });
    }

    router.replace(getSearchReplaceURL(criteria));

    setSearchResult(
      getFilteredSearchResult((await getAllSearch()).allSearchResult, criteria)
    );

    setLoading(false);
  };

  useEffect(() => {
    if (applyURLParams.current) {
      performSearch(false);
    }
  }, [
    criteria.categoryName,
    criteria.addressProvinceName,
    criteria.priceLevel,
    criteria.subcategoryName,

    criteria.updateTrigger,
  ]);

  useEffect(() => {
    if (!isEmpty(router.query) && !applyURLParams.current) {
      setCriteria((c) => ({
        shopNameTH: query.searchQuery,
        categoryName: query.category,
        addressProvinceName: query.province,
        priceLevel: isNaN(parseInt(query.priceLevel))
          ? query.priceLevel
          : parseInt(query.priceLevel),
        subcategoryName: query.subcategory,
        updateTrigger: !c.updateTrigger,
      }));
      applyURLParams.current = true;
    }
  }, [router.query]);

  useEffect(() => {
    setTimeout(() => {
      if (!applyURLParams.current) {
        performSearch(false);
        applyURLParams.current = true;
      }
    }, 1000);
  }, []);

  const setShopNameTH = (shopNameTH) =>
    setCriteria({ ...criteria, shopNameTH });

  const setCategoryName = (categoryName) =>
    setCriteria({ ...criteria, categoryName });

  const setAddressProvinceName = (addressProvinceName) =>
    setCriteria({ ...criteria, addressProvinceName });

  const setPriceLevel = (priceLevel) =>
    setCriteria({ ...criteria, priceLevel });

  const setSubcategoryName = (subcategoryName) =>
    setCriteria({ ...criteria, subcategoryName });

  return {
    shopNameTH: criteria.shopNameTH,
    setShopNameTH,
    categoryName: criteria.categoryName,
    setCategoryName,
    addressProvinceName: criteria.addressProvinceName,
    setAddressProvinceName,
    priceLevel: criteria.priceLevel,
    setPriceLevel,
    subcategoryName: criteria.subcategoryName,
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
