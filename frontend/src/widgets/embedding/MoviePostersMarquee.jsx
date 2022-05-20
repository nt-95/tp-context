import React from "react"
import { postersArray } from "helpers/movieHelper/postersImports"

const MoviePostersMarquee = () => {
  const getPosters = () => {
    return postersArray.map((poster, i) => {
      return <img className="min-w-fit" key={i} src={poster} alt="poster" />
    })
  }

  return (
    <div className="flex h-[90%] w-screen absolute bottom-0 overflow-hidden">
      <div className="flex border-green-400 border-2 h-full w-fit animate-marquee">
        {getPosters()}
      </div>
      <div className="flex relative left-0 border-pink-400 border-2 w-fit h-full animate-marquee">
        {getPosters()}
      </div>
    </div>
  )
}

export default MoviePostersMarquee
