// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(function () {

  // adds date to the header
  var todaysDate = dayjs();
  $("#currentDay").text(todaysDate.format('dddd, MMMM YYYY'));
  
  
  var currentHour = dayjs().hour();
  $(".time-block").each(function(index){
    console.log($(this))
    //access to the local storage key? if idon't split the id
    var blockHour = $(this).attr("id").split("-")[1]
    //check their id for storage to populate their text area (this.child at a specific index)
    var task = "task" + index;
    var activityBlock = localStorage.getItem(task);
    console.log(activityBlock);
    
    var blockText = $(this.children[1]);

    $(blockText).text(activityBlock);

    console.log(blockText);

    if(blockHour < currentHour){
      $(this).addClass("past")
    } 
    if(blockHour == currentHour){
      $(this).addClass("present")
    } 
    if(blockHour > currentHour){
      $(this).addClass("future")
    } 
// if currentHour is greater than a value, we'll add a class
  })

  // var buttons = document.getElementsByTagName("button");

  var buttons = $("button");

  $(buttons).each(function(index){
    $(this).click(function() {
      // console.log(this);
      var activity = $(this).prev().val();
      console.log(activity);
      task = "task" + index;
      console.log(task);
      localStorage.setItem(task, activity);
    })

    // console.log(localStorage.getItem("task1"));


    //local storage needs a unique key, 
    //same itteration thorugh each button
    //when they click it, what do we want to get? 
    //get this previous sibling's value
    
  })


  
  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  // var saveButton = $("#")
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});





// person.print()
// function runSubmit(event){
//   console.log(event)
//   console.log(event.target)

//   console.log("++++++++++++++++++++++++")
//   console.log(this)
// }


// var buttons = document.getElementsByTagName("button")
// for(let i=0; i< buttons.length; i++){
//   console.log(buttons[i])
//   buttons[i].addEventListener("click", runSubmit)
// }


// var container = document.getElementsByClassName("container-fluid")[0]
// console.log(container)

// container.addEventListener("click", runSubmit)