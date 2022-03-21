// Steps:
// Set the variables for hour IDs
// initical variable for the hour, user's input and the span
//Get the time with moment.js and display on the screen.
//Create a function to change the background color depending on the current time
// Function to save the input in the local storage
// Function to replace the hour variables and transform into strings


// Main Variables with Jquery

var nineAm = $("#9am");
var tenAm = $("#10am");
var elevenAm = $("#11am");
var twelvePm = $("#12pm");
var onePm = $("#13pm");
var twoPm = $("#14pm");
var threePm = $("#15pm");
var fourPm = $("16pm");
var fivePm = $("#17pm");
var sixPm = $("#18pm");
var sevenPm = $("#19pm");

var hour = moment().hours();
var userInput;
var hourSpan;

//Adding time with moment.js

var currentDate = moment().format('dddd') + " " + moment().format("YYYY MMMM Do");
var currentHour = moment().format('h:mmm:ss a');


// Time: date and hour with setInterval
var time = setInterval(() => {
    var currentTime = moment();
    $('#currentDay').html(currentTime.format('YYYY MMMM Do') + ' ' +  
    currentTime.format('dddd').toUpperCase());

   $('#currentDay').html(currentDate + " " + currentTime.format('hh:mm:ss a'));
}, 100);


var InitialPage = function(){
    var init9 = JSON.parse(localStorage.getItem("09:00 am"));
    nineAm.val(init9);

    var init10 = JSON.parse(localStorage.getItem("10:00 am"))
    tenAm.val(init10);

    var init11 = JSON.parse(localStorage.getItem("11:00 am"))
    elevenAm.val(init11);

    var init12 = JSON.parse(localStorage.getItem("12:00 pm"))
    twelvePm.val(init12);

    var init1 = JSON.parse(localStorage.getItem("01:00 pm"))
    onePm.val(init1);

    var init2 = JSON.parse(localStorage.getItem("02:00 pm"))
    twoPm.val(init2);

    var init3 = JSON.parse(localStorage.getItem("03:00 pm"))
    threePm.val(init3);

    var init4 = JSON.parse(localStorage.getItem("04:00 pm"))
    fourPm.val(init4);

    var init5 = JSON.parse(localStorage.getItem("05:00 pm"))
    fivePm.val(init5);

    var init6 = JSON.parse(localStorage.getItem("06:00 pm"))
    sixPm.val(init6);

    var init7 = JSON.parse(localStorage.getItem("07:00 pm"))
    sevenPm.val(init7);
  
}


//Change the background color
var backgroundColor = function(){
    $(".form-control").each(function (){
        var timeTest = parseInt($(this).attr("id"));
        hour = parseInt(hour);
        
        if (hour > timeTest) {
            $(this).addClass("past");  //silver
        } else if(hour < timeTest) {
            $(this).addClass("future");   //green
        } else{
            $(this).addClass("present");  //red
        }

    });
}


//Saving to local storage
$(document).ready(function(){
    InitialPage()
    backgroundColor()
    //Button save to local storage
    var saveLocalStorage = function(){
        userInput = $(this).siblings(".form-control").val().trim();
        hourSpan = $(this).siblings(".input-group-prepend").text().trim();
        localStorage.setItem(hourSpan, JSON.stringify(userInput));
    };

    $(".saveBtn").on("click", saveLocalStorage);

});




