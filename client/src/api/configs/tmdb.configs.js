const mediaType = {
  movie: "movie",
  tv: "tv"
};

// Popular: Get the list of popular movies or TV shows on TMDb.
const mediaCategory = {
  popular: "popular",
  top_rated: "top_rated"
};

// back drop path: https://image.tmdb.org/t/p/original
const backdropPath = (imgEndpoint) => `https://image.tmdb.org/t/p/original${imgEndpoint}`;

// poster path: https://image.tmdb.org/t/p/w500
const posterPath = (imgEndpoint) => `https://image.tmdb.org/t/p/w500${imgEndpoint}`;

// youtube path: https://www.youtube.com/embed/${videoId}?controls=0
const youtubePath = (videoId) => `https://www.youtube.com/embed/${videoId}?controls=0`;

// Export all configs
const tmdbConfigs = {
  mediaType,
  mediaCategory,
  backdropPath,
  posterPath,
  youtubePath
};

export default tmdbConfigs;