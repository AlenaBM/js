// let unNamed = 390;
// console.log(unNamed);

const arr =[];

arr[0] = alert('are you gay?');
arr[1] = confirm('suck some dick?');
arr[2] = prompt('How many slaves you have?', '');

console.log(arr);

if (arr) {
  document.querySelector('paraf').innerHTML = `<b>${arr}</b>, you are a new master`;}
  else {
    document.querySelector('paraf').innerHTML = '<b>Unde</b>, you are a new master';}
