import React from "react"

const MovieInfo = ({ movie }) => {
  return (
    <div>
      <p className="text-xl mt-6 md:mt-0 mb-6">{movie.title}</p>
      <p className="mt-2">{movie.release_date}</p>
      <p className="mt-2 mb-4">{`Note: ${movie.vote_average}`}</p>
      <p className="mt-2 mb-10 text-zinc-300">{movie.overview}</p>
    </div>
  )
}

export default MovieInfo
