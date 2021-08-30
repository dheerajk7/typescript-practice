let apples: number = 5;
// show error in file itself
// apples = 'as';

let speed: string = 'fast';
// speed = 12; error

let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

let now: Date = new Date();

// Array
let color: string[] = ['Yellow', 'red', 'green'];
let myNumbers: number[] = [1, 2, 3, 4, 5];

// classes

class Car {}

let car: Car = new Car();

// Object literals

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

point.x = 12;

// point.x = '12';          show error

// Function
// For function we are going to tell different types of arguments and what different value its going to return
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// Type inference means it will automatically take type of the variable;
let a = 12;

// when to use annotations
// 1) Function that return any type

const json = '{"a":10, "b": 20}';

const coordinates = JSON.parse(json); //this make coordinates by default as any so we doesn't want to do it because this function can return any kind of value.
console.log(coordinates); //{x: 10, y: 20};
coordinates.abc = '12'; //this will not through error because of any type

// Ways to fix it
// 1) Adding type annotations for coordinates
const coordinates1: { a: number; b: number } = JSON.parse(json);

// 2) When initialization and declaration are in different line
// 3) Variable whose type cannot be inferred correctly

let numbers = [-10, -1, 12];
// if we find number > 0 then will assign that number here
let numberAboveZero = false;

// for(let i=0;i<numbers.length;i++) {
//     if(numbers[i] > 0) {
//         numberAboveZero = 10; this will through error then we have to give type notation to above initialization
//     }
// }

// or type notation will work for us
let numberAboveZero1: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero1 = 10;
  }
}

// Function type annotations
// Third thing is the type of value our function is going to return;
const add = (a: number, b: number): number => {
  return a + b;
};

// below function return void...typescript will do type inference here. adding annotation to response help us to improve this.
// make sure to give response annotations always.
const subtract = (a: number, b: number) => {
  a - b;
};

// named function
function divide(a: number, b: number): number {
  return a / b;
}

// annotations for anonymous function
const multiply = function (a: number, b: number): number {
  return a * b;
};

// When function is not returning anything then that means we are not returning anything
// We can return null or undefined in void return type
const logger = (message: string): void => {
  console.log(message);
};

// case when we are throwing error and not going till end of the function 
const throwError(message: string) : never => {
    throw new Error(message);
};


// destructing with annotation
const forecast = {
    date: new Date(),
    weather: 'sunny',
}

const logWeather = (forecast : {date: Date, weather: string}): void => {
    console.log(forecast.date);
    console.log(forecast.weather)
}

// while using es2015 
const logWhether1 = ({date, weather}: {date: Date, weather: string}): void {
    console.log(date, weather);
}

// Object annotations

const profile = {
  name: 'alex',
  age: 20,
  coordinates: {
    lat: 10,
    lng: 14,
  },
  setAge: (age: number): void => {this.age = age},
}

// performing destructuring in above object

const {age}: { age: number } = profile;

// const {coordinates : {lat, lng}} = profile; performation annotation in this line

const {coordinates : {lat,lng}} : { coordinates: {lat: number, lng:number}}= profile;



