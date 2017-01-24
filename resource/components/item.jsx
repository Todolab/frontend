import React from 'react'

class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <li>
          <span className="item">{this.props.content}</span>
          <span className="remove" onClick={this.props.remove}>x</span>
        </li>
    );
  }
}

Item.propTypes = {
  remove: React.PropTypes.func,
  content: React.PropTypes.string
}

export default Item;
