import PropTypes from "prop-types";

function MovieList({ movies }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-8 sm:grid-cols-2 mx-8 my-2 bg-neutral-900">
      {movies?.map((movie) => (
        <div
          key={movie.id}
          className="movie-card group hover:bg-red-700 hover:ring-sky-500 hover:text-blue-500"
        >
          {movie.thumbnail && (
            <img
              id="img"
              className="w-10/12 m-auto py-4"
              src={`${movie.thumbnail.path}/portrait_medium.${movie.thumbnail.extension}`}
              alt={movie.title}
            />
          )}
          {movie.name && (
            <h2 className="text-center text-red-700 group-hover:text-neutral-900">
              {movie.name}
            </h2>
          )}
        </div>
      ))}
    </div>
  );
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MovieList;
