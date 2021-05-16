// here we create  our variables!
// each variable contains an html element
let submitBtn = document.getElementById("submitToyBtn");
let toyInput = document.getElementById("toyInput");
let toyList = document.getElementById("toyList");

//this is how we listen for users clicking!
submitBtn.addEventListener("click", function () {
  // when a user clicks we run this code!

  // here we are capturing the value of the toyInput
  let userToyInput = toyInput.value;

  // here we are using a built in method (a tool made available to use automatically)
  // It is called createElement. By passing a new element name in quotations
  // we can use JavaScript to create a new element and save it to a variable
  // Here we are creating a listItem to put inside of our UL (unorderedList) in the HTML

  let newItem = document.createElement("li");
  // Now we set the value of the list item to the captured value from the text input
  // this can be done be accessing the elements innnerHTML
  newItem.innerHTML = userToyInput;
  //Finally we append the the newItem to the toyList (a variable representing our UL)
  toyList.append(newItem);
  // append is another built in method. It allows us to add a new element to the end of the element we
  // are appending too. In this case the recieving element is the UL.
});

// At this point the demonstration, you may still have questions about JavaScript syntax.
// It is important to establish some conceptual understanding of how these applications work.
// Once that is the case focusing on learning the specifics of JavaScript syntax will be beneficial!
// Thanks for reading!!!
