import React, { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import goldStarIcon from '../../public/images/goldStarIcon.svg';
import {
  HighlightedContainer,
  HighlightedWrapper,
  HighlightedFooter
} from './styles';
import { RandomHighlighted } from '../../types/moviesmasters';

type HighlightedProps = {
  highlighted: RandomHighlighted;
};

const Highlighted: React.FC<HighlightedProps> = ({ highlighted }) => {
  return (
    <HighlightedWrapper
      bgImage={
        highlighted.backdrop ||
        `https://via.placeholder.com/1920x1080?text=${highlighted.title}`
      }
    >
      <HighlightedContainer as="article">
        <h1>{highlighted?.title}</h1>
        <p>
          {highlighted.overview.length > 250
            ? `${highlighted.overview.substring(0, 250)}...`
            : highlighted.overview}
        </p>
        <HighlightedFooter>
          <div>
            <Image src={goldStarIcon} alt="A gold star icon" />
            <span>{highlighted.rate}</span>
          </div>
          <Link href={`/movie/${highlighted.id}`}>See more</Link>
        </HighlightedFooter>
      </HighlightedContainer>
    </HighlightedWrapper>
  );
};

export default memo(Highlighted);
