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

// The "const" "siteTitle" mpw actively points to the h1 tag in the page with the "id" "site-title". Using this
// we can select our inner text method to update the text contents of this h1 tag like so...
const siteTitle = document.getElementById('site-title');

// Manipulation
siteTitle.innerText = 'Dynamation SpaceTech';