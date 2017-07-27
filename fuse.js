const {
  FuseBox,
  SVGPlugin,
  CSSPlugin,
  BabelPlugin,
  WebIndexPlugin,
} = require("fuse-box");

const path = require('path')


let fuse, app, vendor, isProduction;


fuse = FuseBox.init({
  homeDir: "src",
  output: "dist/$name.js",
  sourceMaps: {project: true, vendor: true},
  plugins: [
    SVGPlugin(), CSSPlugin(), BabelPlugin(),
    WebIndexPlugin({
      title: "Todolab",
      template: path.resolve(__dirname, 'src', 'index.html')
    })
  ]
});

// vendor
vendor = fuse.bundle("vendor").instructions("~ index.jsx")

// bundle app
app = fuse.bundle("app").instructions("> [index.jsx]")


fuse.dev({
  port: process.env.PORT
});

app.watch().hmr()

// detect file changes on a mounted volume
fuse.run({chokidar: {usePolling: true}})
