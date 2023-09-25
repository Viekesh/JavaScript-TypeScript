// Now, we’ll discover the wonderful Drag and Drop API. 

// Drag and Drop is perhaps one of the easiest ways to work with graphical user interfaces and offers better interactivity than most other mediums of selection and action. 

// You grab an element, drag it to a designated point or area on the screen and drop it there and it gets selected or included in a process.  

// On our operating system GUIs, we often drag files into folders and even the trashcan. Likewise on websites, you can drag and drop files for upload or even select/deselect or reorder elements visually.  

// To achieve this, HTML provides the Drag and Drop API which we can work with using JavaScript. The way it works is quite straightforward really. 

// You begin by designating elements as draggable using an HTML attribute. A draggable item can will invoke a host of specialized events which we’ll talk about in just a moment. You then have to designate an area as the drop zone by attaching an event listener to listen to the ‘drop’ event. During the drag operation, you can then store data specific to the item being dragged, in specialized attributes. 

// When the element is dropped on the drop zone, this data is simply transferred. The visual process of moving elements is left to you to implement. The API simply deals with transference of data and invoking a host of events during this process.  

// So, talking about events that we get, here’s the full chart. 

// It all starts with the user dragging an item. At this point, the dragstart  event is fired. As the user is dragging, the ‘drag’ event is fired. When the dragged item enters the drop zone, the ‘dragenter’ event is fired. 

// When the item is dragged over the dropzone, the ‘dragover’ event is continually fired. 

// When the item is dropped, the ‘drop’ event is fired and if the item leaves the drop zone, the dragleave event is fired.  And if the dragging ends, the ‘dragend’ event is fired.  

// Now, getting back to our project, we need to be able to drag the employee cards to the green drop zone below and we should also be able to do the opposite. So, either continue with the completed project from the previous video OR download and setup the project and get your development server up and running. 

// We’re back in the same project as we left off in the previous video. To implement the drag and drop API, the first thing we need to do is declare elements that can be dragged. This is done by setting a special HTML attribute named draggable to true like so. I will thus set this attribute for all employee card divs like so.

// If you now try to drag these images, you’ll see they can be dragged around, though you won’t be able to drop them on the designated drop zone yet. 

//  This is where we go back into JavaScript and work on the task-force div down here.

// The first thing that we need to do is that the moment one starts to drag any of these employee cards, we want to fetch their unique data-id value from the data attribute and we want to store that value using the dataTransfer object that the Drag and drop API provides.  

//  And this should happen the moment one starts to drag these elements. This means the ‘dragstart’ event.

// We will need to attach an event listener for the dragstart event on all employeeCards this time because this isn’t an event that we can work with as it bubbles up. 

// So, let’s use a forEach on the employeeCards like so and we’ll attach an event listener to all instances in one shot like so. 

// We’re listening for the dragstart event and the first thing we’ll do is remove any name panels that might be on display at the time of the dragging begins.  

// Then we will use getAttribute to fetch the value of data-id from the div being dragged and we’ll invoke event.dataTransfer.setData which allows you to store data to be transferred. 

// The first parameter here is the format of data which I’ll set to text/plain as the MIME type because we’re storing a simple string here. The second parameter is the value of the data-id attribute that we extracted. 

// Now let’s shift our focus on the drop zone, designated as ‘taskForce’ here. 

// I’l first attach an event listener for the dragenter event. This will be fired as soon as our dragged item enters the boundary of the drop zone. We’ll first implement preventDefault to prevent the browser from handling this by itself. 

// Then what we need to do is add a visual effect to indicate the area as a drop zone. This can be done by adding a css class that renders the borders of the drop zone as dashed. Now, to dynamically add and overload CSS classes, we will use event.currentTarget.classList which gets the contents of the class attribute and then we’ll use a built-in method known as add which adds to the existing set of CSS class names.  

// I’m adding the highlight-drop css class which is already provided to you in the project’s stylesheet.  

// I’m sure you’re asking, what is currentTarget here. Why didn’t we use event.target. Well there is a difference between the two. event.target is the div under the mouse pointer whereas currentTarget is the element on which this event listener is attached. Event.target can change in this case we drag about whereas we want the css class to be added to the taskforce div.
// Hence, event.currentTarget is the right choice.  

// If I now drag an item over the drop zone, notice how the border changes. This is because the highlight-drop css class has been added. 

// But this sticks and we need to remove the class when the dragged item leaves the zone. 

// To do that, I’ll copy and paste this block of code, change ‘dragenter’ to ‘dragleave’ and we’ll change add to ‘remove’. Both the add and remove methods are incredibly useful when you want to dynamically alter the CSS classes for visual effects. 

// This works well now and the border only changes when you’re hovering a draggable item on top of the drop zone. 

// Now for the drop event. I’ll create an event listener for the drop event. We’ll implement preventDefault. Then, let’s extract the data that we set out to transfer during the dragstart event.
// This is done using the dataTransfer.getData() method like so.

// Once done, we’ll grab a handle to our taskforce and we’ll use append to fetch and append the element where the data ID is equal to the one we transferred during the drag and drop operation like so. 

// And we’ll also remove the highlight-drop class because at this time there won’t be a ‘dragleave’ event as we’ve ‘dropped’ the item. 

// If you try to drag and drop now, you’ll notice it doesn’t work yet. This is because we want to implement an event listener for dragover which is continually fired when an element is over a drop zone and we want to cancel and prevent this to let the drop succeed. 

// This can be done using preventDefault like so. And now, enjoy dragging and dropping employees to your task force.  

// In the same fashion, I should be able to remove employees back to the main all employees list. This can be done by implementing this entire set of event listeners on the all employees div like so. And now you can drag and drop elements back and forth. Isn’t this super fun?



const allEmployees = document.querySelector('.all-employees');
const taskForce = document.querySelector('.task-force');
const employeeCards = document.querySelectorAll('.employee');
const { top, left } = allEmployees.getBoundingClientRect();

const createPanel = (x, y, name) => {
  const createPanel = document.createElement('div');
  createPanel.setAttribute('class', 'info-panel');
  createPanel.innerText = name;
  createPanel.style.top = `${y}px`;
  createPanel.style.left = `${x}px`;
  return createPanel;
};

const removeInfoPanel = () => document.querySelector('.info-panel')?.remove();

allEmployees.addEventListener('contextmenu', function (evt) {
  evt.preventDefault();
  removeInfoPanel();
  if (evt.target.getAttribute('class') === 'employee') {
    const name = evt.target.getAttribute('data-name');
    const infoPanel = createPanel(evt.clientX - left, evt.clientY - top, name);

    allEmployees.append(infoPanel);
  }
});

allEmployees.addEventListener('click', () => removeInfoPanel());

// Drag and Drop
employeeCards.forEach((el) => {
  el.addEventListener('dragstart', function (evt) {
    removeInfoPanel();
    const getId = evt.target.getAttribute('data-id');
    evt.dataTransfer.setData('text/plain', getId);
  });
});

// Taskforce Events
taskForce.addEventListener('drop', function (evt) {
  evt.preventDefault();
  const empId = evt.dataTransfer.getData('text/plain');
  evt.currentTarget.append(document.querySelector(`div[data-id='${empId}']`));
  evt.currentTarget.classList.remove('highlight-drop');
});

taskForce.addEventListener('dragover', function (evt) {
  evt.preventDefault();
});

taskForce.addEventListener('dragenter', function (evt) {
  evt.preventDefault();
  evt.currentTarget.classList.add('highlight-drop');
});

taskForce.addEventListener('dragleave', function (evt) {
  evt.currentTarget.classList.remove('highlight-drop');
});

allEmployees.addEventListener('drop', function (evt) {
  evt.preventDefault();
  const empId = evt.dataTransfer.getData('text/plain');
  evt.currentTarget.append(document.querySelector(`div[data-id='${empId}']`));
  evt.currentTarget.classList.remove('highlight-drop');
});

// All Employees Events
allEmployees.addEventListener('dragover', function (evt) {
  evt.preventDefault();
});

allEmployees.addEventListener('dragenter', function (evt) {
  evt.preventDefault();
  evt.currentTarget.classList.add('highlight-drop');
});

allEmployees.addEventListener('dragleave', function (evt) {
  evt.currentTarget.classList.remove('highlight-drop');
});



// Events that occur when elements are dragged and/or drooped are referred as drag-drop events and belong to 
// DragEvent object.

// dragstart event occurs when the user starts to drag the element.

// The dragenter event occurs when the dragged element enters the drop target.