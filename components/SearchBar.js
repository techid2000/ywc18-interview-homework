import { AutoComplete, Button, Input, Select } from 'antd';
import { SearchOutlined, FilterOutlined } from '@ant-design/icons';

import './SearchBar.scss';
import { useContext } from 'react';
import SearchMetaContext from '../contexts/SearchMetaContext';

const { Option } = Input;

const mockMerchantTypes = [
  { label: 'ร้านอาหารและเครื่องดื่ม', value: 'ร้านอาหารและเครื่องดื่ม' },
  { label: 'ร้านค้า OTOP', value: 'ร้านค้า OTOP' },
  { label: 'ร้านธงฟ้า', value: 'ร้านธงฟ้า' },
  { label: 'ร้านสินค้าทั่วไป', value: 'ร้านสินค้าทั่วไป' },
];

const SearchBar = ({ setDrawerVisible }) => {
  const searchMeta = useContext(SearchMetaContext);
  return (
    <div className="flex items-center w-full">
      <div className="flex items-center border border-gray-400 shadow-sm rounded-lg w-full h-10 overflow-hidden">
        <Select
          bordered={false}
          options={searchMeta.provinces.map((province) => ({
            label: province,
            value: province,
          }))}
          className="flex-grow-0 flex-shrink-0 w-48 hidden md:block"
        />
        <div className="flex border-l h-full w-full items-center">
          <AutoComplete
            options={mockMerchantTypes}
            style={{ width: '100%', height: '100%' }}
            bordered={false}
          >
            <Input
              placeholder="ค้นหา ชื่อ ร้านอาหาร และเครื่องดื่ม ร้านธงฟ้า ร้านค้า OTOP และสินค้าทั่วไป"
              suffix={
                <div className="flex items-center h-full px-6 bg-gray-200">
                  <SearchOutlined />
                </div>
              }
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
