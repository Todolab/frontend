/**
 * Created by stevenjlho on 05/01/2017.
 */

require("babel-core").transform("code", {
  "presets": [
    ["env", {
      "targets": {
        "node": "current"
      }
    }]
  ]
});

require('./app.js')
