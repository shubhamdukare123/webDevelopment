
let arr = [10, 20, 30,40];

arr.forEach(function (el){
    console.log(el);
});
// let print = function (el){
//     console.log(el);
// }
 
// arr.forEach(print);

let arr1 = [
    {
        name : "Shubham",
        marks : 8.16
    },
    {
        name : "Himanshu",
        marks : 8.27
    }, 
    {
        name : "Rohit",
        marks : 6.50
    } 
]
arr1.forEach((friend) => {
    console.log(friend.marks);
});

let cgpa = arr1.map((el) =>{
    return el.marks;
});

let newArr = [1,2,3,4];
newArr.filter((el) => ((el%2 == 0)));

function sum(a,b=3){
    console.log(a);
    console.log(b);
}
sum(2);