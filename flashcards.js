const navigationLinks = [
    {text: 'HTML', href: '#'},
    {text: 'CSS', href: '#'} ,
    {text: 'JavaScript', href: '#'} 

    ]



const allCardsData = [

{    
    Category: 'JavaScript',
    questionsBank: [
    { question: "What is JavaScript?", answer: "JavaScript is a programming language used for web development, enabling interactivity and dynamic content on web pages." },
    { question: "What is the difference between '==' and '===' in JavaScript?", answer: "'==' checks for value equality with type coercion, while '===' checks for both value and type equality." },
    { question: "What is a variable in JavaScript?", answer: "A variable is a container for storing data values, declared using 'var', 'let', or 'const'." },
    { question: "What are the data types in JavaScript?", answer: "JavaScript data types include String, Number, Boolean, Null, Undefined, Symbol, Object, and BigInt." },
    { question: "What is a function in JavaScript?", answer: "A function is a block of reusable code that performs a specific task and can return a value." },
    { question: "What is the difference between 'var', 'let', and 'const'?", answer: "'var' is function-scoped, 'let' and 'const' are block-scoped, and 'const' is used for constants that can't be reassigned." },
    { question: "What is hoisting in JavaScript?", answer: "Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope during compilation." },
    { question: "What is the difference between 'null' and 'undefined'?", answer: "'null' represents an intentional absence of value, while 'undefined' means a variable has been declared but not assigned a value." },
    { question: "What is an arrow function?", answer: "An arrow function is a compact syntax for writing functions, introduced in ES6, which does not have its own 'this' context." },
    { question: "What is the DOM?", answer: "The DOM (Document Object Model) is a programming interface that allows scripts to update the content, structure, and style of a web document." },
    { question: "What is the difference between 'for', 'for...in', and 'for...of' loops?", answer: "'for' is a traditional loop, 'for...in' iterates over object keys, and 'for...of' iterates over iterable values like arrays." },
    { question: "What is event bubbling?", answer: "Event bubbling is a method where an event propagates from the target element up to the root element in the DOM." },
    { question: "What are promises in JavaScript?", answer: "Promises are objects representing the eventual completion or failure of an asynchronous operation." },
    { question: "What is async/await?", answer: "'async/await' is syntax for handling asynchronous operations in a more readable way, introduced in ES8." },
    { question: "What is a closure in JavaScript?", answer: "A closure is a function that retains access to its outer scope even after the outer function has executed." },
    { question: "What is a prototype in JavaScript?", answer: "A prototype is an object from which other objects inherit properties and methods." },
    { question: "What is the difference between 'call()', 'apply()', and 'bind()'?", answer: "'call()' and 'apply()' invoke functions with a specified 'this' context, but 'apply()' uses an array for arguments. 'bind()' returns a new function with 'this' bound to the specified object." },
    { question: "What is the 'this' keyword in JavaScript?", answer: "'this' refers to the object that is currently executing the code." },
    { question: "What is the difference between synchronous and asynchronous programming?", answer: "Synchronous programming executes code sequentially, while asynchronous programming allows non-blocking operations and code execution out of order." },
    { question: "What is a callback function?", answer: "A callback function is a function passed as an argument to another function, which is executed after the completion of that function." },
    { question: "What is the difference between 'let' and 'var'?", answer: "'let' is block-scoped and does not allow re-declaration in the same scope, while 'var' is function-scoped and allows re-declaration." },
    { question: "What is the difference between 'undefined' and 'not defined'?", answer: "'undefined' means a variable has been declared but not assigned a value, while 'not defined' means the variable hasn't been declared at all." },
    { question: "What is event delegation?", answer: "Event delegation is a technique where you attach a single event listener to a parent element to handle events for its child elements." },
    { question: "What is the 'use strict' directive?", answer: "'use strict' is a directive that enforces stricter parsing and error handling in JavaScript." },
    { question: "What is the difference between 'window' and 'document' in JavaScript?", answer: "'window' is the global object representing the browser window, while 'document' is the object representing the web page content." },
    { question: "What is the difference between 'map()' and 'forEach()'?", answer: "'map()' returns a new array with the results of applying a function to each array element, while 'forEach()' executes a function for each array element but does not return a new array." },
    { question: "What is a template literal in JavaScript?", answer: "A template literal allows embedding expressions in strings using backticks (`) and ${} syntax." },
    { question: "What is destructuring in JavaScript?", answer: "Destructuring is a syntax for extracting values from arrays or objects and assigning them to variables." },
    { question: "What is an IIFE (Immediately Invoked Function Expression)?", answer: "An IIFE is a function that is executed immediately after it is defined, often used to create a private scope." },
    { question: "What is the difference between 'spread' and 'rest' operators?", answer: "The spread operator (...) expands elements, while the rest operator (...) collects multiple elements into an array." },
    { question: "What is a JavaScript module?", answer: "A module is a file that encapsulates code and exports it for use in other files." },
    { question: "What is the difference between 'getElementById()' and 'querySelector()'?", answer: "'getElementById()' selects an element by ID, while 'querySelector()' selects the first matching element using a CSS selector." },
    { question: "What is a higher-order function in JavaScript?", answer: "A higher-order function is a function that takes another function as an argument or returns a function." },
    { question: "What is a pure function?", answer: "A pure function is a function that returns the same output given the same input and has no side effects." },
    { question: "What is the difference between 'localStorage' and 'sessionStorage'?", answer: "'localStorage' stores data with no expiration, while 'sessionStorage' stores data only for the duration of the session." },
    { question: "What is the event loop in JavaScript?", answer: "The event loop is a mechanism that handles the execution of multiple operations, including handling asynchronous tasks in JavaScript." },
    { question: "What are ES6 features?", answer: "ES6 introduced features like arrow functions, let and const, template literals, destructuring, promises, classes, modules, and more." },
    { question: "What is a JavaScript class?", answer: "A class is a blueprint for creating objects with predefined properties and methods." },
    { question: "What is the difference between 'function declaration' and 'function expression'?", answer: "Function declarations are hoisted, while function expressions are not and must be defined before use." },
    { question: "What is the 'new' keyword in JavaScript?", answer: "The 'new' keyword is used to create an instance of an object with a constructor function." },
    { question: "What is the difference between 'setTimeout()' and 'setInterval()'?", answer: "'setTimeout()' runs a function once after a delay, while 'setInterval()' runs a function repeatedly with a fixed delay." },
    { question: "What is a promise chain?", answer: "A promise chain is a series of '.then()' methods used to handle multiple asynchronous tasks in sequence." },
    { question: "What are JavaScript events?", answer: "JavaScript events are interactions or occurrences that can trigger the execution of code, such as clicks or keypresses." },
    { question: "What is 'NaN' in JavaScript?", answer: "'NaN' stands for 'Not-a-Number', representing a value that is not a legal number." },
    { question: "What is the purpose of 'typeof' operator?", answer: "The 'typeof' operator returns the data type of a variable or expression." },
    { question: "What is the difference between 'slice()' and 'splice()'?", answer: "'slice()' returns a shallow copy of an array, while 'splice()' modifies the original array by adding or removing elements." },
    { question: "What is the difference between 'apply()' and 'call()'?", answer: "'apply()' takes an array of arguments, while 'call()' takes arguments separately." }
]
    }
,
{
    Category: 'CSS',
    questionsBank:  [
        { question: "What is CSS?", answer: "CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML or XML." },
        { question: "What are the types of CSS?", answer: "The types of CSS are Inline, Internal (Embedded), and External CSS." },
        { question: "What is the difference between inline, internal, and external CSS?", answer: "Inline CSS applies styles directly to an element, internal CSS is within a <style> tag in the head section, and external CSS links to a separate stylesheet file." },
        { question: "What are CSS selectors?", answer: "CSS selectors are patterns used to select and style elements on a webpage." },
        { question: "What is the difference between a class and an ID in CSS?", answer: "A class can be reused for multiple elements (.), while an ID is unique to a single element (#)." },
        { question: "What is the syntax of a CSS rule?", answer: "A CSS rule consists of a selector and a declaration block (e.g., selector { property: value; })." },
        { question: "What are pseudo-classes in CSS?", answer: "Pseudo-classes define the special state of an element, such as :hover, :focus, or :nth-child()." },
        { question: "What is the difference between 'relative', 'absolute', 'fixed', and 'sticky' positioning in CSS?", answer: "'relative' positions elements relative to their normal position, 'absolute' relative to the nearest positioned ancestor, 'fixed' relative to the viewport, and 'sticky' toggles between relative and fixed." },
        { question: "What is the difference between 'em' and 'rem' units in CSS?", answer: "'em' is relative to the font size of the parent element, while 'rem' is relative to the root element's font size." },
        { question: "What is the box model in CSS?", answer: "The CSS box model describes the rectangular boxes generated for elements, consisting of margins, borders, padding, and content." },
        { question: "What is the difference between 'inline', 'block', and 'inline-block' elements?", answer: "Inline elements do not start on a new line and only occupy as much width as necessary, block elements start on a new line and take up the full width, and inline-block elements combine properties of both." },
        { question: "What are CSS pseudo-elements?", answer: "Pseudo-elements allow styling specific parts of elements, such as ::before and ::after." },
        { question: "What is the difference between 'padding' and 'margin' in CSS?", answer: "'Padding' is the space between content and border, while 'margin' is the space outside the border between elements." },
        { question: "What is a CSS media query?", answer: "Media queries are used to apply styles based on device characteristics like screen size or resolution." },
        { question: "What is the z-index in CSS?", answer: "The z-index controls the stacking order of elements; higher values appear on top." },
        { question: "What is the difference between 'position: relative' and 'position: absolute'?", answer: "'relative' positions an element relative to its normal position, while 'absolute' positions it relative to its nearest positioned ancestor." },
        { question: "What are flexbox and grid in CSS?", answer: "Flexbox is a layout model for arranging elements in a one-dimensional layout, while Grid is a two-dimensional layout system." },
        { question: "What is the difference between 'max-width' and 'min-width'?", answer: "'max-width' specifies the maximum width an element can have, while 'min-width' specifies the minimum." },
        { question: "What is the 'overflow' property in CSS?", answer: "The 'overflow' property controls what happens to content that exceeds the element's box, with values like visible, hidden, scroll, and auto." },
        { question: "What is the difference between 'visibility: hidden' and 'display: none'?", answer: "'visibility: hidden' hides the element but keeps its space, while 'display: none' removes it from the document flow." },
        { question: "What is a CSS transition?", answer: "A CSS transition allows smooth changes of property values over a specified duration." },
        { question: "What is a CSS animation?", answer: "CSS animations enable animated transitions between CSS states using keyframes." },
        { question: "What is the difference between 'relative' and 'static' positioning?", answer: "'relative' positions elements relative to their normal position, while 'static' is the default positioning without any changes." },
        { question: "What is the 'float' property in CSS?", answer: "The 'float' property positions an element to the left or right, allowing text or inline elements to wrap around it." },
        { question: "What is a CSS variable?", answer: "A CSS variable (custom property) is a reusable value defined with -- in a :root or other selector (e.g., --main-color: #333;)." },
        { question: "What is the difference between 'inline' and 'inline-block'?", answer: "'inline-block' allows elements to sit inline like 'inline', but with block-level styling features such as padding and margins." },
        { question: "What is the difference between 'opacity' and 'rgba'?", answer: "'opacity' sets the transparency of an entire element, while 'rgba' allows setting transparency for the background color." },
        { question: "What is the 'clip-path' property?", answer: "The 'clip-path' property defines a clipping region for an element, determining which part is visible." },
        { question: "What is the difference between 'absolute' and 'fixed' positioning?", answer: "'absolute' is relative to the nearest positioned ancestor, while 'fixed' is relative to the viewport." },
        { question: "What is the 'align-items' property in Flexbox?", answer: "'align-items' defines how flex items are aligned along the cross axis within a container." },
        { question: "What is the 'justify-content' property in Flexbox?", answer: "'justify-content' defines alignment along the main axis, such as space-between, center, or flex-start." },
        { question: "What is the 'aspect-ratio' property?", answer: "The 'aspect-ratio' property allows setting a preferred aspect ratio for an element." },
        { question: "What is the difference between 'nth-child()' and 'nth-of-type()'?", answer: "'nth-child()' selects elements based on their position among siblings, while 'nth-of-type()' selects elements based on their type." },
        { question: "What is the purpose of the 'object-fit' property?", answer: "The 'object-fit' property defines how content like images or videos is resized to fit its container." },
        { question: "What is the 'white-space' property?", answer: "The 'white-space' property specifies how whitespace inside an element is handled." },
        { question: "What are 'keyframes' in CSS animations?", answer: "Keyframes define the intermediate steps in an animation sequence." },
        { question: "What is the 'backface-visibility' property?", answer: "The 'backface-visibility' property determines whether the back of an element is visible when rotated." },
        { question: "What is the 'pointer-events' property?", answer: "The 'pointer-events' property specifies whether an element can be targeted by mouse or touch events." },
        { question: "What is the difference between 'inherit', 'initial', and 'unset'?", answer: "'inherit' applies the parent element's value, 'initial' applies the default value, and 'unset' acts as 'inherit' or 'initial' depending on inheritance." },
        { question: "What is the 'filter' property in CSS?", answer: "The 'filter' property applies graphical effects like blur, brightness, or grayscale to elements." },
        { question: "What is the 'position' property in CSS?", answer: "The 'position' property specifies how an element is positioned in the document, with values like static, relative, absolute, fixed, or sticky." },
        { question: "What is the difference between 'columns' and 'rows' in Grid?", answer: "Grid columns are vertical tracks, while rows are horizontal tracks, defined using 'grid-template-columns' and 'grid-template-rows'." },
        { question: "What is the 'gap' property?", answer: "The 'gap' property defines spacing between rows and columns in Grid or Flexbox layouts." },
        { question: "What is the 'content' property in CSS?", answer: "The 'content' property is used with pseudo-elements (::before and ::after) to insert content dynamically." },
        { question: "What is the 'text-shadow' property?", answer: "The 'text-shadow' property applies shadow effects to text." },
        { question: "What is the difference between 'inline-flex' and 'flex'?", answer: "'inline-flex' creates a flex container inline, while 'flex' creates a block-level flex container." }
    ]
    
}    
,
    {
    Category: 'HTML',
     questionsBank : [
        { question: "What is HTML?", answer: "HTML (HyperText Markup Language) is the standard language for creating web pages and web applications." },
        { question: "What are HTML elements?", answer: "HTML elements are building blocks of web pages, defined by a start tag, content, and an end tag (e.g., <p>content</p>)." },
        { question: "What is the purpose of the <!DOCTYPE> declaration?", answer: "The <!DOCTYPE> declaration defines the document type and version of HTML being used, ensuring proper rendering in browsers." },
        { question: "What are HTML tags?", answer: "HTML tags are the syntax used to define elements, enclosed in angle brackets (e.g., <html>, <body>, <div>)." },
        { question: "What is the <head> section in HTML?", answer: "The <head> section contains metadata about the document, such as the title, character set, and linked stylesheets." },
        { question: "What is the <body> section in HTML?", answer: "The <body> section contains the content displayed in the browser, such as text, images, and interactive elements." },
        { question: "What are semantic elements in HTML?", answer: "Semantic elements clearly define their purpose and content, like <header>, <footer>, <article>, and <section>." },
        { question: "What is the purpose of the <title> tag?", answer: "The <title> tag defines the title of the document, displayed on the browser tab and used for SEO." },
        { question: "What are HTML attributes?", answer: "HTML attributes provide additional information about elements, defined in the opening tag (e.g., id, class, href)." },
        { question: "What is the difference between block and inline elements?", answer: "Block elements (e.g., <div>, <p>) take up the full width, while inline elements (e.g., <span>, <a>) occupy only the required width." },
        { question: "What is an HTML hyperlink?", answer: "A hyperlink (<a>) links to another document or resource, defined using the 'href' attribute." },
        { question: "What is the purpose of the <img> tag?", answer: "The <img> tag is used to embed images in a webpage, requiring the 'src' and 'alt' attributes." },
        { question: "What is the difference between <ul> and <ol>?", answer: "<ul> creates an unordered list, while <ol> creates an ordered list." },
        { question: "What is the purpose of the <form> element?", answer: "The <form> element is used to create a form for user input, typically submitted to a server for processing." },
        { question: "What are input types in HTML?", answer: "Input types include text, email, password, number, checkbox, radio, file, and more, specified using the 'type' attribute in <input>." },
        { question: "What is the <table> element in HTML?", answer: "The <table> element is used to create tables, consisting of rows (<tr>), headers (<th>), and cells (<td>)." },
        { question: "What is the difference between <div> and <span>?", answer: "<div> is a block-level container, while <span> is an inline container for grouping elements." },
        { question: "What is an iframe in HTML?", answer: "An <iframe> is used to embed another HTML document within a webpage." },
        { question: "What is the <meta> tag in HTML?", answer: "The <meta> tag provides metadata about the webpage, such as character encoding, author, and viewport settings." },
        { question: "What is the purpose of the 'alt' attribute in images?", answer: "The 'alt' attribute provides alternative text for images, useful for accessibility and when images fail to load." },
        { question: "What is the purpose of the <script> tag?", answer: "The <script> tag is used to embed or reference JavaScript code within an HTML document." },
        { question: "What is the purpose of the <style> tag?", answer: "The <style> tag is used to define internal CSS styles directly within an HTML document." },
        { question: "What is the <link> tag in HTML?", answer: "The <link> tag is used to link external resources, such as stylesheets, to an HTML document." },
        { question: "What is the <br> tag?", answer: "The <br> tag creates a line break within text content." },
        { question: "What is the <hr> tag?", answer: "The <hr> tag creates a horizontal rule, often used as a separator in content." },
        { question: "What is the purpose of the 'id' attribute?", answer: "The 'id' attribute uniquely identifies an HTML element, useful for CSS styling or JavaScript manipulation." },
        { question: "What is the 'class' attribute used for?", answer: "The 'class' attribute groups multiple elements for styling and JavaScript targeting." },
        { question: "What is the difference between <b> and <strong>?", answer: "<b> applies bold formatting, while <strong> indicates important text semantically." },
        { question: "What is the difference between <i> and <em>?", answer: "<i> applies italic formatting, while <em> indicates emphasized text semantically." },
        { question: "What is the <audio> tag?", answer: "The <audio> tag is used to embed audio files in a webpage, supporting various formats like MP3 and Ogg." },
        { question: "What is the <video> tag?", answer: "The <video> tag is used to embed video files in a webpage, supporting controls like play, pause, and volume." },
        { question: "What is the purpose of the <canvas> tag?", answer: "The <canvas> tag is used for drawing graphics and animations via JavaScript." },
        { question: "What is the <svg> tag in HTML?", answer: "The <svg> tag is used to define vector-based graphics." },
        { question: "What is the difference between relative and absolute paths in links?", answer: "Relative paths are based on the current location, while absolute paths are full URLs or start from the root directory." },
        { question: "What is the purpose of the 'data-' attribute?", answer: "The 'data-' attribute is used to store custom data in HTML elements." },
        { question: "What is the difference between the 'name' and 'id' attributes?", answer: "'id' is unique within a document, while 'name' is used to group form inputs for server-side processing." },
        { question: "What is a favicon?", answer: "A favicon is a small icon associated with a webpage, displayed in the browser tab and bookmarks." },
        { question: "What is the viewport meta tag?", answer: "The viewport meta tag controls the layout and scaling of a webpage on mobile devices." },
        { question: "What is HTML5?", answer: "HTML5 is the latest version of HTML, introducing new semantic elements, multimedia support, and APIs." },
        { question: "What are self-closing tags?", answer: "Self-closing tags do not have closing tags, ending with '/>', like <img> and <input>." },
        { question: "What is the purpose of the <noscript> tag?", answer: "The <noscript> tag displays content for users whose browsers do not support JavaScript." },
        { question: "What is the <progress> tag?", answer: "The <progress> tag represents the completion progress of a task." },
        { question: "What is the <details> tag?", answer: "The <details> tag creates a disclosure widget for showing and hiding additional content." },
        { question: "What is the <summary> tag?", answer: "The <summary> tag defines a visible summary for the <details> element." },
        { question: "What is the <mark> tag?", answer: "The <mark> tag highlights text, indicating it is relevant or important." },
        { question: "What is the difference between the <address> and <blockquote> tags?", answer: "<address> defines contact information, while <blockquote> represents a long quotation." },
        { question: "What is the purpose of the <wbr> tag?", answer: "The <wbr> tag specifies potential line-break points in text." }
    
     ]
    }

    ];
    // alert(allCardsData[1].Category); 
let filterTxt = "HTML";
     let cardData = allCardsData.find( (item) => (item.Category === filterTxt));
    // alert(filteredData.Category );

    const mainEl = document.createElement('div');
    mainEl.setAttribute('id','main');

    // mainContainer.setAttribute('id','mainContainer');
   
    const navBarMenu = document.createElement('div');
    navBarMenu.setAttribute('id','navBarMenu');
    
    navigationLinks.forEach((lnk) =>
        {
            const link1 = document.createElement('button');
            link1.setAttribute('id','btnMenu');
            
            link1.href = lnk.href;
            link1.textContent = lnk.text;
            link1.addEventListener('click', function() {
                changeFiler(lnk.text);
               
            });

            navBarMenu.appendChild(link1);
            
        })
 

mainEl.appendChild(navBarMenu)
const changeFiler = (txtFilter) =>      {
    filterTxt = txtFilter;
    cardData = allCardsData.find( (item) => (item.Category === filterTxt));
    const randomIndex = Math.floor(Math.random() * cardData.questionsBank.length);
       
    getNewQuestion(randomIndex);
// alert(cardData.Category);    
};      
    //flashCardContainer
    //cardContainer
        //cardFrontSide
        //cardBackSide
    const flashCardContainer = document.createElement('div');
    flashCardContainer.classList.add('flashCardContainer');
    
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('cardContainer');

    const cardFrontSide = document.createElement('div');
    cardFrontSide.classList.add('cardFrontSide');
    cardFrontSide.innerHTML = cardData.Category +  '\n<h1>Question:</h1><hr><br>' +  cardData.questionsBank[0].question;

    const cardBackSide = document.createElement('div');
    cardBackSide.classList.add('cardBackSide');
    cardBackSide.innerHTML = cardData.Category +  '\n<h1>Answer:</h1><hr><br>' +  cardData.questionsBank[0].answer;
    
    cardContainer.appendChild(cardFrontSide);
    cardContainer.appendChild(cardBackSide);
    
    flashCardContainer.appendChild(cardContainer);
    
    document.body.appendChild(mainEl);
    document.body.appendChild(flashCardContainer);
    // End of flashCardContainer

    //adding button to change question answers
    const changeButton = document.createElement('button');
    changeButton.classList.add('btnNewCard');
    // changeButton.style.margin = '50px' 
    changeButton.innerText = '<< New Card >>';

    changeButton.addEventListener('click', function() {
        const randomIndex = Math.floor(Math.random() * cardData.questionsBank.length);
        getNewQuestion(randomIndex);
       
    });
    document.body.appendChild(changeButton);
const getNewQuestion = (randomIndex) => {
    cardFrontSide.innerHTML = cardData.Category + '\n<h1>Question:</h1><hr><br>' +  cardData.questionsBank[randomIndex].question;
    cardBackSide.innerHTML = cardData.Category +  '\n<h1>Answer:</h1><hr><br>' +  cardData.questionsBank[randomIndex].answer;
}