const express = require("express");
const router = express.Router();

const expensesController = require("../controllers/Expenses");

router.get("/expenses", expensesController.getExpenses);

router.post("/expenses", expensesController.create);

router.get("/expenses/:id", expensesController.findExpenses);

router.patch("/expenses/:id", expensesController.update);

router.delete("/expenses/:id", expensesController.delete);

module.exports = router;