import { Button, Drawer } from 'antd';
import SearchFilters from './SearchFilters';

const SearchFiltersDrawer = ({ visible, setDrawerVisible }) => {
  return (
    <Drawer
      title={
        <>
          <Button onClick={() => setDrawerVisible(false)}>Close</Button>
          Basic Drawer
        </>
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
