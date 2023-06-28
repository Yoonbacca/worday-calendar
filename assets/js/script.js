// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // Issue 1: Display current date at the top of the page
  const today = dayjs().format('MMM D, YYYY');
  const currentHour = Number(dayjs().format('H'));
  console.log(currentHour);
  $('#currentDay').text("Current Day: " + today);
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  // For loop to update the color coding of each time block
  for (var i = 9; i < 18; i++) {
    let hour = "#hour-" + i.toString();
    console.log(hour);
    console.log(i);
    if (i === currentHour) {
      $(hour).addClass('present').removeClass('past').removeClass('future');
    } else if (i < currentHour) {
      $(hour).addClass('past').removeClass('present').removeClass('future');
    } else if (i > currentHour) {
      $(hour).addClass('future').removeClass('present').removeClass('past');
    }
  }
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
