
//put the names and ages in the variabel....
var name = prompt("PLEASE ENTER YOUR NAME");
var ageCheck = prompt("please enter your age AGE");


// .....if He is smaller......


while (ageCheck < 18 || isNaN(ageCheck) ) {
   alert("you can not continue  " + name + ".");
   var name = prompt("PLESE ENTER YOUR name..!");
   var ageCheck = prompt("please enter your age");
};
// .....if bigger
if (ageCheck > 18) {

   document.getElementById('fo').innerHTML = "You are welcome to visit our site WelcOoOoome....!" + " " + name + ".";
};
//---calculater
function plus1(){
    "use strict"
    var input1 = document.getElementById('input1').value;
    var input2 = document.getElementById('input2').value;
    var plus1 = +input1 + +input2;
    //--the result appers alert
    alert(plus1);
 
 };
 function minos1(){
    "use strict"
    var input1 = document.getElementById('input1').value;
    var input2 = document.getElementById('input2').value;
    var minos1 = input1 - input2;
    alert(minos1);
 
 };
 function gånger1(){
    "use strict"
    var input1 = document.getElementById('input1').value;
    var input2 = document.getElementById('input2').value;
    var gånger1 = input1 * input2;
    alert(gånger1);
 
 };
 function dela1(){
    "use strict"
    var input1 = document.getElementById('input1').value;
    var input2 = document.getElementById('input2').value;
    var dela1 = input1 / input2;
    alert(dela1);
 
 }
//make empty array

var shoppinglist = [];

//kopplar html to js
var form =document.getElementById('shopping-form');


//submit funtion listener
form-addEventListener('submit',function (w){


    w.preventDefault();

    //koppla input till js
    var input =document.getElementById('input-form').value;


    //lägg till i array 
    shoppinglist.push(input);
    //visa array i html/hemsida
    document.getElementById('list').innerHTML=shoppinglist;

});
