import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { useSearchController } from '../hooks/useSearch';
import SearchResultMerchantCard from './SearchResultMerchantCard';

const SearchResultMerchantList = () => {
  const { loading, searchResult } = useSearchController();
  if (loading) {
    return (
      <div className="flex justify-center w-full">
        <Spin indicator={<LoadingOutlined />} size="large" />
      </div>
    );
  } else {
    return (
      <div className="w-full grid gap-2 grid-cols-1">
        {searchResult.map((merchant) => (
          <SearchResultMerchantCard
            key={merchant.shopNameTH}
            merchant={merchant}
          />
        ))}
      </div>
    );
  }
};

export default SearchResultMerchantList;
