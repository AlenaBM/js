'use strict';
// let unNamed = 390;
// console.log(unNamed);

// const arr =[];

// arr[0] = alert('are you gay?');
// arr[1] = confirm('suck some dick?');
// arr[2] = prompt('what is your name, master?', '');

// console.log(arr);

// if (arr[2]) {
//   document.querySelector('.paraf').innerHTML = `<b>${arr[2]}</b>, you are a new master`;}
//   else {
//     alert(typeof(arr[2]));
//   }


// console.log(typeof(null));

// console.log(50 % 500);

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);