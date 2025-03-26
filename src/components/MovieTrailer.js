import React from "react";

const MovieTrailer = ({ videoId }) => {
  const trailerUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="trailer-container">
      <iframe
        width="560"
        height="315"
        src={trailerUrl}
        title="Movie Trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MovieTrailer;

