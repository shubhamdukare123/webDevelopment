// const sum = (a,b) => {
//     console.log(a+b);
// }

const sum = (a,b) => a+b;
// const cube = n => {
//     console.log(n**3);
// }

const cube = n => n**n;
const power = (a,b) => {
    console.log(Math.pow(a,b));
}
 const hello = () => {
    console.log("Hello");
 }

 const mult = (a,b) => a*b;

 let student = {
    name : "Shubham",
    prop : this,
    getName : () => {
        console.log(this); //parent's scope -> window
        console.log(this.name);
    },
    getNameFunc :function () {
        console.log(this);  //object's scope -> student
        console.log(this.name);
    }, 

    getInfo1 : function() {
        setTimeout( () => {
            console.log(this); //student    
        }, 2000)
    },
    getInfo2 : function(){
        setTimeout( function() {
            console.log(this); //window
        }, 2000)
    },
 }