import SearchFiltersSidebar from '../../components/SearchFiltersSidebar';
import SearchResultMerchantList from '../../components/SearchResultMerchantList';
import AppLayout from '../../layouts/AppLayout';

const SearchResultPage = () => {
  return (
    <AppLayout>
      <SearchFiltersSidebar />
      <SearchResultMerchantList />
    </AppLayout>
  );
};

export default SearchResultPage;
