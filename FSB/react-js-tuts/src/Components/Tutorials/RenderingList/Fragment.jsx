import React from 'react'

const Fragment = () => {
  return (
    <div>
        <div>React Fragments</div>
    </div>
  )
}

export default Fragment;



// Why Use Fragments?

// By now, you should be able to render lists of React components or elements.  
// React makes it really easy to iterate over a collection and render component instances.  

// But React components can really render one root element. 

// For instance, rendering multiple top-level elements is not allowed. 

// This is why we often end up wrapping multiple instances of elements or dynamically generated list nodes inside divs or some other wrapping element.

// 