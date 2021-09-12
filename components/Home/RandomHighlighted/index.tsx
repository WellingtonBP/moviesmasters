import React, { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import layouttestimg from '../../../public/images/layouttest.jpg';
import goldStarIcon from '../../../public/images/goldStarIcon.svg';
import {
  RandomHighlightedContainer,
  RandomHighlightedWrapper,
  RandomHighlightedFooter
} from './styles';

const RandomHighlighted: React.FC = () => {
  return (
    <RandomHighlightedWrapper bgImage={layouttestimg}>
      <RandomHighlightedContainer as="article">
        <h1>Forrest Gump</h1>
        <p>
          A man with a low IQ has accomplished great things in his life and been
          present during significant historic events—in each case, far exceeding
          what anyone imagined he could do. But despite all he has achieved, his
          one true love eludes him.
        </p>
        <RandomHighlightedFooter>
          <div>
            <Image src={goldStarIcon} alt="A gold star icon" />
            <span>8.5</span>
          </div>
          <Link href="#">See more</Link>
        </RandomHighlightedFooter>
      </RandomHighlightedContainer>
    </RandomHighlightedWrapper>
  );
};

export default memo(RandomHighlighted);
