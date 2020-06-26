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
var cc9 = parseInt(document.querySelector("#nine").getAttribute("value"));
var cc10 = parseInt(document.querySelector("#ten").getAttribute("value"));
var cc11 = parseInt(document.querySelector("#eleven").getAttribute("value"));
var cc12 = parseInt(document.querySelector("#twelve").getAttribute("value"));
var cc1 = parseInt(document.querySelector("#one").getAttribute("value"));
var cc2 = parseInt(document.querySelector("#two").getAttribute("value"));
var cc3 = parseInt(document.querySelector("#three").getAttribute("value"));
var cc4 = parseInt(document.querySelector("#four").getAttribute("value"));
var cc5 = parseInt(document.querySelector("#five").getAttribute("value"));
// Change Cell Color based on time
if(currentHrs >= cc9) {
    var edt = "true";
    $("#nine").addClass("changeColor");
} else {
    var edt = "false"};

if(currentHrs >= cc10) {
    var edt = "true";
    $("#ten").addClass("changeColor");
} else {
    var edt = "false"};
        
if(currentHrs >= cc11) {
        var edt = "true";
        $("#eleven").addClass("changeColor");
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




