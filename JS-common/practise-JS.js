// #1 Фильтрация строки

const string = 'ЗдравствуйтЕ, дамы и господа!';
const vowels = ['а','у','е','ы','о','э','я','и','ю'];
function getVowels(str) {
  let getVowels = '';
  for (let i = 0; i < str.length; i++) {
    let vowel = str[i].toLowerCase();
    if (vowels.includes(vowel)) {
      getVowels = getVowels + ' ' + vowel;
    }
  }
  return getVowels;
};
console.log(getVowels(string));

// #2 Выборка объекта

const workers = [
  {"name":"John","salary":500},
  {"name":"Mike","salary":500},
  {"name":"Helen","salary":500},
  {"name":"Nick","salary":500},
  {"name":"Tom","salary":850},
  {"name":"Bob","salary":500},
  {"name":"Linda","salary":1100}
];

function getWorthyWorkers(arg) {
  let WorthyWorkers = [];
  arg.forEach(current => {
    if (current.salary > 1000) {
      WorthyWorkers.push(current.name);
    }
  });
  // for (let i = 0; i < arg.length; i++) {
  //   if (arg[i].salary > 1000) {
  //     WorthyWorkers.push(arg[i].name);
  //   }
  // }
  if  (WorthyWorkers == '') {
    WorthyWorkers.push('Таких сотрудников нет!')
  }
  return WorthyWorkers;
}
console.log(getWorthyWorkers(workers));

// #3 Анализ строки

const path = "/users/download/index.hml"

function isHtml(path) {
  const pathExt = path.slice(-5);
  return pathExt === '.html'
  // if (path.includes('.html') == true) {
  //   return 'true' 
  // } else {
  //   return 'false'
  // }
}
console.log(isHtml(path))

//#4 Фильтрация массива

const mixedArray = [3,13,74,14,66,15,22,4];
const isEven = num => {
  return num % 2 === 0;
}
// function isEven(num) {

//   return num % 2 === 0
  // if (num % 2 == 0) {
  //   return true;
  // } else {
  //   return false;
  // }
// }

const filterArray = (arg, Fn) => {
  let evenArray = [];
  arg.forEach(num => {
    if (Fn(num)) {
      evenArray.push(num);
    }  
  })
  return evenArray;
  
// function  filterArray(arg) {
//   for (let i = 0; i<arg.length; i++) {
//       if (isEven(arg[i]) == true) {
//         evenArray.push(arg[i]);
//       }
//     }
}

console.log(filterArray(mixedArray, isEven))