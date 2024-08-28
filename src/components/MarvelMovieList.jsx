import { useState } from "react";
import MarvelAPI from "./MarvelAPI";

function MarvelMovieList() {
  const [page, setPage] = useState(1);

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div>
      <MarvelAPI page={page} />
      <div className="mx-8 flex justify-center">
        {page > 1 && (
          <button
            onClick={prevPage}
            className="m-2 px-4 py-2 bg-blue-500 text-white rounded bg-red-700"
          >
            Previous
          </button>
        )}
        <button
          onClick={nextPage}
          className="m-2 px-4 py-2 bg-blue-500 text-white rounded bg-red-700	"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default MarvelMovieList;
