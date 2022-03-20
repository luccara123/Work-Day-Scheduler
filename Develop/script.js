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

var currentDate = moment().format('dddd') + " " + moment().format("DO MMM YYYY");
var currentHour = moment().format('h:mmm:ss a');
