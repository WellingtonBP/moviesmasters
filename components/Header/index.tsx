import React, { useEffect, useState, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import moviesCtx from '../../store/moviesCtx';
import popCornIcon from '../../public/images/popcorn-icon.svg';
import SearchInput from '../SearchInput';
import { HeaderContainer, HeaderWrapper, Logo, Nav } from './styles';

const Header: React.FC = () => {
  const { searchQuery } = useContext(moviesCtx);
  const [pageScroll, setPageScroll] = useState(false);
  const { pathname } = useRouter();

  useEffect(() => {
    const onScroll = () => {
      setPageScroll(window.scrollY > 25);
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <HeaderWrapper pageScroll={pageScroll || !!searchQuery}>
      <HeaderContainer>
        <Logo>
          <Image src={popCornIcon} alt="pop corn bucket icon" />
          <Link href="/" aria-label="click to go to home page">
            Movies Masters
          </Link>
        </Logo>
        {pathname === '/' && <SearchInput className="search" />}
        <Nav>
          <Link href="/login">Login</Link>
          <Link href="/sign">Sign</Link>
        </Nav>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
