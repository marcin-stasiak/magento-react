const path = require("path");

module.exports = {
    entry: path.join(__dirname, "/src/index.js"),
    output: {
        path: path.join(__dirname, "/view/base/web/js"),
        filename: "vendor.bundle.js"
    },
}
