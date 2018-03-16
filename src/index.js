import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component. This component should produce some HTML.
const App = () => {
    return <div>Hi!</div>;
}

// Take the HTML the component generated and put it on the page (in the DOM).
ReactDOM.render(<App />, document.querySelector('.container'));