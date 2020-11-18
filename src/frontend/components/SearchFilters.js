import {
  CATEGORIES,
  LOCATIONS,
  PRICERANGE,
  SUBCATEGORIES,
} from '../../constants/searchConstants';
import { useSearchController } from '../hooks/useSearch';
import useSearchMeta from '../hooks/useSearchMeta';

const { Radio, Select } = require('antd');

const SearchFilters = () => {
  const searchMeta = useSearchMeta();
  const {
    categoryName,
    setCategoryName,
    addressProvinceName,
    setAddressProvinceName,
    priceLevel,
    setPriceLevel,
    subcategoryName,
    setSubcategoryName,
  } = useSearchController();

  const selectedSubcategories = searchMeta.categories.find(
    (category) => category.name === categoryName
  )?.subcategories;

  return (
    <div className="flex flex-col">
      <span className="text-base font-semibold">ประเภทร้านค้า</span>
      <Radio.Group
        onChange={({ target: { value } }) => {
          setSubcategoryName(SUBCATEGORIES.ALL);
          setCategoryName(value);
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
          LOCATIONS.NEAR_ME,
          LOCATIONS.ALL,
          ...searchMeta.provinces,
        ].map((location) => ({
          label: location,
          value: location,
        }))}
        value={addressProvinceName}
        onChange={(value) => setAddressProvinceName(value)}
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
        value={priceLevel}
        onChange={(value) => setPriceLevel(value)}
      />
      {selectedSubcategories?.length > 0 && (
        <>
          <span className="text-base font-semibold mt-8">ประเภทร้าน...</span>
          <Radio.Group
            className="flex flex-col mt-4"
            value={subcategoryName}
            onChange={({ target: { value } }) => setSubcategoryName(value)}
          >
            {[SUBCATEGORIES.ALL, ...selectedSubcategories].map(
              (subcategory) => (
                <Radio
                  key={subcategory}
                  value={subcategory}
                  style={{ lineHeight: '30px' }}
                >
                  {subcategory}
                </Radio>
              )
            )}
          </Radio.Group>
        </>
      )}
    </div>
  );
};

export default SearchFilters;
