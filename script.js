$(document).ready(function(){

var currentDay = moment().format("MMMM dddd Do");
console.log(currentDay)
$("#currentDay").text(currentDay)

$(".time-block").each(function(){
    var presentHour = moment().hours()
    var time = parseInt($(this).attr("id"))

    if (time < presentHour){
        $(this).addClass("past")
    } else if (time === presentHour){
        $(this).addClass("present")
    } else if (time > presentHour){
        $(this).addClass("future")
    }

})



$(".saveBtn").on("click", function(){
    var task = $(this).siblings(".description").val()
    console.log(task)
    var id = $(this).parent().attr("id");
    localStorage.setItem(id, task)
})


var nineTask = localStorage.getItem("9")
$("#9 .description").val(nineTask)
var tenTask = localStorage.getItem("10")
$("#10 .description").val(tenTask)




})