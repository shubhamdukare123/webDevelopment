let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let p = document.querySelector("p");
// // console.dir(btn);
// // // btn.onclick = function(){
// // //     console.log("button was clicked");
// // //     alert("You are clicking button!");
// // // }
// function sayHello(){
//     alert("Hello!");
// }

// // btn.onclick = sayHello;
// let btns = document.querySelectorAll("button");
// for(btn of btns){
//     // btn.onclick = sayHello;
//     // btn.onmouseenter = function(){
//     //     console.log("You entered on btn with mouse");
//    // btn.addEventListener("click", sayHello);

//     //btn.addEventListener("click", sayName );

//     btn.addEventListener("dblclick" ,function(){
//         console.log("You double clicked");
//     })
//     }

//     function sayHello(){
//         alert("Hello");
//     }
    
//     function sayName(){
//         alert("Shubham!");
//     }

//     let p = document.querySelector("p");
//     p.addEventListener("mouseenter",function(){
//         console.log("para was clicked");
//     });
// btn.addEventListener("click", changeColor);
// h1.addEventListener("click", changeColor);
// h2.addEventListener("click", changeColor);
// p.addEventListener("click", changeColor);

// function changeColor(){
//     this.style.color = "red";
// }
inp = document.querySelector("input");
inp.addEventListener("keyup", function(event){
    console.log(event.key);
    console.log(event.code);
    console.log("Key was released");

});