// let jsonRes = '{"fact":"Owning a cat is actually proven to be beneficial for your health.","length":65}';
// let validRes = JSON.parse(jsonRes);

// let student = {
//     name: "Shubham",
//     CGPA: 8.16
// };

// let studentData = JSON.stringify(student);
// console.log(studentData);

let url = "https://catfact.ninja/fact";
// fetch(url)
// .then((response)=>{
//     console.log(response);
//     return response.json();
// })
// .then((data)=>{
//     console.log(data.fact);
//     return fetch(url)
// })
// .then((data)=>{
//     return data.json();
// })
// .then((data)=>{
//     console.log(data.fact);
// })
// .catch((err)=>{
//     console.log(err);
// })

// console.log("I am happy");

async function getFacts(){
    try{
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.fact);

    let res2 = await fetch(url);
    let data2 = await res2.json();
    console.log(data2.fact);

    }catch(e){
        console.log(e);
    }
    console.log("Exit");
}