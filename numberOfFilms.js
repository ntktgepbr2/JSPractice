// 1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
// 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
// отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит -
// возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как
// str.length - и получить её длину)
// 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
// "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше -
// "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
// 4) Потренироваться и переписать цикл еще двумя способами*/

let numberOfFilms,
  //   lastWatchedFilm = prompt("Один из последних просмотренных фильмов?", ""),
  //   lastWatchedFilm2 = prompt("Один из последних просмотренных фильмов?", ""),
  //   filmRate = prompt("Его оценка?", "");
  // filmRate2 = prompt("Его оценка?", "");

  personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
  };
function howManyMovies() {
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
    personalMovieDB.count = numberOfFilms;
  }
}
howManyMovies();

for (i = 0; i < 2; i++) {
  (lastWatchedFilm = prompt("Один из последних просмотренных фильмов?", "")),
    (filmRate = prompt("Его оценка?", ""));
  if (
    lastWatchedFilm != null &&
    filmRate != null &&
    lastWatchedFilm != "" &&
    filmRate != "" &&
    lastWatchedFilm.length < 50
  ) {
    personalMovieDB.movies[lastWatchedFilm] = filmRate;
  } else {
    i--;
  }
}

// personalMovieDB.movies[lastWatchedFilm] = filmRate;
console.log(personalMovieDB);
function moviesQuantity() {
  switch (true) {
    case personalMovieDB.count < 10:
      console.log("Malo filmov");
      break;
    case personalMovieDB.count >= 10 && personalMovieDB.count < 30:
      console.log("Not Bad");
      break;
    case personalMovieDB.count > 30:
      console.log("Kino Maniac");
      break;
  }
}
moviesQuantity();

function showMyDb(params) {
  if (personalMovieDB.privat == false) {
    console.log(personalMovieDB);
  }
}
showMyDb();
function writeYourGenres(params) {
  for (i = 0; i < 3; i++) {
    personalMovieDB.genres[i] = prompt(
      `Ваш любимый жанр под номером ${i + 1}`,
      ""
    );
  }
}
writeYourGenres();
