import dynamic from 'next/dynamic';
import axios from 'axios';

import AppLayout from '../../layouts/AppLayout';
import SearchFiltersSidebar from '../../components/SearchFiltersSidebar';
import SearchResultMerchantList from '../../components/SearchResultMerchantList';

import SearchMetaContext from '../../contexts/SearchMetaContext';

const DynamicReactJson = dynamic(import('react-json-view'), { ssr: false });

const SearchResultPage = ({ searchMeta }) => {
  return (
    <SearchMetaContext.Provider value={searchMeta}>
      <AppLayout>
        <div className="text-xl font-semibold">
          ผลการค้นหา ร้านค้า OTOP ทั้งหมด
        </div>
        <div className="flex mt-12 items-start">
          <SearchFiltersSidebar />
          <SearchResultMerchantList />
        </div>
        {process.env.NODE_ENV === 'development' && (
          <DynamicReactJson src={searchMeta} />
        )}
      </AppLayout>
    </SearchMetaContext.Provider>
  );
};

export async function getServerSideProps() {
  const res = await axios.get('/api/search/meta');
  return { props: { searchMeta: res.data } };
}

export default SearchResultPage;
