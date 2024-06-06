const Category = require("../models/Category");
const { validationResult } = require('express-validator');



exports.getCategories = async (req, res) => {
    const category = await Category.find();
    res.send(category);
}

exports.create = async (req, res) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
        const category = new Category({
            title: req.body.title
        });
        await category.save();
        res.send(category);
    }

    res.send({ errors: result.array() });
}


exports.findCategory = async (req, res) => {
    const category = await Category.findOne({ _id: req.params.id });
    res.send(category);
}


exports.update = async (req, res) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
        try {
            const category = await Category.findOne({ _id: req.params.id });

            if (req.body.title) {
                category.title = req.body.title;
            }

            await category.save();
            res.send(category);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }
    res.send({ errors: result.array() });
}


exports.delete = async (req, res) => {
    try {
        await Category.deleteOne({ _id: req.params.id });
        res.status(204).send();
    } catch {
        res.status(404);
        res.send({ error: "Category doesn't exist!" });
    }
}