import React from 'react'
import Create from 'resource/components/create'
import Item from 'resource/components/item'

import styled from 'styled-components';

const Ul = styled.ul`
      padding: 4em;
      background: papayawhip;
    `;

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: this.props.list }
  }

  render() {
    return (
      <div>
        <Ul>
          {this.state.list.map((content, index) => {
            return <Item content={content} key={index} remove={this.remove.bind(this, index)} />;
          })}
        </Ul>
        <Create add={this.add} />
      </div>
    );
  }

  add(content) {
    this.setState({
      list: this.state.list.concat(content)
    });
  }

  remove(index) {
    this.state.list.splice(index, 1);
    this.setState({
      list: this.state.list
    });
  }
}


Content.propTypes = {
  list: React.PropTypes.array
}

export default Content;
