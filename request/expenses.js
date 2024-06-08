const { body } = require('express-validator');

exports.create = [
    body('amount', 'Invalid does not Empty').not().isEmpty().escape(),
    body('date', 'Invalid does not Empty').not().isEmpty().escape(),
    body('category', 'Invalid does not Empty').not().isEmpty().escape(),
]

exports.update = [
    body('title', 'Invalid does not Empty').not().isEmpty().escape(),
]