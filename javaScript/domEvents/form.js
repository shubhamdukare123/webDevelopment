let form = document.querySelector("form");
form.addEventListener("submit", function(event){
    // let user = this.elements[0];
    // let pass = form.elements[1];
    
    // console.log(` username is ${user.value}`);
    // console.log(`password is ${pass.value}`);

    // console.dir(form);
    event.preventDefault();

    alert("Form was submitted");
});
let user = document.querySelector("#user");
user.addEventListener("change",function(){
    console.log("input changed");
    console.log(`new value is ${this.value}`);
})
user.addEventListener("input",function(){
    console.log("writing");
    console.log(`pressed key : ${this.value}`);
})