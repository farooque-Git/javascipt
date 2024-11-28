// this keyword is work differnet in strict mode and non-strict mode and also in global or inside the function


this() //  in browser it will show window which is global 
console.log(this);


function regularfunc(){
    console.log(this) // in this which is also show window as GLOBAL if we given a variable name then it act accordindgly
}
regularfunc()

//inside the object it work differnt

const person = {
    name: 'Farooque',
    greet: function() {
      console.log(this.name); // Logs 'Farooque'
    }
  };
  person.greet();

// in arrow function it work differnet so  basically this keyword is work differnet
const person2 = {
    name: 'Ali',
    greet: function() {
      const arrowFunc = () => {
        console.log(this.name); // Inherited `this` from greet(), so logs 'Ali'
      };
      arrowFunc();
    }
  };
  person.greet();


//   CALL, BIND and APPLY

//CALL
function greet() {
    console.log(`Hello, ${this.name}`);
  }
  const person3 = { name: 'MOhammad' };
  greet.call(person); // Logs 'Hello, MOhammad'

  
//Bind
const boundGreet = greet.bind(person);
boundGreet(); // Logs 'Hello, Farooque'


//APPLY
greet.apply(person); // Logs 'Hello, Farooque'
