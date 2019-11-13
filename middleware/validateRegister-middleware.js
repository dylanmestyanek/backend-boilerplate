module.exports = (req, res, next) => {
    const user = req.body;

    if (!user.username || !user.password) {
        res.status(400).json({ message: "Please provide a username and password." })
    } else {
        next();
    };
};