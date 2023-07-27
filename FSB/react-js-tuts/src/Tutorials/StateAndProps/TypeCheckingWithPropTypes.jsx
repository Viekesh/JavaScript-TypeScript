// Props let you access all kinds of data, such as strings, numbers, objects, arrays, functions and a lot more. Since a prop is just a conduit, it ultimately feeds to the component’s internal logic which has to process and consume this incoming data.

// This means, that you have to be extra cautious about the type of data that a prop receives. For instance, a prop that must receive an array of items cannot receive a string. Likewise, a prop that must expect a function cannot receive a number. Therefore, it becomes important to typecheck and validates data that flows in through a prop.

// React offers the proptypes package that exports a ton of validators for all types of data. These validators will throw appropriate warnings in the console whenever a prop gets an incompatible type of data. 

// It is important to note that these validators will only issue warnings in development. Once a production build is produced, there won’t be any warnings shown because the validation code is removed during the optimization phase. 

// As your app grows, typechecking can help catch a lot of bugs. JavaScript extensions like Flow or TypeScript are available that can be used to typecheck a whole application. However, React offers some built-in typechecking abilities as well. To run typechecking on the props for a component, a special propTypes property can be assigned. They export a vast range of validators that can be used to make sure the data you receive is valid. 

// Ref: https://reactjs.org/docs/typechecking-with-proptypes.html

// Meaningful warnings help us to debug our code faster and fix problems. With the validators from the proptypes package, we can make our reusable components throw warnings that make sense and guide the developer towards using the component correctly. 

// PropTypes

// PropTypes are special properties that we can assign to run typechecking on the props for a component. They export a variety of validators that are used to make sure that the data received is valid. Due to performance reasons, propTypes is checked only in the development mode.  

// Ref: https://reactjs.org/docs/typechecking-with-proptypes.html

// There following shows an example, documenting the different validators that are provided.

// import PropTypes from 'prop-types';

// MyComponent.propTypes = {
// // You can declare that a prop is a specific JS type. By default, these
// // are all optional.
// optionalArray: PropTypes.array,
// optionalBool: PropTypes.bool,
// optionalFunc: PropTypes.func,
// optionalNumber: PropTypes.number,
// optionalObject: PropTypes.object,
// optionalString: PropTypes.string,
// optionalSymbol: PropTypes.symbol,

// // Anything that can be rendered: numbers, strings, elements or an array
// // (or fragment) containing these types.
// optionalNode: PropTypes.node,

// // A React element.
// optionalElement: PropTypes.element,

// // A React element type (ie. MyComponent).
// optionalElementType: PropTypes.elementType,

// // You can also declare that a prop is an instance of a class. This uses
// // JS's instanceof operator.
// optionalMessage: PropTypes.instanceOf(Message),

// // You can ensure that your prop is limited to specific values by treating
// // it as an enum.
// optionalEnum: PropTypes.oneOf(['News', 'Photos']),

// // An object that could be one of many types
// optionalUnion: PropTypes.oneOfType([
// PropTypes.string,
// PropTypes.number,
// PropTypes.instanceOf(Message)
// ]),

// // An array of a certain type
// optionalArrayOf: PropTypes.arrayOf(PropTypes.number),

// // An object with property values of a certain type
// optionalObjectOf: PropTypes.objectOf(PropTypes.number),

// // An object taking on a particular shape
// optionalObjectWithShape: PropTypes.shape({
// color: PropTypes.string,
// fontSize: PropTypes.number
// }),

// // An object with warnings on extra properties
// optionalObjectWithStrictShape: PropTypes.exact({
// name: PropTypes.string,
// quantity: PropTypes.number
// }),

// // You can chain any of the above with `isRequired` to make sure a warning
// // is shown if the prop isn't provided.
// requiredFunc: PropTypes.func.isRequired,

// // A value of any data type
// requiredAny: PropTypes.any.isRequired,

// // You can also specify a custom validator. It should return an Error
// // object if the validation fails. Don't `console.warn` or throw, as this
// // won't work inside `oneOfType`.
// customProp: function(props, propName, componentName) {
// if (!/matchme/.test(props[propName])) {
// return new Error(
// 'Invalid prop `' + propName + '` supplied to' +
// ' `' + componentName + '`. Validation failed.'
// );
// }
// },

// // You can also supply a custom validator to `arrayOf` and `objectOf`.
// // It should return an Error object if the validation fails. The validator
// // will be called for each key in the array or object. The first two
// // arguments of the validator are the array or object itself, and the
// // current item's key.
// customArrayProp: PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
// if (!/matchme/.test(propValue[key])) {
// return new Error(
// 'Invalid prop `' + propFullName + '` supplied to' +
// ' `' + componentName + '`. Validation failed.'
// );
// }
// })
// };

// Since props are a way to provide data and configuration to a prop, the importance of validating props in production becomes all the more important. 

// One can have instances where the value of a prop could belong to more than one type. In such cases,  can use the oneOfType validator and provide options. And if a prop accepts data of all renderable types like numbers, strings, react elements, etc.,  then we can use the node validator. 

// Besides the built-in types, React also allows us to define custom validators.   

// Using the proptypes package is extremely simple and one can extend its capabilities by writing one's own validators.






// 