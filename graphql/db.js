let movies = [
  {
    id: 0,
    name: "Nicolas",
    score: 1
  },
  {
    id: 1,
    name: "Jisu",
    score: 1
  },
  {
    id: 2,
    name: "Japan Guy",
    score: 18
  },
  {
    id: 3,
    name: "Daal",
    score: 18
  },
  {
    id: 4,
    name: "JD",
    score: 99
  },
  {
    id: 5,
    name: "moondaddi",
    score: 21
  },
  {
    id: 6,
    name: "flynn",
    score: 22
  }
]

export const getMovies = () => movies

export const getById = id => {
  const filteredPeople = people.filter(person => person.id === id)
  return filteredPeople[0]
}

export const deleteMovie = id => {
  const cleanedMovies = movies.filter(movie => movie.id !== id)
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies
    return true
  } else {
    return false
  }
}
