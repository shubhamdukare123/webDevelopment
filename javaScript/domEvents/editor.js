let input = document.querySelector("input");
let para = document.querySelector("p");
input.addEventListener("input",function(){
    console.log(input.value);
    para.innerText = input.value;
});