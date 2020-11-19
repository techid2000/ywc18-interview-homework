import dynamic from 'next/dynamic';

import { Card, Space } from 'antd';

import AppLayout from '../../src/frontend/layouts/AppLayout';
import SearchFiltersSidebar from '../../src/frontend/components/SearchFiltersSidebar';
import SearchResultMerchantList from '../../src/frontend/components/SearchResultMerchantList';

import useSearch from '../../src/frontend/hooks/useSearch';
import { getSearchMeta } from '../../src/frontend/api/searchAPI';
import SearchContext from '../../src/frontend/contexts/SearchContext';
import SearchMetaContext from '../../src/frontend/contexts/SearchMetaContext';
import { CATEGORIES } from '../../src/constants/searchConstants';
import { isEmpty } from 'lodash';

const DynamicReactJson = dynamic(import('react-json-view'), { ssr: false });

const getSearchResultTitle = (categoryName, searchQuery) => {
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

const SearchResultPage = ({ searchMeta }) => {
  const searchController = useSearch();
  const { categoryName, searchQuery, searchResult } = searchController;

  return (
    <SearchMetaContext.Provider value={searchMeta}>
      <SearchContext.Provider value={searchController}>
        <AppLayout>
          <div className="text-xl font-semibold">
            {getSearchResultTitle(categoryName, searchQuery)}
          </div>
          <div className="flex mt-12 items-start">
            <SearchFiltersSidebar />
            <SearchResultMerchantList />
          </div>
          {process.env.NODE_ENV === 'development' && (
            <Space direction="vertical" className="mt-2 flex flex-col w-full">
              <Card title="searchMeta">
                <DynamicReactJson src={searchMeta} />
              </Card>
              <Card title="searchResults">
                <DynamicReactJson src={searchResult} />
              </Card>
            </Space>
          )}
        </AppLayout>
      </SearchContext.Provider>
    </SearchMetaContext.Provider>
  );
};

export async function getServerSideProps() {
  const searchMeta = await getSearchMeta();
  return { props: { searchMeta } };
}

export default SearchResultPage;
