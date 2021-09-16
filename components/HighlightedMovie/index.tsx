import React, { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import goldStarIcon from '../../public/images/goldStarIcon.svg';
import Container from '../Container';
import {
  Title,
  Overview,
  GenresAndTagline,
  Production,
  HighlightedWrapper,
  Info,
  Button,
  Rate,
  InfoSpan,
  Actions
} from './styles';
import {
  RandomHighlighted,
  HighlightedDetails
} from '../../types/moviesmasters';

type HighlightedProps = {
  from?: string;
  media_type?: string;
  highlighted: RandomHighlighted & Partial<HighlightedDetails>;
};

const Highlighted: React.FC<HighlightedProps> = ({
  highlighted,
  media_type = 'movie',
  from = 'home'
}) => {
  const getOverview = (): string => {
    return highlighted.overview.length > 250 && from === 'home'
      ? `${highlighted.overview.substring(0, 250)}...`
      : highlighted.overview;
  };

  const getInfo = (): JSX.Element => {
    if (from === 'home') {
      return (
        <Button>
          <Link href={`/movie/${highlighted.id}`}>See more</Link>
        </Button>
      );
    }
    return (
      <>
        <InfoSpan>Popularity: {highlighted.popularity}</InfoSpan>
        <InfoSpan>Vote Count: {highlighted.vote_count}</InfoSpan>
        {media_type === 'movie' && (
          <>
            <InfoSpan>Budget: {highlighted.budget}</InfoSpan>
            <InfoSpan>Revenue: {highlighted.revenue}</InfoSpan>
          </>
        )}
      </>
    );
  };

  const getReleaseDate = () => {
    return (
      media_type === 'movie'
        ? new Date(highlighted.release_date!)
        : new Date(highlighted.first_air_date!)
    ).getFullYear();
  };

  return (
    <HighlightedWrapper
      bgImage={
        highlighted.backdrop ||
        `https://via.placeholder.com/1920x1080?text=${highlighted.title}`
      }
    >
      <Container>
        <Title>{highlighted?.title}</Title>
        {from === 'details' && (
          <GenresAndTagline>
            {highlighted.genres!.map(genre => genre.name).join(', ')}
          </GenresAndTagline>
        )}
        <Overview>{getOverview()}</Overview>
        <Info>
          <Rate>
            <Image src={goldStarIcon} alt="A gold star icon" />
            <span>{highlighted.rate}</span>
          </Rate>
          {getInfo()}
        </Info>
        {from === 'details' && (
          <>
            <Actions>
              <Button>Watched</Button>
              <Button>Watch List</Button>
              <Button>Rate</Button>
            </Actions>
            <Production>
              {getReleaseDate()}
              <span>
                {highlighted.production_companies
                  ?.map(pc => pc.name)
                  .join(', ')}
              </span>
            </Production>
            <GenresAndTagline>{highlighted.tagline}</GenresAndTagline>
          </>
        )}
      </Container>
    </HighlightedWrapper>
  );
};

export default memo(Highlighted);
