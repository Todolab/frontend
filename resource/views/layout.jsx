
import React from 'react'

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="/bundle.css" />
        </head>
        <body>
          {this.props.children}
          <script src="/bundle.js"></script>
        </body>
      </html>
    );
  }
}

Layout.propTypes = {
  title: React.PropTypes.string
}

export default Layout;
