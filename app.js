const pokemon = require('pokemon');

// console.log(pokemon.all("ko"));

const test = pokemon.all("ko");
// ? test 리턴 보니까 배열
let HTMLi;
const newList = [];

for(i=0; i<test.length; i++){
  
  HTMLi = newList+'<li>' + test[i] + '</li>';
  
  console.log(HTMLi)
}

let fs = require("fs");

fs.writeFile('app.html',HTMLi, function(err) {
  if(err) {
    console.log(pokemon.all(ko))
  }
})

