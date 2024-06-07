const express = require("express");
const expensesController = require("../controllers/Expenses");
const validator = require("../request/expenses");
const router = express.Router();


router.get("/expenses", expensesController.getExpenses);

router.post("/expenses", validator.create, expensesController.create);

router.get("/expenses/:id", expensesController.findExpenses);

router.patch("/expenses/:id", validator.update,expensesController.update);

router.delete("/expenses/:id", expensesController.delete);

module.exports = router;