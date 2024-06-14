const API_KEY = "9641dd77eae639665a67662ca5079d0a"
const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentariesMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;
// https://api.themoviedb.org/3/trending/all/week?api_key=9641dd77eae639665a67662ca5079d0a&language=en-US

// https://api.themoviedb.org/3/discover/tv?api_key=9641dd77eae639665a67662ca5079d0a&with_networks=213