'use strict';

module.exports = {
    entry: __dirname + "/resources/assets/angular/app", // string | object | array
    // Here the application starts executing
    // and webpack starts bundling

    output: {
        // options related to how webpack emits results

        path: __dirname + "/public/angular", // string
        // the target directory for all output files
        // must be an absolute path (use the Node.js path module)

        filename: "bundle.js", // string
        // the filename template for entry chunks
    },
    watch : true,

    watchOptions : {
        aggregateTimeout: 100
    }
};