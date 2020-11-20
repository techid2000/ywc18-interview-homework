import {
  CATEGORIES,
  LOCATIONS,
  PRICERANGE,
  SUBCATEGORIES,
} from '../constants/searchConstants';
import { useSearchController } from '../hooks/useSearch';
import useSearchMeta from '../hooks/useSearchMeta';

import { MdLocationOn } from 'react-icons/md';

const { Radio, Select } = require('antd');

const SearchFilters = () => {
  const searchMeta = useSearchMeta();
  const {
    categoryName,
    addressProvinceName,
    priceLevel,
    subcategoryName,
    setCriteria,
  } = useSearchController();

  return (
    <div className="flex flex-col">
      <span className="text-base font-semibold">ประเภทร้านค้า</span>
      <Radio.Group
        onChange={({ target: { value } }) => {
          setCriteria((c) => ({
            ...c,
            subcategoryName: SUBCATEGORIES.ALL,
            categoryName: value,
          }));
        }}
        value={categoryName}
        className="flex flex-col mt-4"
      >
        <Radio value={CATEGORIES.ALL} style={{ lineHeight: '30px' }}>
          {CATEGORIES.ALL}
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
        onChange={(value) =>
          setCriteria((c) => ({ ...c, addressProvinceName: value }))
        }
      />

      <span className="text-base font-semibold mt-8">ช่วงราคาสินค้า (บาท)</span>
      <Select
        className="mt-2"
        options={[
          { label: PRICERANGE.ALL, value: PRICERANGE.ALL },
          ...searchMeta.priceRange.map((range, index) => ({
            label: range,
            value: index + 1,
          })),
        ]}
        value={
          isNaN(parseInt(priceLevel))
            ? priceLevel
            : searchMeta.priceRange[parseInt(priceLevel) - 1]
        }
        onChange={(value) => setCriteria((c) => ({ ...c, priceLevel: value }))}
      />
      {categoryName !== CATEGORIES.ALL && (
        <>
          <span className="text-base font-semibold mt-8">
            ประเภท{categoryName}
          </span>
          <Radio.Group
            className="flex flex-col mt-4"
            value={subcategoryName}
            onChange={({ target: { value } }) =>
              setCriteria((c) => ({ ...c, subcategoryName: value }))
            }
          >
            {[
              SUBCATEGORIES.ALL,
              ...searchMeta.categories.find(
                (category) => category.name === categoryName
              )?.subcategories,
            ].map((subcategory) => (
              <Radio
                key={subcategory}
                value={subcategory}
                style={{ lineHeight: '30px' }}
              >
                {subcategory}
              </Radio>
            ))}
          </Radio.Group>
        </>
      )}
    </div>
  );
};

export default SearchFilters;
