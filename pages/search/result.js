import SearchFiltersSidebar from '../../components/SearchFiltersSidebar';
import SearchResultMerchantList from '../../components/SearchResultMerchantList';
import AppLayout from '../../layouts/AppLayout';

const SearchResultPage = () => {
  return (
    <AppLayout>
      <div className="text-xl font-semibold">
        ผลการค้นหา ร้านค้า OTOP ทั้งหมด
      </div>
      <div className="flex mt-12 items-start">
        <SearchFiltersSidebar />
        <SearchResultMerchantList />
      </div>
    </AppLayout>
  );
};

export default SearchResultPage;
