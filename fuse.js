const {FuseBox, BabelPlugin} = require("fuse-box");
const fuse = FuseBox.init({
    homeDir: "src",
    output: "dist/$name.$hash.js",
    hash: true,
    sourceMaps: {inline: false, sourceRoot: "/sources"},
    plugins: [
        [".jsx", BabelPlugin()],
    ]
});

fuse.bundle("app")
    .instructions(`>index.jsx`);

fuse.run();
