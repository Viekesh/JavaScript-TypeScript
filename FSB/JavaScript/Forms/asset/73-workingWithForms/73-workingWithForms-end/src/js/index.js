// In this comprehensive posts we take a look at forms, their associated events and building validators to
// ensure your user fills in the forms correctly.

// It goes without saying that forms are crititcally important to every website and application. Forms provide
// a way for the user to key in data to the application and therefore it becomes important to validate the
// contents of the form before they are submitted to the server for processing.

// Forms typically though not always are created using the HTML form tag.

// The method atttribute specifies the HTTP verb used for sending data. The action should contain the URL or path
// to the api or server endpoint to where the form contents need to be submitted. Forms contain the form element
// such as the input tag that you see in this block. When it comes to validate form field we have two techniques.
// If your form fields belong to specific type such as an email field then we can directly query the validity of
// the text that the user type in. The another is regular technique in your javascript code.

// We'll touch both techniques in this example.

// The itself offers the submit event which we can hijack to implement form validation and to ensure that the
// form is filled properly before being submitted.

// Let's see all of this in action.

// Here we have a sign up form with the couple of form fields in line with how form data should be handled.

// The action field is blank because we don't have a server or a backend to post the data to.

// Inside the form we have a input fields of different types such as email which is designed to handle and
// validate email addresses.

// We also have passport field and another one to retype the passport to ensure correctness.

// There is a text input field for obtaining the full length of the user, which has the main length attributes
// set to two, which means that it must contain a minimum of two characters to validate the input.

// Here we need to validate all input fields and we need to ensure all fields are filled in before the form is
// submitted. For individual form fields let's create a centralised flag named "canSubmit"








// All these form field have their name attributes set, which is what we're using to select them in our index.js
// file as you can see here...
// Besides we have a selector to the form and we also have a regular expression button for validating passwords.

const formEl = document.querySelector('form');
const emailFld = document.querySelector("input[name='email']");
const passwordFld = document.querySelector("input[name='password']");
const repasswordFld = document.querySelector("input[name='repassword']");
const fullnameFld = document.querySelector("input[name='fullname']");
const merchantFld = document.querySelector("input[name='merchant']");
const passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;



// For individual form fields we create here a centralised flag named "canSubmit" whcih will set to false as
// default.
let canSubmit = false;



const submitForm = (data) => {
  console.log(data);
  //formEl.submit();
};



// Email field is the input field of type "email", which means thaqt the form field provides built in validation.
// To check if valid email address has been typed in or not we can query "event.target.reportValidity()".
emailFld.addEventListener('keyup', function (event) {
  event.preventDefault();
  // if(event.target.reportValidity()) {
  //   canSubmit = true;
  //   this.parentElement.classList.remove("form-field-error");
  // } else {
  //   canSubmit = false;
  //   this.parentElement.classList.add("form-field-error");
  // }

  // In above lines we can replace the logic in the event listeners callback like so...

  validateFld(this, event.target.reportValidity());
});



passwordFld.addEventListener('keyup', function (evt) {
  evt.preventDefault();
  validateFld(this, passwordRegEx.test(evt.target.value));
});



repasswordFld.addEventListener('keyup', function (evt) {
  evt.preventDefault();
  validateFld(this, passwordFld.value === evt.target.value);
});



fullnameFld.addEventListener('keyup', function (evt) {
  evt.preventDefault();
  evt.target.value = evt.target.value.trimLeft();
  validateFld(this, evt.target.reportValidity());
});



const validateFld = (el, condition) => {
  if (condition) {
    canSubmit = true;
    el.parentElement.classList.remove('form-field-error');
  } else {
    canSubmit = false;
    el.parentElement.classList.add('form-field-error');
  }
};



// As long as this is false we ensure that our form is not submitted. Now let's take control of the form and ensure
// it's fully filled up before we are able to submit it. After we build individual field validators.

// Form provide us with a submit event which we can take control of.

formEl.addEventListener("submit", function (event) {

  // The first thing we should do here is that when handling the submit event is invoke event.preventDefault()
  // like so... This will ensure that the form is not submitted. When you press enter in the form or when the "Go"
  // or "Submit" button is pressed "preventDefault()" prevents the browser from handling the form and in a way
  // this allows us to hijack the form and take control.
  event.preventDefault();

  // Now to access individual form field and their data at the form level, we can access "event.target.elements"
  // So if you fill up and submit, you can see we get a HTML form controls collection, which looks a bit like an
  // array but it isn't it contains both indexed and keyed entries for all our elements. So if you want to access
  // what user has typed in email field, instance. You can use the name attributes value directly followed
  // by ".value" like so... Now if we submit the form we get some content...

  // Now here we grab all the form fields of the form and turn them into an object because that makes them easy
  // at times to send this data back to the server.
  // console.log(event.target.elements["email"].value);

  // first we check the form field is filled or not...
  // HTML form collection control is not an array mehtod on it but we can always convert it to an array.
  // We can either use array.from() or you can also do this... which I think is really slick. Just spreadd an
  // elements into an array and now it's a valid array...

  // The first thing we'll do here is from the list of all the form elements, we'll eliminate the submit button.
  // We use here filter where we'll check if an element is not a submit button and if not we'll put it in to the
  // filtered array then we'll use "map" method to return an object for every form element where we'll set name
  // to the name of the form element, which we can get using "getAttribute", the type of form field, which is
  // available using "element.type" and finally value
  const getFormValues = [...event.target.elements]
    .filter((el) => el.type !== 'submit' && el)
    .map((el) => {
      return {
        name: el.getAttribute('name'),
        type: el.type,

        // for value if the type is the "checkbox" we only need to know if the checkbox has been ticked or not.
        // This can be queried using the checked property like so, which returns a boolean. Otherwise we want to
        // access the value which will get us whatever the user has typed in.
        value: el.type === 'checkbox' ? el.checked : el.value,
      };
    });

  // now we can get object in the console.
  console.log(getFormValues);

  const isFilled = getFormValues
    .filter((el) => el.type !== 'checkbox')
    .every((el) => el.value !== '');
  return isFilled && canSubmit && submitForm(getFormValues);
});



// passwordFld.addEventListener('keyup', function (evt) {
//   evt.preventDefault();
//   validateFld(this, passwordRegEx.test(evt.target.value));
// });

// repasswordFld.addEventListener('keyup', function (evt) {
//   evt.preventDefault();
//   validateFld(this, passwordFld.value === evt.target.value);
// });

// fullnameFld.addEventListener('keyup', function (evt) {
//   evt.preventDefault();
//   evt.target.value = evt.target.value.trimLeft();
//   validateFld(this, evt.target.reportValidity());
// });

// formEl.addEventListener('submit', function (evt) {
//   evt.preventDefault();
//   const getFormValues = [...evt.target.elements]
//     .filter((el) => el.type !== 'submit' && el)
//     .map((el) => {
//       return {
//         name: el.getAttribute('name'),
//         type: el.type,
//         value: el.type === 'checkbox' ? el.checked : el.value,
//       };
//     });

//   const isFilled = getFormValues
//     .filter((el) => el.type !== 'checkbox')
//     .every((el) => el.value !== '');
//   return isFilled && canSubmit && submitForm(getFormValues);
// });
