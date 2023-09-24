// Here we can learn DOM selectors
// In case of existing HTML markup you need specialised method known as DOM selectors.
// You typically get 5 core DOM selectors as listed here...

// document.getElementById(id);
// document.getElementsByTagName(tagname);
// document.getElementsByClassName(classname);
// document.querySelector(element_name_or_css_selectors);
// document.querySelectorAll(element_name_or_css_selectors);

// Whenever these methods are called they transverse the DOM to find the element requested and return an active
// handle which can then be used to access that element properties for manipulation.






// So, here we have a web page with some HTML elments we have to select them by using above methods for
// manipulate them. The first thing we want to do is change this title to "Dim Mission Space Tech" for this
// purpose we need to select this element and h1 tag with the id set to "site-title". This is the perfect
// opportunity to play with the document.getElementById selector... which gives the id of the element in question.
// This is always return a single element the first one that matches the id.

// The "const" "siteTitle" now actively points to the h1 tag in the page with the "id" "site-title". Using this
// we can select our inner text method to update the text contents of this h1 tag like so...
const siteTitle = document.getElementById('site-title');

// Manipulation
siteTitle.innerText = 'Dynamation SpaceTech';

// It is important to note here that when you use variables or constants to store variables as you have done here
// you are caching the selector, a recommend practice.



// Remember one thing no matter how cool DOM manipulation looks, there is a cost attached. Every time you invoke
// one of these selectors to transverse and select element, there is a performance cost involved. It is fair to say
// that the DOM isn't the most optimised interface even though modern browsers are really good at optimising
// the entire process of DOM manipulation. But it goes without saying that to many transversal and manipulation can
// slow down the performance of your webpage and the application.

// By caching you don't have to transverse and select every time, thereby improving overall performance.



// Now we update our navigation elements, this is done by selecting list element first with the help of
// document.getElementsByTagName("li") method which operates on element type.
const navEl = document.getElementsByTagName('li');
// console.log(navEl);
// So here we have a list of "li" elements. We use "forOf" loop on this HTML collection and it provides access to
// each element.

// Another way to gain access for manipulation is using "array.from" to convert a HTML collection to an array
// after which we can use for each...

// Here we update each element 
Array.from(navEl).forEach((el) => (el.innerText = `-- ${el.innerText} --`));

// An imp point here is to note that, when you access innertext it acts like a getter and get's you the text
// contained in the element selected. But when you use an equal to sign to assign a string, the same innertext
// propety acts like a setter, updating the DOM in the process.



const contentText = document.getElementsByClassName('content-text');

Array.from(contentText).forEach(
  (el) => (el.innerText = el.innerText.toUpperCase())
);



const siteDesc = document.querySelector('#site-description');

siteDesc.innerText = siteDesc.innerText.replace(
    'DynTech LLC',
    'Dynamation SpaceTech'
);



const contentDiv = document.querySelector('.content');
contentDiv.style.backgroundColor = '#fff';
contentDiv.style.textAlign = 'justify';



const altNavs = document.querySelectorAll('#nav > li:nth-of-type(odd)');
altNavs.forEach((el) => (el.style.backgroundColor = 'rgba(0,0,0,0.5)'));



// document.getElementById() is used to select an element based on element’s id attribute.

// document.getElementsByTagName() is used to select an element based on tag name used to create the element.



// How do you select the following element?
{/* <input class=‘language' name=‘language' type=“text"/> */}

// Here, input has class attribute, hence we can select the element using document.getElementsByClassName()
// since it is used to select an element based on element’s class attribute.