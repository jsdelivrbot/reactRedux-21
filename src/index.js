import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import Searchbar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyAbunCOSsRoMp45F56P5bnWhdtG8w1aIaY';

// Create a new component. This component should produce some HTML.
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { videos: [] };
        YTSearch({key: API_KEY, term: 'cats'}, (videos) => {
            this.setState({ videos });
        });      
    }

    render() {
        return <div>
            <Searchbar />
            <VideoList videos={this.state.videos} />
        </div>;
    }    
}

// Take the HTML the component generated and put it on the page (in the DOM).
ReactDOM.render(<App />, document.querySelector('.container'));