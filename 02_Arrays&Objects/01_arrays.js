const newArr=[1,2,3,"akash",true];
console.log(newArr)
let arr1=new Array(1,2,false,"city");
console.log(arr1.length);
//******************Methods**************

arr1.push(3);
arr1.push(5);
arr1.push("name");
console.log(arr1);
arr1.pop();
console.log(arr1);

arr1.unshift(0); //add element at starting position...
console.log(arr1);
arr1.shift();
console.log(arr1); //remove from starting position.....
console.log(arr1.includes(3));
console.log(arr1.indexOf(2));

console.log(arr1.join()) // convert the array into string...
console.log(arr1);


let arr2=[1,2,4,5,6,7,8];
console.log(`A ${arr2}`);
console.log(`B ${arr2.slice(0,4)}`) // gives the element from start to end index which we provide
console.log(`C ${arr2}`);
console.log(`D ${arr2.splice(0,4)}`) // give the elem and also remove them form orignal array,....

console.log(`E ${arr2}`);