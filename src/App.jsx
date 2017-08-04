import * as React from 'react';
import {Component} from 'react';
import './App.css';
import Item from './item';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };

    this.handleEnterPress = this.handleEnterPress.bind(this);
    this.handlerDeleteItem = this.handlerDeleteItem.bind(this);
  }

  handleEnterPress(e) {
    if (e.key === 'Enter') {
      const item = {
        name: e.target.value,
        id: index
      };

      this.state.items.push(item);
      let index = this.state.index + 1
      this.setState({
        items: this.state.items,
        index: index
      });
    }
  }

  handlerDeleteItem(name) {
    let items = this.state.items, data;
    data = items.filter(el => {
      return el.name != name;
    })

     this.setState({items: data});
  }

  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            placeholder="请输入待办事项"
            onKeyPress={this.handleEnterPress}
          />
        </div>
        <Item delete={this.handlerDeleteItem} items={this.state.items}/>
      </div>
    );
  }
}

export default App;
