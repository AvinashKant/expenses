const express = require("express");
const expensesController = require("../controllers/Expenses");
const validator = require("../request/expenses");
const router = express.Router();


router.get("/daily-expenses", expensesController.getExpenses);
router.post("/daily-expenses", validator.create, expensesController.create);
router.get("/daily-expenses/:id", expensesController.findExpenses);
//router.patch("/daily-expenses/:id", validator.update, expensesController.update);
router.delete("/daily-expenses/:id", expensesController.delete);

module.exports = router;
