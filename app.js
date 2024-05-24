let names=['erkan', 'betül', 'harvey', 'ashly'];

console.log(typeof(names));
console.log(typeof(names[0]));
console.log(names.length);
console.log(Boolean(names));

names.length ? console.log("there is data"):'there is no data';
//---------
for (let i=0; i<names.length;i++){
    console.log(names[i]);
}


//-------
let counter=0
while (counter<names.length){
    console.log(names[counter]);
    counter++
}


//---------

names.forEach(i=>console.log(i))