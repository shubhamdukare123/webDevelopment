function print1to5(){
    for(let i=1; i<=5; i++){
        console.log(i);
    }
}
function dice(){
   let num = Math.floor(Math.random() * 6) + 1
   console.log(num);
}
function printName(name, age){
    console.log(name);
    console.log(age);
    return age;
}

function printTable(n){
    for(let i =n; i<=n*10 ; i+=n){
        console.log(i);
    }
}
printTable(15);
 let age = printName("Shubham", 20);
console.log(`age is : ${age}`);

dice();
print1to5();

function sumOfAll(n){
    let sum = 0;
    for(let i=1 ; i<=n ; i++){
        sum += i;
    }
    return sum;

}
let sum = sumOfAll(50);

console.log(`sum is : ${sum}`);
{
    let a = 0;
}

const sumfun = function(num1, num2) {
    return num1 + num2 ;
}
console.log(sumfun);