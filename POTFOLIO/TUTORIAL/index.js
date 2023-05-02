// function gid(){
//     console.log("well done");
//     alert("okay")
// }
// gid()

// function gid(firstName, secondName, thirdName){

//     console.log(firstName, thirdName);}

// gid("john", "doe", "MR")


// function gid(num1, num2, num3){

//     return num1 + " " + num2 + " " + num3;
// }
// console.log(gid("Mr", "Bola", "Misheal"));

// const car = {
//     name: "bmw",
//     color: "blue",
//     year: 2000,
//     second:  function() {
//         return 1990
//     }
// }
// console.log(car.name);

// function pop(){

//  alert("WELL COME")
// }

// const num = "dooo"
//  console.log(num.length);

// const word = "I love \"girls\" too much"
// console.log(word);

// const word = "girls and money girls and iphone girls and makeup"
// const ans = word.replaceAll("girls","biro")
// const yes = word.toUpperCase()
// console.log(yes);

//  const userName = "Gidiigogo"
// const password = 1996
// if(userName == "Gidiigogo" && password == 1996){
//   alert("Log in successful");
// }
// else{
//     alert("invalid username or password")
// }

// let x = 78
// let ans = x .toString()
// console.log(ans);
// console.log(typeof(ans));

// let y = 17.9087
// let and = y.toFixed()
// console.log(and)
// console.log(typeof(and));

// let r = true;
// console.log(typeof(r));
// let anr = Number(r)
// console.log(typeof(anr));

// let b = 10.768
// let ane = parseInt(b)
// console.log(ane);
// console.log(typeof ane);

// let q = 10.768
// let yuo = parseFloat(q)
// console.log(yuo);
// console.log(typeof yuo);

// ARRAY METHODS
// let cars = [ "saab", "bmw", "volvo", null, undefined, {name : "Gid"}]
// cars[0] = "ford"
// console.log(cars);

// let fruits = ["apple", "beans", "cap", "hat"]
// let ans = fruits.toString()

// console.log(fruits);
// console.log(ans);

// let fruits = ["apple", "beans", "cap", "hat"]
// let ans = fruits.join(" ")
// console.log(ans);

// let fruits = ["apple", "beans", "cap", "hat"]
// let ans = fruits.pop()
// console.log(ans);
// console.log(fruits);

// let fruits = ["apple", "beans", "cap", "hat"]
// let ans = fruits.push("dog")
// console.log(ans);
// console.log(fruits);

// let fruits = ["apple", "beans", "cap", "hat"]
// let ans = fruits.shift()
// console.log(ans);
// console.log(fruits);

// let fruits = ["apple", "beans", "cap", "hat"]
// let ans = fruits.unshift("rice")
// console.log(ans);
// console.log(fruits);

// let fruits = ["apple", "beans", "cap", "hat"]
// let ans = delete fruits[2]
// console.log(ans);
// console.log(fruits);

// const myGirls = ["ani", "bisi"]
// const myBoys = ["roy", "adve"]
// const myInlaw = ["fox"]
// const myChildren = myGirls.concat(myBoys, myInlaw)
// myChildren.sort()
// console.log(myChildren);

// let fruits = ["apple", "beans", "cap", "hat"]
// fruits.sort()
// console.log(fruits);

// let arr = [
//     {
//         name: "emeka",
//         age: 49,
//         position: "intern", 
//     },
//     {
//         name: "jeff",
//         age: 39,
//         position: "junior", 
//     },
//     {
//         name: "Dan",
//         age: 19,
//         position: "senior", 
//     }
// ]

// console.log(arr[0].name + " " + arr[2].name);

// JS DATE
// let time = new Date()
// console.log(time);

// let time = new Date()
// console.log(time.getDay());

// Js MATHS
// let ma = Math.floor(7.672)
// console.log(ma);

// let man = Math.round(7.672)
// console.log(man);

// let mad = Math.ceil(7.672)
// console.log(mad);

// let ran = Math.random()
// console.log(ran);

// let mat = Math.floor(Math.random() * 13)
// console.log(mat);

// // let map = Math.floor(Math.random() * (max - min) + min)

// let map = Math.floor(Math.random() * (30 - 20) + 20)
// console.log(map);

// // Boolean()
// let tap = Boolean(23 > 40)
// console.log(Boolean(23 > 40));

// Nullish coal operator
// let him = 566
// let her = "them"
// let result = him ?? her
// console.log(result);
// ?? Displays the fisrt argument if it's not nullish or undefined

// Comparism
// if(username = 1 == 1){
//     alert("successful")
// }
// else{alert("Unsuccessful")
// }

// let username = "Gideon"
// let password = 12345

// if(username === "Dad"){
//     alert("successful")
// }
// else if (password === 2345){
//     alert("OKAY")
// }
// else{alert("Unsuccessful")
// }

// Ternary Operator
// 1 > 1 ? console.log("YES") : console.log("NO");

// let city = "Lagos"
// switch (city){
//     case "Abuja" : console.log("Abuja is the city"); 
//     break;
//     case "Lagos" : console.log("Lagos is the city");
//     break;
//     default : console.log("No city");
// }

// ARROW FUNCTION
// let car = () => {
//     console.log("GOOD");
// }
// car()

// Map
// let arr = [
//     {
//         name: "emeka",
//         age: 49,
//         position: "intern", 
//     },
//     {
//         name: "jeff",
//         age: 39,
//         position: "junior", 
//     },
//     {
//         name: "Dan",
//         age: 19,
//         position: "senior", 
//     }
// ]
// let  ans = arr.map((items) => {
//     return items.age + " " + items.name
// })
// console.log(ans);

// FILTER
// let arr = [
//     {
//         name: "emeka",
//         age: 49,
//         position: "intern", 
//     },
//     {
//         name: "jeff",
//         age: 39,
//         position: "junior", 
//     },
//     {
//         name: "Dan",
//         age: 19,
//         position: "senior", 
//     }
// ]
// let  ans = arr.filter((items) => {
//     return items.age >= 49
// })
// console.log(ans);

// FIND
// let arr = [
//     {
//         name: "emeka",
//         age: 49,
//         position: "intern", 
//     },
//     {
//         name: "jeff",
//         age: 39,
//         position: "junior", 
//     },
//     {
//         name: "Dan",
//         age: 19,
//         position: "senior", 
//     }
// ]
// let  ans = arr.find((items) => {
//     return items.position === "senior"
// })
// console.log(ans);

// REDUCE
// let arr = [
//     {
//         name: "emeka",
//         age: 49,
//         position: "intern", 
//         salary: 100
//     },
//     {
//         name: "jeff",
//         age: 39,
//         position: "junior",
//         salary: 200 
//     },
//     {
//         name: "Dan",
//         age: 19,
//         position: "senior", 
//         salary: 300
//     }
// // ]
// // let  sal = arr.reduce(( acc, items) => {
// //     let ans = acc + items.salary
// //      return ans
// //    },0)
// // console.log(sal);

// // let  sal = arr.reduce(( acc, items) =>
// //  {
// //    console.log(acc);
// //    console.log(items);
// //    acc += items.salary
// //    return acc
// // },0)
// // console.log(sal);

// // RESTRUCTURING AARAY
// // let fruits = ["orange", "banana", "apple"]
// // let [fruits1, fruits2, fruits3] = fruits
// // console.log(fruits1);

// // RESTRUCTURING OBJECT
// // const foods = {
// //     first: "bob",
// //     last: "Dan",
// //     age: 29
// // }
// // let { first, last, age } = foods
// // console.log(last);

// // JS SPREAD
// // let data = [ 11, true, "this is joecole"];
// // let data2 = [ 1,2,3,4,5,6]
// // let ans = [ ...data, ...data2 ]
// // console.log(ans);

// // let dat = {
// //     age: 11, 
// //     name: "Jeff",
// //     story:"this is joecole"
// // };

// // let an = { ...dat}
// // console.log(an);

// // LOOP
// // for( let gideon = 0; gideon < 5; gideon++){
// //   console.log(gideon);
// // }

// // let ans = ["abcde", true, null]
// // let puut = []
// // for( let i = 0; i < ans.length; i++){
// //     let iu = ans[i]
// //     puut.push(iu)
// //   }
// //   console.log(puut);

// // const obj = {name: "John", age: 30, city: "New York"}
// // console.log(obj);
// // const myJSON = JSON.stringify(obj);
// // console.log(myJSON);

// // ASYNCHRONIOUS

// console.log(1);
// console.log(2);
// console.log(3);
// setTimeout( () => {
//     // alert("welcome")
// },3000)

// setInterval(() => {
//     console.log("correct");
// }, 6000)
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// const yab = setInterval(() => {
//     console.log("correct");
// }, 4000)
// clearInterval(yab)

// CALLBACK
// const order = (production, num) => {
// console.log(production, num);

// production()
// }

// let production = () => {
//     console.log(2);
//     console.log(898);
// }

// order(production, 789)

// PROMISE

// let mypromise = new Promise((resolve, reject) => {
//     resolve("Granted")
//     // reject("denied")
// })
// console.log(mypromise);


// let mypromised = new Promise((resolve, reject) => {
//     resolve("Granted")
//     // reject("denied")
// })
// mypromised.then((data) => {
//     console.log(data);
// }).catch((err) => console.log(err) )

// let myprom = new Promise((resolve, reject) => {

//   let random = Math.floor(Math.random() * 3)
//   console.log(random);

//   if(random === 2){
//     resolve("you are right")
//   }else{
//     reject("you are wrong")
//   }
// });

// myprom.then((data) => {
//     console.log(data);
// }).catch((err) => console.log(err) )

// ASYNC

// let example = async () => {
//     return "hello world"
// }
// console.log(example());

// let example = async () => {
//         return "hello world"
// }

// const result = async () => {
//     const res = await example()
//     console.log(res);
// }
// result()

// let url = "http://jsonplaceholder.typicode.com/posts";

// fetch(url)
// .then((data) => console.log(data.json()))
// .catch((err) => console.log(err));


// const result = async () => {
//     try {
//         const res = await fetch(url)
//         const final = res.json()
//         console.log(final);
//     } catch (error) {
//         console.log(error);
//     }
// }
// result()

// JS HTML DOM
// const handClick = () => {
//     document.getElementById("btn").innerHTML = "after"

//     console.log(handClick);
// }

// const hey = () => {
//     document.getElementsByClassName("hey")[2]. innerHTML = "welcomed"
    
//     console.log(hey);
// }


// const hey = () => {
//     const r = document.getElementsByClassName("hey")[0]
//     const p = r.style.color = "red"
    
//     console.log(hey);
// }
 
// const handClick = () => {
//     const ans = document.querySelectorAll("#gid")[1].innerHTML = 500
//     console.log(ans);
// }

// const handleClick = () => {
//     const ans = document.getElementById("img").src = "i.png"
//     console.log(ans);
// }

//  document.getElementById("btn").addEventListener("click", handleClick)



// const headingtag = document.createElement("p");
// const headingContent = document.createTextNode("hello world")
// const ans = headingtag.appendChild(headingContent)
// const element = document.getElementById("div1")


// element.appendChild(headingtag)

// console.log(headingtag);

// function greetings() {
//   var name = prompt("What is your name?");
//   var result = "Hey " + name;
//   console.log(result);
// }
// greetings()

// function sumNum(num1, num2) {
//     console.log(num1 + num2);
// }
// sumNum(20,50)

//  switch (10) {
//     case 5:
//     text = "weekend";
//     break;
//     case 6:
//     text = "weekend";
//     break;
//     case 0:
//     text = "weekend";
//     break;
//     default:
//     text = "weekday";

//  }
//  console.log(text);






















