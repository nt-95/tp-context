export const getYear = (releaseDate) => {
  if (!releaseDate) {
    return ""
  }
  return releaseDate.substring(0, 4)
}
