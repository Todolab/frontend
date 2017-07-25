const {FuseBox, BabelPlugin, WebIndexPlugin} = require("fuse-box");
const path = require('path');

const fuse = FuseBox.init({
    homeDir: "src",
    output: "dist/$name.js",
    sourceMaps: {inline: false, sourceRoot: "/sources"},
    hash: true,
    plugins: [
        [".jsx", BabelPlugin()],
        WebIndexPlugin({
            title: 'Todolab',
            template: path.resolve(__dirname, 'views', 'index.html')
        })
    ]
});


fuse.bundle("app")
    .instructions(`>index.jsx`);

fuse.run();
