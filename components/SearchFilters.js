import { useContext } from 'react';

import SearchMetaContext from '../contexts/SearchMetaContext';

const { Radio, Select } = require('antd');

const SearchFilters = () => {
  const searchMeta = useContext(SearchMetaContext);

  return (
    <div className="flex flex-col">
      <span className="text-base font-semibold">ประเภทร้านค้า</span>
      <Radio.Group onChange={() => {}} className="flex flex-col mt-4">
        <Radio value={'ทั้งหมด'} style={{ lineHeight: '30px' }}>
          ทั้งหมด
        </Radio>
        {searchMeta.categories.map((category) => (
          <Radio
            key={category.name}
            value={category.name}
            style={{ lineHeight: '30px' }}
          >
            {category.name}
          </Radio>
        ))}
      </Radio.Group>

      <span className="text-base font-semibold mt-8">จังหวัด/ใกล้ฉัน</span>
      <Select
        className="mt-2"
        options={searchMeta.provinces.map((province) => ({
          label: province,
          value: province,
        }))}
      />

      <span className="text-base font-semibold mt-8">ช่วงราคาสินค้า (บาท)</span>
      <Select
        className="mt-2"
        options={searchMeta.priceRange.map((range, index) => ({
          label: range,
          value: index + 1,
        }))}
      />

      <span className="text-base font-semibold mt-8">ประเภทร้าน...</span>
      <Radio.Group onChange={() => {}} className="flex flex-col mt-4">
        {searchMeta.categories
          .find((category) => category.name === 'ร้านอาหารและเครื่องดื่ม')
          .subcategories.map((subcategory) => (
            <Radio
              key={subcategory}
              value={subcategory}
              style={{ lineHeight: '30px' }}
            >
              {subcategory}
            </Radio>
          ))}
      </Radio.Group>
    </div>
  );
};

export default SearchFilters;
