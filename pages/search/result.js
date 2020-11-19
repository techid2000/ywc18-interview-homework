import dynamic from 'next/dynamic';

import { Card, Space } from 'antd';

import AppLayout from '../../src/layouts/AppLayout';
import SearchFiltersSidebar from '../../src/components/SearchFiltersSidebar';
import SearchResultMerchantList from '../../src/components/SearchResultMerchantList';

import { getAllSearch } from '../../src/api/searchAPI';
import useSearch from '../../src/hooks/useSearch';
import SearchContext from '../../src/contexts/SearchContext';
import SearchMetaContext from '../../src/contexts/SearchMetaContext';

import { getSearchResultTitle } from '../../src/utils/searchViewUtils';

const DynamicReactJson = dynamic(import('react-json-view'), { ssr: false });

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

export async function getStaticProps(context) {
  const { searchMeta } = await getAllSearch();
  return { props: { searchMeta } };
}

export default SearchResultPage;
