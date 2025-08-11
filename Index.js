// Functions

// function Birthday(username,age){
//     console.log('Happy Birthday');
//     console.log("Happy Birthday");
//     console.log(`Happy Birthday ${username}`);
//     console.log("Happy Birthday");
//     console.log(`You are ${age} years old.`);
// }
// Birthday("Ali",21);

// function add(a,b){
//   let result= a+b;
//   return result;
// }
// console.log(add(2,2));

// Objects

// let person = {
//     Name: "Ali-Hassan",
//     Age: 20,
//     "Full Stack Developer": true,
//     Nationality: "pakistan",
//     "githubLink": "https://github.com/Ali-Hassan",
//     "Skills": ["HTML", "CSS", "JavaScript"],
//     // function in objects
//     Hi : function(){
//         console.log("Hello");
//     },
//     // This property in objects
//     Intro : function(){
//         console.log(`Hello my name is ${this.Name} and I am ${this.Age} years`)
//     },
// };

// console.log(person.Name);
// console.log(person.Age);
// console.log(person.Skills);

// // Calling functions
// person.Hi();
// person.Intro();

// // constructors

// function Car (make ,model, color, year){

//     this.make = make;
//     this.model = model;
//     this.color = color;
//     this.year = year;

// };
// const car1 = new Car("Toyata","Corolla","Blue",2024);
// const car2 = new Car("Honda", "Civic", "Black", 2023);
// console.log(car1.make);
// console.log(car2.model);

// Class

// class Product{
//     constructor(name,price,quantity,model){
//         this.name = name;
//         this.price=price;
//         this.quantity = quantity;
//         this.model=model;
// }
//     display(){
//         console.log(`Product Name: ${this.name} , Price: ${this.price} , Quantity: ${this.quantity}, Model: ${this.model}`)
//     }

// }

// const product1 = new Product("Mobile",42000,5,"Samsung");
// const product2 = new Product("Laptop",80000,3,"Hp");
// product1.display();
// product2.display();

// // Static variable
// class store{

//      static pi = 3.14;

//      static getDiameter(radius){
//         return radius*2;
//      }

//      static getCircumference(radius){
//         return 2*this.pi*radius;
//      }
// }

// console.log(store.pi);
// console.log(store.getDiameter(5));
// console.log(store.getCircumference(5).toFixed(2));

// Inheritance

// class Animal{
//     alive = true;

//     eat(){
//         console.log(`This ${this.name} is eating`);

//     }
//     sleep(){
//         console.log(`This ${this.name} is sleeping`);

//     }
// }

// class Rabbit extends Animal{
//     name = "Rabbit";

//     run(){
//         console.log(`This ${this.name} is running`);

//     }
// }

// class Fish extends Animal{
//     name = "Fish";
//      swim(){
//         console.log(`This ${this.name} is swimming`);

//      }
// }

// class Eagle extends Animal {
//   name = "Eagle";
//   fly() {
//     console.log(`This ${this.name} is flying`);
//   }
// }

// const rabbit = new Rabbit();
// const fish = new Fish();
// const eagle = new Eagle();

// console.log(rabbit.alive);
// console.log(fish.alive);
// console.log(eagle.alive);
// rabbit.eat();
// fish.sleep();
// fish.swim();
// eagle.fly();

// Super Keyword

// class Animal {

//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }

// }

// class Rabbit extends Animal{

//       constructor(name,age,runspeed){
//         super(name,age);
//         this.runspeed = runspeed;
//       }

// }

// class Fish extends Animal {
//   constructor(name, age ,swimspeed) {
//     super(name , age);
//     this.swimspeed = swimspeed;
//   }
// }
// class Eagle extends Animal {
//   constructor(name , age ,flyspeed) {
//     super(name, age);
//     this.flyspeed = flyspeed;
//   }
// }

// const fish = new Fish("Star",2,5);
// const  rabbit = new Rabbit("Falcon", 5, 40);
// const eagle = new Eagle("Badshah", 10, 70);

// console.log(fish.age);
// console.log(rabbit.name);
// console.log(eagle.flyspeed);

// Setter and getter

// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
//   set width(newWidth) {
//     if (newWidth > 0) {
//       this._width = newWidth;
//     }
//     else {
//       console.error("Width must be a positive number");
//     }
//   }
//   set height(newHeight) {
//     if (newHeight > 0) {
//       this._height=newHeight;
//     }
//     else {
//       console.error("Width must be a positive number");
//     }
//   }
//   get width (){
//     return this._width;
//   }
//   get height(){
//     return this._height;
//   }
//   get area(){
//     return this._width * this.height;
//   }
// }

// const rectangle  = new Rectangle(5,4);
// console.log(rectangle.width);
// console.log(rectangle.area);

// // Destructors

// let a = 1;
// let b = 2;

// [a,b] = [b,a];

// console.log(a);
// console.log(b);

// const colors = ["red", "blue", "green", "black", "pink"];
// const [first, second, third] = colors;

// console.log(first);
// console.log(second);

// Destructors with objects

// const person1 = {
//    Firstname : "Ali",
//   LastName : "Hassan",
//    age : 21,
//    job : "Student",
// }

// const person2 = {
//   Firstname: "Shafqat",
//   LastName: "Abbas",
//   age: 20,
// }

// const {Firstname,LastName,age,job="unemployed" } = person2;
// console.log(Firstname);
// console.log(age);
// console.log(job);

// function display({Firstname,LastName,age,job="softwere engineer"}){
//        console.log(`${Firstname}, ${LastName}, ${age}, ${job}`);

// }

// display(person2);

// const person = {
//   Firstname: "Ali",
//   LastName: "Hassan",
//   age: 21,
//   isStudent: true,

//   Address : {
//     country : "Pakistan",
//     city : "Kamalia",
//     street: "Street 1",
//     District :  "Toba Tek Sign",
//   }

// };

// console.log(person.Address.District);

// Arrays with objects

// const fruits = [
//   { name: "Apple", color: "Red", price: 100 },
//   { name: " Orange", color: "orange", price: 200 },
//   { name: "Mango", color: "Yellow", price: 300 },
//   { name: "Grapes", color: "purple", price: 400 },
//   { name: "Pineapple", color: "white", price: 500 },
// ];
// console.log(fruits[3].price);
// fruits.push({ name: "Banana", color: "yellow", price: 600 });
// console.log(fruits[5].price);
// fruits.splice(1,2); // Don,t show 1-2 position
// console.log(fruits);

// For each property
// fruits .forEach(fruits => console.log(fruits.name));

// Map property
// const fruit = fruits.map(fruits => fruits.color);
// console.log(fruit);

// Filter propertty
// const yellowfruit = fruits.filter(fruits => fruits.color = "yellow");
// console.log(yellowfruit);

// let numbers = [3,2,7,8,9,1,4,6,5,10];
// numbers.sort((a,b) => (a-b));
// console.log(numbers);

// const cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "k", "Q"];

// function shuffle(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const random = Math.floor(Math.random() * (i + 1));
//     [array[i], array[random]] = [array[random], array[i]];
//   }
// }

// shuffle(cards);
// console.log(cards);


// const date = new Date();
// console.log(date);

// const hours = date.getHours();
// console.log(hours);




// Timout and set timeout function
// function say(){
//   alert("hello");
// }
//  const timeout = setTimeout(say,2000);
//  clearTimeout(timeout);


// Closure in Js

function outerFunction() {
  let count = 0;
  function innerFunction() {
    count++;
    console.log(`Count is ${count}`);
  }
  return innerFunction;
}

const counter = outerFunction();
counter(); 
counter();
counter();


// Loops in JS
// For loop example
for (let i = 1; i <= 3; i++) {
  console.log(`For loop iteration: ${i}`);
}

// While loop example
let j = 1;
while (j <= 3) {
  console.log(`While loop iteration: ${j}`);
  j++;
}

// Do-while loop example
let k = 1;
do {
  console.log(`Do-while loop iteration: ${k}`);
  k++;
} while (k <=3);