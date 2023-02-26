// All code that interacts with the DOM in a call to jQuery is wrapped to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(function () {
  // adds date to the header
  var todaysDate = dayjs();
  $("#currentDay").text(todaysDate.format('dddd, MMMM YYYY'));
  
  // determines if a time block is in the past, present, or future and assigns a class
  // to change the background color to alert the user
  // also populates the text area from local storage with the content the user enters
  // and saves
  var currentHour = dayjs().hour();
  $(".time-block").each(function(index){
    console.log($(this))
    var blockHour = $(this).attr("id").split("-")[1]
    var task = "task" + index;

    //this block populates the text area with the content the user enters
    var activityBlock = localStorage.getItem(task);
    console.log(activityBlock);
    var blockText = $(this.children[1]);
    $(blockText).text(activityBlock);
    console.log(blockText);
    // adds class depending if the time block is in past, present, or future
    if(blockHour < currentHour){
      $(this).addClass("past")
    } 
    if(blockHour == currentHour){
      $(this).addClass("present")
    } 
    if(blockHour > currentHour){
      $(this).addClass("future")
    } 
  })

  // adds functionality to save button--on click the text content in the text area is
  // is saved to local storage
  var buttons = $("button");
  $(buttons).each(function(index){
    $(this).click(function() {
      var activity = $(this).prev().val();
      console.log(activity);
      task = "task" + index;
      console.log(task);
      localStorage.setItem(task, activity);
      setTimeout
    })
  })
});
