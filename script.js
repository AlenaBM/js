'use strict';

let numberOfFilms;

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function showMyDB(hidden){
  if (!hidden){
    console.log(personalMovieDB);
  } else {
    console.log('fuck you');
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres(){
  for (let i = 1; i<=3; i++){
  personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером #${i}`);
}
}

writeYourGenres();

function start(){
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null ||isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}
start();

function rememberMyFilms(){
  for (let i=0; i<2; i++){
  const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');
  if (a != null && b != null && a !='' && b !='' && a.length < 50){
    personalMovieDB.movies[a] = b;
    console.log('done');
  } else {
    console.log('error');
    i--;
  }
}
}

rememberMyFilms();

function detectPersonalLevel(){
  if (numberOfFilms < 10){
  console.log("you've watched very few movies");
} else if (numberOfFilms >= 10 && numberOfFilms <30) {
 console.log("you're classic slave");
} else if (numberOfFilms >= 30) {
  console.log("you're danger master");
} else {
  console.log("it's an error");
}
}

detectPersonalLevel();




