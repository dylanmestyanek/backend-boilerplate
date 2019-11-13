const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Users = require("../models/users-model");
const secrets = require("../config/secrets-config");
const validateRegister = require("../middleware/validateRegister-middleware");
const validateLogin = require("../middleware/validateLogin-middleware");

// POST - Register a user
router.post("/register", validateRegister, (req, res) => {
    const user = req.body;
    const hash = bcrypt.hashSync(user.password, 12);

    user.password = hash;

    Users.add(user)
    .then(user => res.status(200).json(user))
    .catch(err => res.status(500).json({ error: "There was an error while registering the user." }));
});

// POST - Login a user
router.post("/login", validateLogin, (req, res) => {
    const { username, password } = req.body;

    Users.getByUsername(username)
    .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = generateToken(user);

            res.status(200).json({ message: "Success! You are logged in!", token })
        } else {
            res.status(401).json({ message: "Please provide valid login credentials." })
        }
    })
    .catch(err => res.status(500).json({ error: "There was error while logging in the user." }))
});

// Create an authentication token
function generateToken(user) {
    const payload = {
        id: user.id,
        username: user.username
    };

    const options = { expiresIn: '8hr' };

    return jwt.sign(payload, secrets.jwtSecret, options);
};

module.exports = router;