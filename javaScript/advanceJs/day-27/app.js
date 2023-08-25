let url = "http://universities.hipolabs.com/search?name"; 
let btn = document.querySelector("button");


async function getCollages(country){
    try{
       let res = await axios.get(url+country);
       console.log(res);
    }catch(e){
        console.log(e);
    }
}
btn.addEventListener("click", async()=>{
    let country = document.querySelector("input").value;
    console.log(country)
    console.log("btn was clicked!");
    getCollages(country);
});








// let btn = document.querySelector("button");
// // let p = document.querySelector("p");
// let img = document.querySelector("img");
// // let url = "https:/catfact.ninja/fact";
//  let url = "https://dog.ceo/api/breeds/image/random";
// async function getPictures(){
//     try{
//     let res = await axios.get(url);
//     console.log(res.data.message);
//     // console.log(res.data.fact);
//     // p.innerText = res.data.fact;
//     img.src =  res.data.message;
//     }catch(e){
//         console.log(e);
//     }
// }
// addEventListener("click", getPictures);

// const url = "https://icanhazdadjoke.com/";
// async function getJokes(){
//     try{
//         let config = {headers: {Accept: "application/json"}};
//         let res = await axios.get(url, config);
//         console.log(res.data);
//     }catch(e){
//         console.log(e); 
//     }
// }