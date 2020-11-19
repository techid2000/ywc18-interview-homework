import SearchFilters from './SearchFilters';

const SearchFiltersSidebar = () => {
  return (
    <div
      style={{ width: '22rem' }}
      className="border mr-8 p-4 hidden md:block flex-shrink-0 shadow-sm bg-white"
    >
      <SearchFilters />
    </div>
  );
};

export default SearchFiltersSidebar;
