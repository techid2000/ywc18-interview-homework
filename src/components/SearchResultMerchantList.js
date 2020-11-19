import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { isEmpty } from 'lodash';
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
    if (isEmpty(searchResult)) {
      return (
        <div className="flex flex-col items-center w-full mt-16 text-center">
          <div className="text-2xl md:text-4xl font-extrabold">
            ไม่พบสถานที่ที่คุณกำลังหา
          </div>
          <div className="text-base mt-2">
            ร้านค้าที่ท่านค้นหาอาจไม่ได้เข้าร่วมโครงการ คนละครึ่ง
          </div>
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
  }
};

export default SearchResultMerchantList;
