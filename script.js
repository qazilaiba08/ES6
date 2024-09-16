//synchronic programming
// console.log("one");
// console.log("two");
// console.log("three");//this is called synchronic program line by line code excuted

//ASYNCHRONIC programming

// console.log("start");
// setTimeout(() => {
//     console.log("Hello World");

// }, 5000);

// console.log("End"); This is called Asynchronic program


//CALLBACK FUNCTION
//THIS IS CALLED NESTED FUNCTIONS AK FUNCTION K ANDER DUSRA FUNCTION KO AS A ARGUMENT CALL KRNA
// function sum(a,b){
//     console.log(a+b);
// }

// function calcultor(a,b,sumCallBack ) {
//      sumCallBack(a,b);
   
// }
// calcultor(3,5,sum);



// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }
  
// function myCalculator(num1, num2) {
//     let sum = num1 + num2;
//     return sum;
//   }
  
// let result= myCalculator(5, 5, myDisplayer);
// myDisplayer(result);

// function sum(a,b){
//   console.log(a+b);
// }
// function sutraction(a,b){
// console.log(a-b);

// }
// function calcultor(a,b,sumCallBack , subCallBack) {
//    sumCallBack(a,b);
//    subCallBack(a,b);
// }
// calcultor(3,5,sum);
// calcultor(3,5,sutraction);//this is called hell call back

// let age = 19;

// if(age >= 18 ){
//   if(age >= 60){
//     console.log("senior");
//   }else{
//     console.log("middle");
//   }
// }else{
//   console.log("under age");
// };


//CALLBACK HELL FUNCTIONS HOW TO RUN ONE BY ONE CODE EXCUTED
//TIME DELAY 
// function getData(dataID, nextData) {
//   setTimeout(() => {
//   console.log("data",dataID);

//     if(nextData){
//     nextData();
//   };
// }, 2000);
// }

// getData(1, () => {
//    getData(2,() => {
//     console.log("Loading for data 3");
//      getData(3,() => {

//      });

//    });
   
// }, );

// PROMISSIES AND CALLBACK
//a promise is for reexcute   complation of a task 

// let promise = new Promise((resolve , reject) => {
//   console.log("I am a promise");
//   reject("Sum ERRor")
// })

// CALL BACK KO RE SOLVE KRN K LIY PROMISE AYA HA
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

let myPromise = new Promise(function(myResolve, myReject) {
  let x = 0;

// The producing code (this may take some time)

  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);

// API 3RD PARTY SA DATA LA KR AATI HA API IK LINK HOTA HA JO APKO DATA LA KR DATA HA 