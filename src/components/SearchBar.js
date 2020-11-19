import { AutoComplete, Button, Input, Select } from 'antd';
import { SearchOutlined, FilterOutlined } from '@ant-design/icons';

import './SearchBar.scss';

import useSearchMeta from '../hooks/useSearchMeta';
import { useSearchController } from '../hooks/useSearch';

import { LOCATIONS } from '../constants/searchConstants';
import { MdLocationOn } from 'react-icons/md';

const SearchBar = ({ setDrawerVisible }) => {
  const searchMeta = useSearchMeta();

  const {
    shopNameTH,
    setShopNameTH,
    setCategoryName,
    addressProvinceName,
    setAddressProvinceName,
    performSearch,
  } = useSearchController();

  return (
    <div className="flex items-center w-full">
      <div className="flex items-center border border-gray-400 shadow-sm rounded-lg w-full h-10 overflow-hidden">
        <Select
          bordered={false}
          options={[
            {
              label: (
                <span className="flex items-center">
                  <MdLocationOn className="w-6 h-6 mr-2" />
                  {LOCATIONS.NEAR_ME}
                </span>
              ),
              value: LOCATIONS.NEAR_ME,
            },
            ...searchMeta.provinces.map((location) => ({
              label: location,
              value: location,
            })),
          ]}
          value={addressProvinceName}
          onChange={(value) => setAddressProvinceName(value)}
          className="flex-grow-0 flex-shrink-0 w-48 hidden md:block"
        />
        <div className="fix flex border-l h-full w-full items-center">
          <AutoComplete
            options={searchMeta.categories.map((category) => ({
              label: category.name,
              value: category.name,
            }))}
            style={{ width: '100%', height: '100%' }}
            value={shopNameTH}
            onSelect={(value) => {
              setCategoryName(value);
              setShopNameTH('');
            }}
            onChange={(value) => {
              setShopNameTH(value);
            }}
            bordered={false}
          >
            <Input
              placeholder="ค้นหา ชื่อ ร้านอาหาร และเครื่องดื่ม ร้านธงฟ้า ร้านค้า OTOP และสินค้าทั่วไป"
              suffix={
                <div
                  className="flex items-center h-full px-6 bg-gray-200"
                  onClick={performSearch}
                >
                  <SearchOutlined />
                </div>
              }
              onPressEnter={performSearch}
              style={{
                height: '2.5rem',
                paddingTop: 0,
                paddingBottom: 0,
                paddingRight: 0,
              }}
              bordered={false}
            />
          </AutoComplete>
        </div>
      </div>
      <Button
        type="text"
        shape="circle"
        className="w-auto px-4 md:hidden"
        icon={<FilterOutlined className="text-2xl" />}
        onClick={() => setDrawerVisible(true)}
      />
    </div>
  );
};

export default SearchBar;
