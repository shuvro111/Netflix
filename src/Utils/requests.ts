const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY
const requests = {
  fetchTrending: {
    title: 'Trending',
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },

  fetchNetflixOriginals: {
    title: 'Netflix Originals',
    url: `/discover/movie?api_key=${API_KEY}&with_networks=213`,
  },

  fetchTopRated: {
    title: 'Top Rated',
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  },

  fetchUpcoming: {
    title: 'Upcoming',
    url: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  },

  /* With Generes */
  fetchActionMovies: {
    title: 'Action',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },

  fetchComedyMovies: {
    title: 'Comedy',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },

  fetchHorrorMovies: {
    title: 'Horror',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },

  fetchThrillerMovies: {
    title: 'Thriller',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
  },

  fetchAnimationMovies: {
    title: 'Animation',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  },
}

export default requests

export const MovieById = {
  /* Get Movie By Id */
  fetchMovieByid: (movieId) => {
    return `/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  },
  fetchTvByid: (tvId) => {
    return `/movie/${tvId}?api_key=${API_KEY}&language=en-US`
  },

  /* Get Movie Trailer By Id */
  fetchMovieTrailerByid: (movieId) => {
    return `/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`
  },
  fetchTvTrailerByid: (tvId) => {
    return `/movie/${tvId}/videos?api_key=${API_KEY}&language=en-US`
  },
  fetchMovieCredits: (movieId) =>
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`,
}
