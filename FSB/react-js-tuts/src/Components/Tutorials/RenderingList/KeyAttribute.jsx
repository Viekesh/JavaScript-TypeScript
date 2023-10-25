// Working With Lists

// When working with lists, some of the common operations would include

// Adding items 
// Editing items 
// Removing items 
// Sorting lists by a particular property.
// We’ve already learned that React has declarative programming that keeps your UI elements in sync with your data.

// This also means that whenever you update your list data, React uses its reconciliation algorithm to track and update your interface. 

// This is where the “key” attribute comes into the picture.






// Rendering Multiple Elements

// When React renders multiple instances of elements of components, it needs to keep track of each rendered element with its data source. 

// The “key” attribute requires a String value that must be unique for every item in the collection. 

// Best Practices

// Usually, most datasets have some sort of an “id” or attribute which is unique, such as productId, employeeId, or even the person’s email address if the record isn’t going to be duplicated within the collection. 

// It is important to note that you should never set the key prop to the index value of elements. They are likely to cause all sorts of odd behavior in your application.  

// This is because the value of the index is never consistent and changes as the contents of the array change over time.  

// This means it cannot guarantee the position of an element in the list

// So, unique String values for the “key” prop are mandatory when rendering child elements or components in React. 

// If your data set doesn’t provide with such properties then I recommend using the uuid or short-id packages from npm to add such ids before they’re rendered in a React application.

// Having said this, there are cases where it is perfectly fine to use the index value for the key prop.   

// For instance, if your list is static and won’t be modified, rearranged or sorted in any way, then the index number is perfectly valid and safe for use as the key. 

// As an example, you may want to display a static data set such as a gallery of images and captions, that comes through an API, but never gets updated in realtime in the React application. 

// But when rendering dynamic lists that would be modified over time, you must implement unique String keys when rendering lists. 

// While React’s reconciliation algorithm is smart and optimized, it does need our help to work correctly. The key attribute helps React to perform optimal updates when rendering lists.

// In the next topic, we’ll take a look at Fragments. Intrigued? Let’s get to it. 

