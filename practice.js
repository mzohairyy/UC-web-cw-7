let projects = ["Talabat", "Tap", "Cofe"];
console.log(projects);
projects.push("myFatoorah");
console.log(projects);
console.log(projects.length);
function addText(name){
    console.log("Startup name:" + name);

}
projects.forEach(addText);

let numbers =[1,3,5,7];
function myFunc(num) {
    console.log(num + " ");
}
numbers.forEach(myFunc);

//creating objects
let person ={
    name: "Mariam",
    major: "CS"
}
