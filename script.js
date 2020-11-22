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

//stored tasks for 9am-10am
var nineTask = localStorage.getItem("9")
$("#9 .description").val(nineTask)

//stored tasks for 10am-11am
var tenTask = localStorage.getItem("10")
$("#10 .description").val(tenTask)

//stored tasks for 11am-12pm
var elevenTask = localStorage.getItem("11")
$("#11 .description").val(elevenTask)

//stored tasks for 12pm-1pm
var twelveTask = localStorage.getItem("12")
$("#12 .description").val(twelveTask)

//stored tasks for 1pm-2pm
var oneTask = localStorage.getItem("1")
$("#1 .description").val(oneTask)

//stored tasks for 2pm-3pm
var twoTask = localStorage.getItem("2")
$("#2 .description").val(twoTask)

// stored tasks for 3pm-4pm
var threeTask = localStorage.getItem("3")
$("#13 .description").val(threeTask)

// stored tasks for 4pm-5pm
var fourTask = localStorage.getItem("4")
$("#4 .description").val(fourTask)

//stored tasks for 5pm-6pm
var fiveTask = localStorage.getItem("5")
$("#5 .description").val(fiveTask);


})

