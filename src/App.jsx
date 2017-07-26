import * as React from "react";
import {Component} from 'react';
import './App.css';
import Item from './item'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };

    this.handleEnterPress = this.handleEnterPress.bind(this);
  }

  handleEnterPress(e) {

    if (e.key === 'Enter') {
      const item = {
        name: e.target.value
      }

      this.state.items.push(item)

      this.setState({items: this.state.items});
    }
  }

  render() {
    return (
      <div>
        <div>
          <input type="text" placeholder="请输入待办事项" onKeyPress={this.handleEnterPress}/>
        </div>
        <Item items={this.state.items}/>
      </div>
    );
  }
}

export default App;
