// let names=['erkan', 'betül', 'harvey', 'ashly'];

// console.log(typeof(names));
// console.log(typeof(names[0]));
// console.log(names.length);
// console.log(Boolean(names));

// names.length ? console.log("there is data"):'there is no data';
// //---------
// for (let i=0; i<names.length;i++){
//     console.log(names[i]);
// }

// //-------
// let counter=0
// while (counter<names.length){
//     console.log(names[counter]);
//     counter++
// }

// //---------

// names.forEach(i=>console.log(i))

// //---------

// let ifade = "ben felegin tekerine";

// function findVowels(par) {
//   let vowels = "aeiou";
//   let newStr = "";

//   for (let i = 0; i < par.length; i++) {
//     if (vowels.includes(par[i])) {
//       newStr += par[i];
//     }
//   }
//   return newStr;
// }

// console.log(findVowels(ifade));

// //-------------

// let depo = [1, 2, 3, 8, 5, 4, 0];

// function findBiggestNumber(numbers) {
//   let enBuyuk = numbers[0];

//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > enBuyuk) {
//       enBuyuk = numbers[i];
//     }
//   }

//   return enBuyuk;
// }

// console.log(findBiggestNumber(depo));

//----------

// let depo = [1, 2, 3, 8, 5, 4, 0];

// function sum(numbers) {
  
// let toplam =0;
//   for (let i = 0; i < numbers.length; i++) {
//    toplam += numbers[i];
//     }
//     return toplam;
//   }

  


// console.log(sum(depo));

let depo = [1, 2, 3, 8, 5, 4, 0];

function avarege(numbers) {
  
let toplam =0;
  for (let i = 0; i < numbers.length; i++) {
   toplam += numbers[i];
    
    }
    return toplam/numbers.length;
  }

  

console.log(avarege(depo));