const express = require("express");
const { body,validationResult } = require('express-validator');

const router = express.Router();


const categoryController = require("../controllers/Category");

const loginValidator = [
  body('title', 'Invalid does not Empty').not().isEmpty(),
]

router.get('/category',  categoryController.getCategories);
router.post("/category", loginValidator, categoryController.create);
router.get("/category/:id", categoryController.findCategory);
router.patch("/category/:id", categoryController.update);
router.delete("/category/:id", categoryController.delete);

module.exports = router;
