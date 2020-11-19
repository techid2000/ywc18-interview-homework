import { useState } from 'react';

import SearchBar from './SearchBar';
import SearchFiltersDrawer from './SearchFiltersDrawer';

const AppSearchBar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div className="flex w-full h-16 justify-center items-center bg-white">
        <div
          className="flex w-full h-full items-center px-0 md:px-10 pl-4"
          style={{ maxWidth: '1280px' }}
        >
          <div className="flex-grow-0 flex-shrink-0 px-4 md:px-8 pl-0 md:pl-0 pt-2">
            <div className="hidden md:block">
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/logo.png`}
                width={151.27}
                height={40}
              />
            </div>
            <div className="block md:hidden">
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/logo-mini.png`}
                width={57.86}
                height={40}
              />
            </div>
          </div>
          <SearchBar setDrawerVisible={setVisible} />
        </div>
      </div>
      <SearchFiltersDrawer visible={visible} setDrawerVisible={setVisible} />
    </>
  );
};

export default AppSearchBar;
