const User = require("../models/User");

const criar = (body) => User.create(body)








module.exports = {
    criar,
}