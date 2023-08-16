// function one(){
//     return 1;
// }

// function two(){
//     return one() + one();
// }


// function three(){
//     let ans = two() + one();
//     console.log(ans);
// }

// three();
let h1 = document.querySelector("h1");
function changeColor(color, delay ){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color = color;   
            console.log("Color change resolved");
            resolve("Changed");
        }, delay);
    
    })
}
changeColor("orange", 1000)
.then(()=>{
    return changeColor("white", 1000);
})
.then(()=>{
    return changeColor("green", 1000);
})

//  changeColor("orange", 1000, ()=>{
//     changeColor("white", 1000, ()=>{
//         changeColor("green", 1000);
//     } )
//  });

// function saveToDB(data, success, failure){
//     let internetSpeed = Math.floor(Math.random()* 10) + 1;
//     console.log(internetSpeed);
//     if(internetSpeed > 4){
//         success();
//     }else{
//         failure();
//     }
// }

// saveToDB("Shubham", ()=> {
//     console.log("Success : Your data was saved. ");
//     saveToDB("Hello", ()=>{
//         console.log("data 2 saved");
//     }, ()=>{
//         console.log("failure 2");
//     });
// }, ()=>{
//     console.log("Failure : Weak connection data not saved");
// });

// function saveToDB(data){

//     return new Promise((resolve, reject)=>{
//         let internetSpeed = Math.floor(Math.random()* 10) + 1;
//         if(internetSpeed>4){
//             resolve("Data Saved");
//         }else{
//             reject("Weak Connection");
//         }
//     });
// }

// saveToDB("Shubham").then((result)=>{
//     console.log("Data 1 saved");
//     console.log(result);
//     return saveToDB("Himanshu")  
// })
// .then((result)=>{
//     console.log("Data 2 saved");
//     console.log(result);
//     return saveToDB("Omkar");
// })
// .then((result)=>{
//     console.log("Data 3 saved");
//     console.log("result")
// })
// .catch((error)=>{
//     console.log("Promise was rejected");
//     console.log(error);
// });

