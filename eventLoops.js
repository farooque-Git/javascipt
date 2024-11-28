//eventloop execution is synchronous and asynchronous task in non-blocking manner, leverage that callStack
//callback,

//Basically eventloop is the key of non blocking code in javascript

console.log(farooque); //this is synchronous task

setTimeout(() => {
  console.log("Farooque after 1 sec");
}, 1000); // asynchronous task which is Callback
