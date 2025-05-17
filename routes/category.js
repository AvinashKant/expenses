const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/Category");
const validator = require("../request/category");



router.get('/category',  categoryController.getCategories);
router.post("/category", validator.create, categoryController.create);
router.get("/category/:id", categoryController.findCategory);
//router.patch("/category/:id", validator.update, categoryController.update);
router.delete("/category/:id", categoryController.delete);

module.exports = router;
