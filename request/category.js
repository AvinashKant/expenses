const { body } = require('express-validator');

exports.create = [
    body('title', 'Invalid does not Empty').not().isEmpty().escape(),
]

exports.update = [
    body('title', 'Invalid does not Empty').not().isEmpty().escape(),
]