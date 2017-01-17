/**
 * Created by stevenjlho on 05/01/2017.
 */


require("babel-register")({
  "presets": [
    ["env", {
      "targets": {
        "node": "current"
      }
    }],
    "react"
  ],
  "plugins": [
    ["module-resolver", {
      "root": ["./"]
    }]
  ]
});

require('./app.js')
