import React, { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import goldStarIcon from '../../../public/images/goldStarIcon.svg';
import {
  RandomHighlightedContainer,
  RandomHighlightedWrapper,
  RandomHighlightedFooter
} from './styles';
import { Highlighted } from '../../../types/homepage';

type RandomHighlightedProps = {
  highlighted: Highlighted;
};

const RandomHighlighted: React.FC<RandomHighlightedProps> = ({
  highlighted
}) => {
  return (
    <RandomHighlightedWrapper
      bgImage={
        highlighted.backdrop ||
        `https://via.placeholder.com/1920x1080?text=${highlighted.title}`
      }
    >
      <RandomHighlightedContainer as="article">
        <h1>{highlighted?.title}</h1>
        <p>
          {highlighted.overview.length > 250
            ? `${highlighted.overview.substring(0, 250)}...`
            : highlighted.overview}
        </p>
        <RandomHighlightedFooter>
          <div>
            <Image src={goldStarIcon} alt="A gold star icon" />
            <span>{highlighted.rate}</span>
          </div>
          <Link href={`/movie/${highlighted.id}`}>See more</Link>
        </RandomHighlightedFooter>
      </RandomHighlightedContainer>
    </RandomHighlightedWrapper>
  );
};

export default memo(RandomHighlighted);
