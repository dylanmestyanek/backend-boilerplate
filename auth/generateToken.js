const jwt = require("jsonwebtoken");

const secrets = require("../config/secrets-config");

module.exports = user => {
    const payload = {
        id: user.id,
        username: user.username
    };

    const options = { expiresIn: '8hr' };

    return jwt.sign(payload, secrets.jwtSecret, options);
};