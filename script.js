$(document).ready(function(){

var currentDay = moment().format("MMMM dddd Do");
console.log(currentDay)
$("#currentDay").text(currentDay)
var presentHour = moment().hours()
console.log(presentHour)





})