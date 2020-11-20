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

  const appliedURLParams = useRef(false);
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
    if (appliedURLParams.current) {
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
    if (!isEmpty(router.query) && !appliedURLParams.current) {
      const urlCriteria = {};
      if (query.searchQuery) {
        urlCriteria.shopNameTH = query.searchQuery;
      }
      if (query.categoryName) {
        urlCriteria.categoryName = query.categoryName;
      }
      if (query.province) {
        urlCriteria.addressProvinceName = query.province;
      }
      if (query.priceLevel) {
        urlCriteria.priceLevel = isNaN(parseInt(query.priceLevel))
          ? query.priceLevel
          : parseInt(query.priceLevel);
      }
      if (query.subcategory) {
        urlCriteria.subcategoryName = query.subcategory;
      }
      setCriteria((c) => ({
        ...c,
        ...urlCriteria,
        updateTrigger: !c.updateTrigger,
      }));
      appliedURLParams.current = true;
    }
  }, [router.query]);

  useEffect(() => {
    setTimeout(() => {
      if (!appliedURLParams.current) {
        performSearch(false);
        appliedURLParams.current = true;
      }
    }, 2000);
  }, []);

  return {
    ...criteria,
    setCriteria,
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
