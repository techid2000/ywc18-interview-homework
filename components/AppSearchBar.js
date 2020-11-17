import Image from 'next/image';

import SearchBar from './SearchBar';
import SearchFiltersDrawer from './SearchFiltersDrawer';

import './AppSearchBar.scss';

const AppSearchBar = () => {
  return (
    <>
      <div className="flex w-full h-16 justify-center items-center">
        <div
          className="flex w-full h-full items-center px-0 md:px-10 pl-4"
          style={{ maxWidth: '1280px' }}
        >
          <div className="flex-grow-0 flex-shrink-0 px-4 md:px-8 pl-0 md:pl-0 pt-2">
            <div className="hidden md:block">
              <Image src={'/logo.png'} width={151.27} height={40} />
            </div>
            <div className="block md:hidden">
              <Image src={'/logo-mini.png'} width={57.86} height={40} />
            </div>
          </div>
          <SearchBar />
        </div>
      </div>
      <SearchFiltersDrawer />
    </>
  );
};

export default AppSearchBar;
