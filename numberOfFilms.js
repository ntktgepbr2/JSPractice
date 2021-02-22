let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", ""),
  lastWatchedFilm = prompt("Один из последних просмотренных фильмов?", ""),
  filmRate = prompt("Его оценка?", "");

personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
personalMovieDB.movies[lastWatchedFilm] = filmRate;
console.log(personalMovieDB);
