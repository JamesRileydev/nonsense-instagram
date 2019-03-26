import React, { Component } from 'react';
import './App.css';
import sparkler from './dummy-data'

import PostContainer from './components/PostContainer/PostContainer'

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: sparkler
    }
  }

  render() {
    return (
      <div className="App">
        <PostContainer almond={this.state.data}/>
      </div>
    );
  }
}

export default App;
