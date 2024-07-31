const ham = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

console.log("======");
console.log(ham);
console.log("====");

// Events - click prompt validation 
ham.addEventListener('click', function(){
    ham.classList.toggle('active');
    navMenu.classList.toggle('active');
})

document.querySelectorAll('.nav-items').forEach(n =>{
    n.addEventListener('click', function(){
        ham.classList.remove('active');
        navMenu.classList.remove('active');
    })
})

document.getElementById('contact-form').addEventListener('submit', function(event){
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    // alert("Thank You "+ name);
    this.reset();
})

/*

// Typescript, React, Angular, Vue
// Datatypes - num, str, bool, float, array, objects, null / undefined 
 

!number  -> var num = 34;
!float   -> var num = 34.9;
!string ->  var str = "Hello World"
!arrays ->  var arr = [12,34,56]
!object -> var obj = {name: "AY" , age: 23, Married: false}
!boolean -> var bool = true
!null / undefined -> var result

*/

/* 
 three types of functions
 1. Function with zero parameter
 2. Function with parameter 
 3. Function with return type

 function function_name(parameter){
 
 }

*/

var a = 23;
var b = 34;

function add(a,b){
    return a+b;
}
console.log(add(12,40));
const result = add(34, 20);
console.log(result);



// Two types of targeting methods in js
// 1. with using event listener
/*
document.getElementById('contact-form').addEventListener('submit', function(event){
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    alert("Thank You "+ name);
    this.reset();
})
*/

// 2.Onclick in inline 
// to omit the addeventlistener in js so we can give events in HTML element like onclick, onscroll etc.....
function toggleText(){
    var target = document.getElementById('project2');
    target.style.display = "none";
}