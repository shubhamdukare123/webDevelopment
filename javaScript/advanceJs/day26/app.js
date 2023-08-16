async function greet(){
    
    return "Hello!";
}

greet()
.then((result)=>{
    console.log(result);
    console.log("Promise was resolved");
})
.catch((err)=>{
    console.log("Promise was rejected" , err);
});
// let demo = async ()=>{

// }

function getNum(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
        let num = Math.floor(Math.random() * 10)+1;
        console.log(num);
        resolve();}, 1000);
    });
}

async function demo(){
    await getNum();
    await getNum();
    getNum();
}