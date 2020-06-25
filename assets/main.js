// Call time of day
var d = new Date();

var currentHrs = d.getHours();
console.log(currentHrs)
// add Event listener to respond to time of day and change background color with if/else
var cellColor = document.querySelectorAll('.cell');

// cellColor.forEach(function(item) {
//     item.addEventListener("click", function(){
//       console.log("color");
//       $(this).addClass("changeColor");
//     })
// })

var CC = document.querySelector("#test");
var cc = parseInt(document.querySelector("#test").getAttribute("value"));
console.log(cc)
    
if(currentHrs >= cc) {
        console.log("yes");
        $("#test").addClass("changeColor");
    }

// cellColor.addEventListener('click', function(){
//     console.log("color");
//     $(this).addClass("changeColor");
// });

//make "edit" button open a text entry field in div
var editBtn = document.querySelector(".edit-btn");

//make save button appear with text entry box
