const db = require("../database/db-config");

module.exports = {
    get,
    getById,
    getByUsername,
    add
};

function get() {
    return db('users');
};

function getById(id) {
    return db('users')
        .select('id', 'username')
        .where({ id })
        .first();
};

function getByUsername(username) {
    return db('users')
        .where({ username })
        .first();
};

function add(user) {
    return db('users')
        .insert(user, 'id')
        .then(([id]) => getById(id));
};