import { useContext } from 'react';
import SearchMetaContext from '../contexts/SearchMetaContext';

const useSearchMeta = () => {
  const searchMeta = useContext(SearchMetaContext);
  return searchMeta;
};

export default useSearchMeta;
