import React, { Component } from "react";
import "./KeyAttribute.css";
import getProducts from "./getProducts";
import AddProduct from "./AddProduct";
import Products from "./Products";

class KeyAttribute extends Component {
  state = {
    product: [],
    cart: [],
  };

  componentDidMount = async () => {
    const fetchProduct = await getProducts();
    this.setState({
      products: fetchProduct,
    });
  };

  addProduct = (product) => {
    // Find the product in the cart array
    this.state.cart.find((p) => p.id === product.id)
      ? alert("Product is already in the cart! Please adjust its quantity!")
      : this.setState({
          cart: [{ ...product, qty: 1 }, { ...this.state.cart }],
        }); // If the product is not in the cart, add it to the top of the array
  };

  updateQuantity = (id, qty) => {
    // Set the quantity of the product
    qty === 0
      ? this.setState({
          cart: this.state.cart.filter((p) => p.id !== id),
        })
      : this.setState({
          cart: this.state.cart.map((p) => {
            if (p.id === id) {
              return { ...p, qty: qty };
            }
            return p;
          }),
        });
  };

  getTotals = () => {
    return this.state.cart.reduce(
      (prev, curr) => prev + curr.qty * curr.cost,
      0
    );
  };

  render() {
    return (
      <div className="main">
        <AddProduct data={this.state.products} add={this.addProduct} />
        <Products
          data={this.state.cart}
          update={(id, qty) => this.updateQuantity(id, qty)}
        />
        <div className="totals">
          <div className="totals-v">Total Cost: ${this.getTotals()}</div>
        </div>
      </div>
    );
  }
}

export default KeyAttribute;

// Significance of key attribute:

// React enables declarative programming that keeps your UI in sync with your data. This also means that whenever
// you update your list data, react uses its reconciliation algorithm (react fibre) to track and update
// your interface. This is where the "key" attribute comes into the picture.

// Rendering Multiple Elements:
// When React renders multiple instances of elements of components, it needs to keep track of each rendered
// element with its data source.

// One side we have an array of objects and another side we have a components that this array produces on the UI.
// Typically when you add an element at the end of such a list, React will easily add an instance without touching
// the rest of the elements.

// But what if we add an element on the top?

// In this case and in the absence of tracking React will re-render all the elements to generate a fresh UI.
// Ideally React could just have moved the elements and inserted a new one at the beginning. But since there was
// no correlation between data and the corresponding nodes, the entire list is re-computed and re-rendered.

// On the other hand, if tracking keys are present, React is able to correlate data with the corresponding nodes.

// In this case, when a new item is added to the list, React sees that it can re-purpose the rest of the nodes and
// it just adds a new component instance and re-positions the rest, without modifying or mutating them.

// This massively improves efficiency as you can imagine and prevents unpredictable issues.

// The “key” attribute requires a String value that must be unique for every item in the collection.

// Best Practices:

// Usually, most datasets have some sort of an “id” or attribute which is unique, such as productId, employeeId,
// or even the person’s email address if the record isn’t going to be duplicated within the collection.

// It is important to note that you should never set the key prop to the index value of elements. They are likely
// to cause all sorts of odd behavior in your application.

// This is because the value of the index is never consistent and changes as the contents of the array change over
// time.

// This means it cannot guarantee the position of an element in the list.

// So, unique String values for the “key” prop are mandatory when rendering child elements or components in React.

// If your data set doesn’t provide with such properties then I recommend using the uuid or short-id packages from
// npm to add such ids before they’re rendered in a React application.

// Having said this, there are cases where it is perfectly fine to use the index value for the key prop.

// For instance, if your list is static and won’t be modified, rearranged or sorted in any way, then the index
// number is perfectly valid and safe for use as the key.

// As an example, you may want to display a static data set such as a gallery of images and captions, that comes
// through an API, but never gets updated in realtime in the React application.

// But when rendering dynamic lists that would be modified over time, you must implement unique String keys when
// rendering lists.

// While React’s reconciliation algorithm is smart and optimized, it does need our help to work correctly. The key
// attribute helps React to perform optimal updates when rendering lists.
