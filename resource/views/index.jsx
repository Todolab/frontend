import escapeHtml from 'escape-html'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

import Content from 'resource/components/content'
import Layout from 'resource/views/layout'

class Index extends React.Component {
  render() {
    // pass data to client side js
    // xss!!!
    let dataScript = `window.__list__ = '${escapeHtml(JSON.stringify(this.props.list))}';`;
    // render as a dynamic react component
    let contentString = ReactDOMServer.renderToString(<Content list={this.props.list}/>);

    return (
        <Layout title={this.props.title}>
          <h1>{this.props.title}</h1>
          <div id="content" dangerouslySetInnerHTML={{__html: contentString}}>
          </div>
          <script dangerouslySetInnerHTML={{__html: dataScript}}></script>
        </Layout>
    );
  }
}

Index.propTypes = {
  title: React.PropTypes.string,
  list: React.PropTypes.array
}


export default Index;
