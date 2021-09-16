import React from 'react';

import { TvSeasonsWrapper, Season, SeasonDetails } from './styles';
import { TvDetails } from '../../types/tmdb';

type TvSeasonsProps = Pick<TvDetails, 'seasons'>;

const TvSeasons: React.FC<TvSeasonsProps> = ({ seasons }) => {
  return (
    <TvSeasonsWrapper>
      {seasons.map(season => (
        <Season key={season.id}>
          <img
            src={`https://image.tmdb.org/t/p/w300${season.poster_path}`}
            alt={`${season.name} poster`}
          />
          <SeasonDetails>
            <h3>
              #{season.name}{' '}
              <span>{new Date(season.air_date).getFullYear}</span>
            </h3>
            <p>{season.episode_count} episodes</p>
            <p>{season.overview}</p>
          </SeasonDetails>
        </Season>
      ))}
    </TvSeasonsWrapper>
  );
};

export default TvSeasons;
