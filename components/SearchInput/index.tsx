import React from 'react';
import Image from 'next/image';

import searchIcon from '../../public/images/search-icon.svg';
import { SearchWrapper } from './styles';

type SearchInputProps = {
  className?: string;
};

const SearchInput: React.FC<SearchInputProps> = ({ className }) => {
  return (
    <SearchWrapper className={className}>
      <input
        type="text"
        placeholder="Search for movies, series..."
        aria-label="Search Input"
      />
      <Image src={searchIcon} alt="searchIcon" />
    </SearchWrapper>
  );
};

export default SearchInput;
