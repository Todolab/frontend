import React from 'react'

class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const items = this.props.items;
    let listItems = '';
    if (items) {
      listItems = items.map((item) =>
        <li key={item.name.toString()}>
          {item.name}
        </li>
      );
    }

    return (
      <ul>{listItems}</ul>
    );
  }
}

export default Item
