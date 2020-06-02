
// var name = "John";

// function first() {
//   var a = "Hello!";
//   second();
//   var x = a + name;
// }

// function second() {
//   var b = "Hi!";
//   third();
//   var y = b + name;
// }

// function third() {
//   var c = "Hey!";
//   var z = c + name;
//   console.log(z);
// }

// first();
//  array
// var fruites=["apple","mango",'banana'];
// console.log(fruites);
// console.log(fruites[1]);



// normal function


// function sub(a,b){
//   return a-b;
// } 
// var result=sub(3,5);
// console.log(result);


// funtion expresion


// var sub=function(a,b){
//   return a-b;
// }
// result(2,1);
// console.log(sub);

const num = 3;
const multiplyBy2 = (inputNumber) => {
 const result = inputNumber*2;
 return result;
}
const output = multiplyBy2(num);
// const nweOutput = multiplyBy2(10);





// //////object destructuring////////////

// const address ={
//   street: '',
//   city:'',
//   country:''
// };

// const street = address.street;
// const city = address.city;
// const country= address.country;
 
// //////////////destructuring the above object //////////////////


//  const{street , city ,country}= address;


// array map method

// const colors= ['red','blue','green'];
// const items = colors.map(colors => `<li>${colors}</li>`);
// console.log(items);


/////////////// spread operators /////////////// combining two operators or array 

// const first = {name:yasmeen};
// const second = {job:developer};

// const combined = {...first, ...second, location:"india"};
// console.log(combined);

// const num = 3;
// const multiplayBy2 = (inputNumber) => {
//   const result = inputNumber * 2;
//   return result;
// };
// const output = multiplayBy2(num);
// console.log(output);


// const copyArrayAndMultiplyBy2 = (array) =>{
//   const output = [];
//   for (let i =0; i <array.length; i++){
//     output.push(array[i]*2);
//   }
//   return output;
// }
// const myArray =[1,2,3]
// const result = copyArrayAndMultiplyBy2(myArray);
// console.log(result);

const addTwo = (add) => {
    const output = add+1 ;
    return output;
  }
  const result = addTwo (10);
  console.log(result);
  