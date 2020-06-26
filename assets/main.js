// Call time of day
var d = new Date();

var currentHrs = 10;
// d.getHours();
console.log(currentHrs)
// add Event listener to respond to time of day and change background color with if/else
var cellColor = document.querySelectorAll('.cell');
var editBtn = document.querySelectorAll('.edit-btn');
var CC = document.querySelector(".cell");
var cc = parseInt(document.querySelector(".cell").getAttribute("value"));
console.log(cc)
var cc9 = parseInt(document.querySelector("#test").getAttribute("value"));
// Change Cell Color based on time
if(currentHrs >= cc) {
    var edt = "true";
    $(cellColor).addClass("changeColor");
} else {
    var edt = "false"};

//Make Cell Editable
var changeText = $(editBtn).on('click', textEdit);

function textEdit() {
    if(edt === "false") {
    $(cellColor).attr("contentEditable", "true");
    $(cellColor).click();
    };

};




