const { body } = require('express-validator');

exports.create = [
    body('description', 'Invalid does not Empty').not().isEmpty().escape(),
    body('amount', 'Invalid does not Empty').not().isEmpty().escape(),
    body('date', 'Invalid does not Empty').not().isEmpty().escape(),
    body('category', 'Invalid does not Empty').not().isEmpty().escape(),
    body('sub_category', 'Invalid does not Empty').not().isEmpty().escape(),
]
