const {
    FuseBox,
    SVGPlugin,
    CSSPlugin,
    BabelPlugin,
    QuantumPlugin,
    WebIndexPlugin,
    Sparky
} = require("fuse-box");

const path = require('path')

let fuse, app, vendor, isProduction;
Sparky.task("config", () => {
    fuse = new FuseBox({
        homeDir: "src/",
        sourceMaps: true,
        hash: isProduction,
        output: "dist/$name.js",
        target : "browser",
        plugins: [
            SVGPlugin(), CSSPlugin(), BabelPlugin(),
            WebIndexPlugin({
              title: "Todolab",
              template: path.resolve(__dirname, 'src', 'index.html')
            }),
            isProduction && QuantumPlugin({
                removeExportsInterop: false,
                uglify: true
            })
        ]
    });
    // vendor
    vendor = fuse.bundle("vendor").instructions("~ index.jsx")

    // bundle app
    app = fuse.bundle("app").instructions("> [index.jsx]")
});

Sparky.task("default", ["clean", "config"], () => {
    fuse.dev({
      port: process.env.PORT
    });
    // add dev instructions
    app.watch().hmr({reload: true})

    return fuse.run({chokidar: {usePolling: true}})
});

Sparky.task("clean", () => Sparky.src("dist/").clean("dist/"));
Sparky.task("prod-env", ["clean"], () => { isProduction = true })
Sparky.task("dist", ["prod-env", "config"], () => {
    // comment out to prevent dev server from running (left for the demo)
    fuse.dev();
    return fuse.run();
});
