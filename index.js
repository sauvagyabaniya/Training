// console.log("Here is js");
// alert("Click on ok to run");
// // Variables        (var)
// var x=60;
// console.log(x);
// var x=600;
// console.log(x);


// // let
// let y=4555;
// console.log(y);
// // we cannot write let to declare same value but if we write y nad remove let it wont show error
// y=4555;
// console.log(y);

// // const
// const result =90;
// console.log(result);
// // we cannot declare same variable
// // after removing const we cannot run code 
// // can only declare one time
// // const result =90;
// // console.log(result);
// // result =90;
// // console.log(result);

// // DATA TYPES
// // /string
// const output="Rainbow";
// console.log(output);
// console.log(typeof output);
// // type of is used to see the data type

// // number
// // const aa="65656";
// // yo halyo vani string dekhauxa"""
// const aa=65656;
// // const paxi j halda ne hunxa
// console.log(aa);
// console.log(typeof aa);

// // float
// const x=65.565;
// console.log(x);
// console.log(typeof x);


// // undefined
// let g;
// console.log(g);
// console.log(typeof g);
// // const wont define undefined 

// null
// let f = null;
// console.log(f);
// console.log(typeof f);

// // Boolean
// const isTrue = true;
// console.log(isTrue);
// console.log(typeof isTrue);

// // BigInt
// const i = true;
// console.log(i);
// console.log(typeof i);

// // Symbol
// const s= Symbol("Rainbow s my good boy");
// console.log(s);
// console.log(typeof s);



// let x= 2.33;
// console.log(x);
// console.log(typeof x);


// // type Conversion very important
// // this is string coz we have put number inside ""
// // const result = "123";
// // const output = Number(result);

// // const result = "1.23";
// // console.log(result);
// // const output = psrseInt( output);
// // console.log(typeof result);

// // const result = 1.23;
// // const output = String(result);
// // console.log(output);
// // console.log(typeof result);

// // or converting no into string
// const result = 23;
// const output = result.toString();
// console.log(output);
// console.log(typeof output);


// // const isMarried = false;
// // const ans=String(isMarried);
// // console.log(ans);
// // console.log(typeof ans);


// // Array
// const arr=[1,2,3,4,5];
// console.log(arr);
// console.log(typeof arr);

// // Function
// function add(num1,num2){
//     return num1+num2;
// }
// console.log(add(1,2));
// console.log(typeof add);

// // Date
//  const today = new Date();
//  console.log(today);
//  console.log(typeof today);
 
//  // Error
//  const error = new Error();
//  console.log(error);
//  console.log(typeof error);
 
//  // RegExp
//  const reg = new RegExp();
//  console.log(reg);
//  console.log(typeof reg);
 
//  // Map
//  const map = new Map();
//  console.log(map);
//  console.log(typeof map);


//  // Object. TYPEs
//  const obj={
//      name: "Rainbow",
//      age: 23,
//      isMarried: false,
//      occupation: "Security",
//  };
//   console.log(obj);
//   console.log(typeof obj);

// // to ch3ck typew of array
// const array =["1", "2", "3", "4"];
//     console.log(arr);
//     console.log(typeof arr);

    // date ko obj type obj 
    // const data =new Date();
    //     console.log(date);
    //     console.log(typeof date);

// 1+"1"=11 in js coz last ko 1 string xa
// const result= 1+"1";
// console.log(result);
// console.log(typeof result);
// // output will be 11 coz + lai add gardaina combine gardinxa


// const result= 8-"4";
// console.log(result);
// console.log(typeof result);
// esma chai minus nai gardinxa 


// // to remove unwanted space while loging email
// // String method
// const result= "RAinbow is specialoo";

// // length
// console.log(result.length);

// // CharAt
// console.log(result.charAt(2));


// // indexOf
// console.log(result.indexOf("o"));

// // LastindexOf
// console.log(result.indexOf("o"));

// // LowerCase
// console.log(result.toLowerCase());
// // UpperCase
// console.log(result.toUpperCase());
// // Replace
// console.log(result.replace("RAinbow", "Rainbow"));

// // Includes/
// console.log(result.includes("specialoo"));
// console.log(result.includes("specioo"));
// // to see if the words are true of false

// // slice`
// console.log(result.slice(2 , 4));
// // to see letter 

// // concat
// console.log(result.concat("Hello Ruby!"));

// let output="            Hello Team";
// console.log(output.trim());

// //split the words
// console.log(result.split(" "));


// // more about concat // concatination
// let x="Hello";
// let y="Rainbwfbaejl";
// let z="Raaejl";
// // x and y merge hunxa together
// console.log(x + y);
// console.log(x + " " + y + z);
// console.log(x + " " + y + " " + z);
// // to give the space between x and y


// // // to give the space between x and y
// const a= 23;
// const b= 33;
// const result = a+b;
// console.log("The sun is shinning:" + result);
// console.log(`The sun is shinning: ${result}`);

//Assignment operator
// let x=57;
// x=x+10;
// console.log(x)

// let y=57;
// // y=y+60;
// y+=60;
// console.log(y)

// comparison operator == and ===[very very important]
// let a = 57;
// let b = 56;
// let c = 56;
// console.log(a == c);
// console.log(a === c);
// console.log(a != b);
// console.log(a != c);
// console.log(a > b);
// console.log(a < b);
// console.log(a <= b);

// Logical operator{ very vey very important}
// Conditional operator{ very vey very important}


// conditional ternary operator
// let ageGroup = 46;
// console.log(ageGroup <= 34 ? "You can vote" : "You can't vote");


// // unary operator
// let a = "57";
// let b = +a            //positive
// console.log(a);
// console.log(typeof a );

// let c = 7;
// let d = +c           //positive
// console.log(c);
// console.log(typeof c );


// const obj = {
//     name: "Rainbow",
//     age: 23,
// };

// delete Object.age;
// console.log(obj)


// let email = "sauvagyabaniya@gmail.com"
// let password="999999"
// // pair of {} is known as block
// if (email === "sauvagyabaniya@gmail.com" && password === "999999"){
//     console.log("Login successful!");
// }else{
//     console.log("Login unsuccessful!!");
// }

// // Checking SEE result
// let grade= 50;
// if (grade >= 90){
//     console.log("Grade : A+");
// }
// else if (grade >=80){
//     console.log("Grade : A");
// }else if (grade >= 70){
//     console.log("Grade : B+");
// }
// else if (grade >= 60){
//         console.log("Grade : B");
// }else if (grade >= 50){
//     console.log("Grade : C");
// }else if (grade >= 40){
//     console.log("Grade : D");

// }else{
//     console.log("Grade : Failed");
// }




// // weather
// let weather = "rainy";
// if (weather === "sunny"){
//     console.log("Wear sunglasses Today is Sunny!!");
// }else if (weather === "winter"){
//     console.log("Wear warm clothes Today is Winter!!");
// }else if( weather === "clouds"){
//     console.log("Wear raincoat Today is Clouds!!!!");
// }else if( weather === "rainy"){
//     console.log("Take umbrella Today is Rainy!!!");
// }else{
//     console.log("Invalid weather!!!");
// }



// organizing code not repeating  by using switch control statements (To make code short and fast)
// //      switch
// let role = "super admin";
// switch (role) {     //key ko thau ma role halne ho value assign gana
//     case "buyer":
//             console.log(" YOu can only buy products!!");   
//         break;

//     case "seller":
//             console.log(" YOu can sell your products!!");
//         break;

//     case "admin":
//             console.log(" YOu can add your products!!");
//             break;

//     case "super admin":
//             console.log(" YOu can access everything!!");
//         break;

//     default:
//         break;
// }


// // to check whoch day is today
// let date = new Date().getDate();
// console.log(date);      //to check date


// switch (date) {     //key ko thau ma true halne ho value assign gana
//     case 0:
//             console.log(" TOday is Sunday!");   
//         break;

//     case 1:
//             console.log(" TOday is Monday !");
//         break;

//     case 2:
//             console.log(" TOday is Tuesday !");
//             break;

//     case 3:
//             console.log(" TOday is Wednesday !");
//         break;

//     case 4:
//             console.log(" TOday is Thursday!! ");
//         break;

//     case 5:
//             console.log(" TOday is Friday!");
//         break;

//     case 6:
//             console.log(" TOday is Saturday!");
//         break;

//     default:
//         break;
// }

// git status``
// git branch``
// git branch branchname
// git checkout branch
// git branch``
//----------------------------------------------very very imp------------------------------------------------
// status
let status= 200;

switch (status) {
    case 201:
        console.log("Created");
        break;

    case 400:
        console.log("Bad Request");
        break;

    case 401:
        console.log("Unauthorized");
        break;

    case 403:
        console.log("Forbidden");
        break;

    case 500:
        console.log("Internal Server Error");
        break;

    case 200:
        console.log("OK");
        break;

    default:
        console.log("Invalid Server Error");
        break;
}





