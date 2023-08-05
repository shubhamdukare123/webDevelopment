let max = prompt("Enter Maximum Number");
let random = Math.floor(Math.random() *max) + 1;
let guess = 0;
while(random != guess){
    if(guess == "quit"){
        break;
    }
 guess = prompt("Guess random Number");
}