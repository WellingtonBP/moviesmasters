import type { NextPage, GetServerSideProps } from 'next';
import Head from 'next/head';

import HighlightedMovie from '../../components/HighlightedMovie';
import MoviesGrid from '../../components/MoviesGrid';
import TvSeasons from '../../components/TvSeasons';
import Main from '../../components/Main';
import { MovieDetails, TvDetails } from '../../types/tmdb';
import { DetailsPageProps } from '../../types/moviesmasters';

const Details: NextPage<DetailsPageProps> = ({ item, media_type }) => {
  return (
    <>
      <Head>
        <title>Movies Masters - {item.title}</title>
        <meta name="description" content={`Details about ${item.title}`} />
      </Head>
      <HighlightedMovie
        from="details"
        highlighted={item}
        media_type={media_type}
      />
      <Main>
        {media_type === 'movie' ? (
          <>
            <h2 className="info">Similar</h2>
            <MoviesGrid movies={item.similar!} />
          </>
        ) : (
          <>
            <h2 className="info">Seasons</h2>
            <TvSeasons seasons={item.seasons!} />
          </>
        )}
      </Main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<DetailsPageProps | {}> =
  async ({ params }) => {
    const { media_type, id } = params as unknown as {
      media_type: string;
      id: number;
    };

    if (media_type === 'movie' || media_type === 'tv') {
      let url = `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;

      const response = await fetch(
        `${url}&${media_type === 'movie' ? 'append_to_response=similar' : ''}`
      );

      if (response.ok) {
        const result = (await response.json()) as MovieDetails | TvDetails;
        const base = {
          title: (result as MovieDetails).title || (result as TvDetails).name,
          backdrop: result.backdrop_path,
          id: result.id,
          overview: result.overview,
          rate: result.vote_average,
          genres: result.genres,
          popularity: result.popularity,
          vote_count: result.vote_count,
          production_companies: result.production_companies,
          tagline: result.tagline
        };

        return {
          props: {
            media_type,
            item: {
              ...base,
              ...{
                movie: () => {
                  const { budget, revenue, release_date, similar } =
                    result as MovieDetails;
                  return {
                    budget,
                    revenue,
                    release_date,
                    similar: similar.results.map(similarResult => ({
                      title: similarResult.title,
                      poster: similarResult.poster_path,
                      id: similarResult.id,
                      media_type
                    }))
                  };
                },
                tv: () => {
                  const { seasons, first_air_date } = result as TvDetails;
                  return { seasons, first_air_date };
                }
              }[media_type]()
            }
          }
        };
      }
    }

    return {
      redirect: {
        destination: '/not_found',
        permanent: false
      },
      props: {}
    };
  };

export default Details;
