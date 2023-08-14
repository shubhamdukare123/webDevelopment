let btn = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    ul.appendChild(item);
    item.innerText = input.value;
    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);
    input.value = "";
});

// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns){
// delBtn.addEventListener("click", function(){
//     let par = this.parentElement;
//     par.remove();
// });
// }
ul.addEventListener("click", function(event){
    console.dir(event.target.nodeName);
    if(event.target.nodeName == "BUTTON"){
        let listItem  = event.target.parentElement;
        listItem.remove();
    }
    console.log("button clicked");
});

