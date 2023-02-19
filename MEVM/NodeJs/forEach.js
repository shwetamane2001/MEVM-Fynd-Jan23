const arr=['giraffe','tiger','lion'];//homogeneous data
const arr2=[1,2,3,4];//homogeneous data
arr.push('cheetah');//adding elements to an array using push function
arr2.push(6);
arr.forEach(element=>{
    console.log(element);
});

arr2.forEach(element=>{
    console.log(element);
});

const fruits=['banana','orange'];
fruits.unshift('apple'); //will addelements in the beginning of the array
console.log(fruits);
console.log(findFruit('banana'));
//fruits.findIndex(findFruit('apple'));

console.log(fruits.findIndex(findFruit));

function findFruit(fruit){
    return fruit=="banana";
}

const ages=[6,2,3,4];
console.log(ages.findIndex(checkAge));
console.log(ages.sort());//ascending
console.log(ages.reverse());//descending after asc in previous line

function checkAge(age){
    return age>3;
}

const cars=["bmw","mercedes"];

const car= {type:"fiat",model:"400",color:"white"};