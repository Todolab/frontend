
var React = require('react');

var Layout = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },

  render: function() {
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
});

module.exports = Layout;
