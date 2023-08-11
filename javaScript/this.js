let student = {
    name : "Shubham",
    age : 20,
    math : 93,
    phy : 45,
    eng : 84,
    getAvg(){
        console.log(this)
        console.log(student);
        let avg = (this.math+this.phy+this.eng)/3;
        console.log(avg);
    }
}
 function getAvg(){
    console.log(this)
    console.log(student);
    let avg = (this.math+this.phy+this.eng)/3;
    console.log(avg);
}
try{
    console.log(a);
}catch {
    console.log("Variable doesn't exists");
}