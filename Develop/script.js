// Main Variables with Jquery

var nineAm = $("#9am");
var tenAm = $("#10am");
var elevenAm = $("#11am");
var twelvePm = $("#12pm");
var onePm = $("#01pm");
var twoPm = $("#02pm");
var threePm = $("#03pm");
var fourPm = $("04pm");
var fivePm = $("#05pm");
var sixPm = $("#06pm");
var sevenPm = $("#07pm");

//Adding time with moment.js

var currentDate = moment().format('dddd') + " " + moment().format("YYYY MMMM Do");
var currentHour = moment().format('h:mmm:ss a');


// Time: date and hour with setinterval

var time = setInterval(() => {
    var currentTime = moment();
    $('#currentDay').html(currentTime.format('YYYY MMMM Do') + ' ' +  
    currentTime.format('dddd').toUpperCase());

   $('#currentDay').html(currentDate + " " + currentTime.format('hh:mm:ss a'));
}, 100);
