module.exports = server => {
    server.use(require("express").json());
    server.use(require("helmet")());
    server.use(require("cors")());
    server.use(require("morgan")("dev"));
}