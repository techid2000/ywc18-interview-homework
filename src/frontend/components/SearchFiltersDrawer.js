import { LeftOutlined } from '@ant-design/icons';
import { Button, Drawer } from 'antd';
import SearchFilters from './SearchFilters';

const SearchFiltersDrawer = ({ visible, setDrawerVisible }) => {
  return (
    <Drawer
      headerStyle={{
        padding: 0,
      }}
      title={
        <div className="relative bg-dark-blue-700 h-16 flex items-center justify-center">
          <Button
            type="text"
            shape="circle"
            className="absolute left-0 md-2 px-4"
            icon={<LeftOutlined className="text-2xl text-white" />}
            onClick={() => setDrawerVisible(false)}
          />
          <span className="text-2xl text-white">กรอกผล</span>
        </div>
      }
      placement="right"
      closable={false}
      onClose={() => setDrawerVisible(false)}
      visible={visible}
      width={'100%'}
    >
      <SearchFilters />
    </Drawer>
  );
};

export default SearchFiltersDrawer;
