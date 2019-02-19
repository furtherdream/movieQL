import fetch from "node-fetch"
const API_URL = "https://yts.am/api/v2/list_movies.json"

// 몇개 보여줄지랑 평점 기준 필터 만들기 위해
export const getMovies = (limit, rating) => {
  fetch(`${API_URL}`)
    .then(res => res.json())
    .then(json => json.data.movies)
}
