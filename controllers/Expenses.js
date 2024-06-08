const Expenses = require("../models/Expenses");

const { validationResult, matchedData } = require('express-validator');

exports.getExpenses = async (req, res) => {
    const expenses = await Expenses.find().populate("category").populate("sub_category");
    res.send(expenses);
}

exports.create = async (req, res) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
        const expenses = new Expenses({
            title: req.body.title,
            description: req.body.description,
            amount: req.body.amount,
            date: req.body.date,
            category: req.body.category
        });
        await expenses.save();
        res.send(expenses);
        return;
    }

    res.send({ errors: result.array() });
}

exports.findExpenses = async (req, res) => {
    const expenses = await Expenses.findOne({ _id: req.params.id });
    res.send(expenses);
}

exports.update = async (req, res) => {
    try {
        const expenses = await Expenses.findOne({ _id: req.params.id });

        if (req.body.title) {
            expenses.title = req.body.title;
        }

        if (req.body.description) {
            expenses.description = req.body.description;
        }

        if (req.body.amount) {
            expenses.amount = req.body.amount;
        }

        if (req.body.date) {
            expenses.date = req.body.date;
        }

        if (req.body.category) {
            expenses.category = req.body.category;
        }

        await expenses.save();
        res.send(expenses);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

exports.delete = async (req, res) => {
    try {
        await Expenses.deleteOne({ _id: req.params.id });
        res.status(204).send();
    } catch {
        res.status(404);
        res.send({ error: "Expenses doesn't exist!" });
    }
}




