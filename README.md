






# Coding for Kids - Learn To Create Simple Web Applications ToyList Explained


#Intro and Learning Style
Getting into computer programming and making apps can be a slow start. I have come up with a unique learning style that will allow students to understand big picture ideas, break them apart into small pieces, and extract concepts. Working on coding fundamentals is crucial to starting to think like a developer to solve problems. These tutorials are designed to assist the beginner programmer as well as people who are curious about taking their first step. Fundamentals are not required for these tutorials but will improve your ability to apply these concepts in the future! 
There are so many technologies being used to create our modern world. Understanding how applications are made can be difficult due to the growing number of ways that people have created them previously. 
This guide will allow you to get a basic understanding of web applications and how they work! These days there are many different types of apps built out of different technology stacks (list of all the technology services used to build and run one single application). In order to understand modern applications. The best starting point is learning about basic websites.
Since the beginning of the internet, standard websites and web applications have been made with HTML, CSS, and JavaScript. If we think about three the languages in a metaphor of a human, we could say that the 
HTML is like the body, CSS is like the clothing , JS is like the internal system that gives the body life.
Each of these languages has its own syntax (rules for how language is written similar to grammar)
In order to embark on learning how to write in each of these languages the best way is to jump right in and start doing!
In this guide we will interact with applications as we learn.The practice of writing and interacting with these apps will help solidify these concepts much faster than just reading about them! This is the way of the developer!
We are going to take a look at a very simple web page and then interact with it!

#HTML
When a user arrives at this page, we see the title "Favorite Toys", an input box (where users can type in text), and a submit button all presented on a colorful background. All of the elements that we see here are createdI HTML. The elements that are used on this page are 
h1 heading element for displaying text
div - division element. Divs are used to organize elements and apply styles
input - input element. Allows users to type in characters
ul - unordered List element. Used to store bulletin points
Li - list item element. Creates a bullet point
Button - button element. Allows users to click to activate something in this case submit the text input
script - script element  link to external javascript file or code can be written inside of the element itself
HTML CODE ^^
When we look at the code it appears there are more elements than we may have expected! 
The lines of code between 1 and 10 are standard for setting up an HTML document. There is some moderate customization in regards to file paths and any additional elements you may want to add here. The <head> element is where developers store metadata. This is information that needs to be attached but not visually seen on the page and can be thought of as the options or settings of the document.
Inside the <body> element (lines 11 - 19) is where we write our html code to display elements on the page! Here you can see our h1, div, input, button, ul, and script tags. Users are expected to
type in their favorite toy
click the submit button
see the toy rendered on the page!
If you still have questions about the way in which this HTML code works that's okay! 
Learning the ins-and-outs of HTML syntax takes time but today we can establish understandings of concepts!
Javascript
The ability for the computer to sense the user’s click, capture the user's text input, and render it onto the page comes from JavaScript! One of the most common ways for a user to interact with a page is through clicking. We can use something called in the add event listener to listen for user clicks on HTML elements in the document. This is what we're doing on line 14 with the submit button.
Our javascript file knows how to access the HTML through the keyword document. This keyword document references the HTML page itself. 
The reason why our javascript knows about the HTML is because we are linking the javascript into the HTML file on line 18 of index.html





#CSS files are used to apply the stylings to a website! 
All the colors, fonts, and alignment of content are controlled by the CSS. Animations, responsive design, and customizing default HTML elements are all possibilities as well.  In this exercise we are using CSS to set the background color, font style, and sizing of the input and button. 
This is what CSS syntax looks like 


In CSS you can style by the tag name, the class name, and the ID of an HTML element
Once again don't worry if you don't understand all of the syntax here we're just getting an overview so you can see how some general styles are applied to the elements we have created on our HTML page.
The HTML knows about the CSS attributes because of the link element on line 8 of the HTML document. This is where we inform the HTML of the location of the CSS file.

In conclusion we have an application that uses HTML CSS and JavaScript to accept user text input and dynamically generate new HTML based on the user's input. Concepts that we covered are
HTML
- Document setup
- Elements: p, h1, div, ul, li, button, script
- Linking javascript and css files
Javascript
- saving variables
- using getElementByID
- listen for click events
- createElement
- append
CSS
- IDs
- syntax
- background-color attribute









#Resources
If this is your first time coding on your computer, there are a few things you will need to download. As you grow as a developer installing, learning, and working with new application interfaces (buttons and menus) will become second nature!! We use the power of Google to find each technology's website, documentation, and troubleshooting.
1. Google Chrome Web browser
2. Visual Studio Code is an IDE (Integrated Development Environment). This is software for building applications that combine common developer tools into a single graphical user interface. This is basically a fancy text editor to write code in. There are many tools you can install to enhance the development experience.
3. Basic File Managing Skills - this consists of knowing how to create new files with extensions like .txt .html .css .js, create new folders, copy and paste folders and files.
Now you are ready to code!!









