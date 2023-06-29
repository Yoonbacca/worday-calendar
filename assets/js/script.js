// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering
$(function () {
  // Declare two constant variables, today and currentHour. Whole function scope
  const today = dayjs().format('MMM D, YYYY');
  const currentHour = Number(dayjs().format('H'));

  // Applies current date to top of page
  $('#currentDay').text(today);

  // Add click listener to all button elements aria label 'save'. 
  $('button[aria-label="save"]').on( "click", function() {
    // Find the <textarea> element using the 'this' selector and the 'siblings' method.
    let textArea = $(this).siblings('textarea');

    // Get the user input from the text area
    let userInput = JSON.stringify(textArea.val());

    // The 'closest' method traverses up the DOM tree, then the 'attr' method retrieves the id of the parent
    let timeBlockId = textArea.closest('.time-block').attr('id');

    // Save the user input in local storage
    localStorage.setItem(timeBlockId, userInput);
  } );

  // Run through each possible hour id in each time block
  for (var i = 9; i < 18; i++) {
    // Declare a string to represent hour id (e.g. '#hour-10')
    let hour = "#hour-" + i.toString();

    // Declare a variable to store parsed text retrieved from local storage
    // Substring used to remove the hashtag
    let savedText = JSON.parse(localStorage.getItem(hour.substring(1)));

    // If/else condition to assign appropriate color classes depending on the hour
    if (i === currentHour) {
      $(hour).addClass('present').removeClass('past').removeClass('future');
    } else if (i < currentHour) {
      $(hour).addClass('past').removeClass('present').removeClass('future');
    } else if (i > currentHour) {
      $(hour).addClass('future').removeClass('present').removeClass('past');
    }

    $(hour).children("textarea").text(savedText);
  }
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
