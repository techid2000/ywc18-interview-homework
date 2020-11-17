const { Radio, Select, Input } = require('antd');

const SearchFilters = () => {
  return (
    <div className="flex flex-col">
      <span className="text-base font-semibold">ประเภทร้านค้า</span>
      <Radio.Group onChange={() => {}} className="flex flex-col mt-4">
        <Radio value={1} style={{ lineHeight: '30px' }}>
          ทั้งหมด
        </Radio>
        <Radio value={2} style={{ lineHeight: '30px' }}>
          ทั้งหมด
        </Radio>
        <Radio value={1} style={{ lineHeight: '30px' }}>
          ทั้งหมด
        </Radio>
        <Radio value={2} style={{ lineHeight: '30px' }}>
          ทั้งหมด
        </Radio>
        <Radio value={1} style={{ lineHeight: '30px' }}>
          ทั้งหมด
        </Radio>
        <Radio value={2} style={{ lineHeight: '30px' }}>
          ทั้งหมด
        </Radio>
      </Radio.Group>
      <span className="text-base font-semibold mt-8">จังหวัด/ใกล้ฉัน</span>
      <Select className="mt-2" />
      <span className="text-base font-semibold mt-8">ช่วงราคาสินค้า (บาท)</span>
      <Select className="mt-2" />
      <span className="text-base font-semibold mt-8">ประเภทร้าน...</span>
      <Radio.Group onChange={() => {}} className="flex flex-col mt-4">
        <Radio value={1} style={{ lineHeight: '30px' }}>
          ทั้งหมด
        </Radio>
        <Radio value={2} style={{ lineHeight: '30px' }}>
          ทั้งหมด
        </Radio>
        <Radio value={1} style={{ lineHeight: '30px' }}>
          ทั้งหมด
        </Radio>
        <Radio value={2} style={{ lineHeight: '30px' }}>
          ทั้งหมด
        </Radio>
        <Radio value={1} style={{ lineHeight: '30px' }}>
          ทั้งหมด
        </Radio>
        <Radio value={2} style={{ lineHeight: '30px' }}>
          ทั้งหมด
        </Radio>
      </Radio.Group>
    </div>
  );
};

export default SearchFilters;
