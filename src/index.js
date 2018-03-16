import React from 'react';
import ReactDOM from 'react-dom';

import Searchbar from './components/search_bar';

const API_KEY = 'AIzaSyAbunCOSsRoMp45F56P5bnWhdtG8w1aIaY';

// Create a new component. This component should produce some HTML.
const App = () => {
    return <div>
        <Searchbar />
    </div>;
}

// Take the HTML the component generated and put it on the page (in the DOM).
ReactDOM.render(<App />, document.querySelector('.container'));