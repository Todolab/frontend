import React from 'react'

class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  handleDeleteItem(id) {
    this.props.delete(id)
  }

  render() {
    const items = this.props.items;
    let listItems = '';
    if (items) {
      listItems = items.map((item) =>
        <li key={item.name.toString()}>
          {item.name} <button onClick={this.handleDeleteItem.bind(this, item.name)}>x</button>
        </li>
      );
    }

    return (
      <ul>{listItems}</ul>
    );
  }
}

export default Item
