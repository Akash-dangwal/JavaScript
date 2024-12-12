let mrvlHero=["IronMan","Spiderman","CapAmerica"];
let dcHero=["Batman","Superman","Flash"];

// mrvlHero.push(dcHero); // // push the whole array as one element and changes in same array
// console.log(mrvlHero);

let allHero=mrvlHero.concat(dcHero); // merge both the arrays and creates a new array
console.log(allHero);
//spread..
let heros=[...mrvlHero, ...dcHero]   //spreads the elements of array ..
console.log(heros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)  // covert array inside array into single array in bracket you have to specify level(kitne andr tk hai array)
console.log(real_another_array);



console.log(Array.isArray("Hitesh")) //tells if its array or not
console.log(Array.from("Hitesh"))  //makes array from inside the bracket element..
console.log(Array.from({name: "hitesh"})) // interesting  (in case of objects we have to specify ki kiska array bnana hai keys ka ya vlaues ka)

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  // using of you can create array of multiple values...