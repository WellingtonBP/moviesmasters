import React, { useContext } from 'react';
import Image from 'next/image';

import moviesCtx from '../../store/moviesCtx';
import searchIcon from '../../public/images/search-icon.svg';
import crossIcon from '../../public/images/cross-icon.svg';
import { SearchWrapper } from './styles';

type SearchInputProps = {
  className?: string;
};

const SearchInput: React.FC<SearchInputProps> = ({ className }) => {
  const { searchQuery, setSearchQuery } = useContext(moviesCtx);
  return (
    <SearchWrapper className={className} searching={!!searchQuery}>
      <input
        type="text"
        placeholder="Search for movies, series..."
        aria-label="Search Input"
        value={searchQuery}
        onChange={evt => setSearchQuery(evt.target.value)}
      />
      <Image
        src={!!searchQuery ? crossIcon : searchIcon}
        alt={!!searchQuery ? 'cross icon' : 'search icon'}
        aria-label={!!searchQuery ? 'click to end search' : ''}
        onClick={() => {
          if (!!searchQuery) setSearchQuery('');
        }}
      />
    </SearchWrapper>
  );
};

export default SearchInput;
