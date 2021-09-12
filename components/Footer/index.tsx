import React from 'react';
import Image from 'next/image';

import { FooterWrapper } from './styles';
import githubIcon from '../../public/images/github-icon.svg';

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      Created by
      <a
        href="https://github.com/WellingtonBP"
        target="_blank"
        rel="noreferrer"
      >
        Wellington
      </a>
      <Image src={githubIcon} alt="github icon" />
    </FooterWrapper>
  );
};

export default Footer;
