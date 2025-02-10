const Category = require("../models/Category");
const { validationResult, matchedData } = require('express-validator');

exports.getCategories = async (req, res) => {
    const category = await Category.find();
    res.send(category);
}

exports.create = async (req, res) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
        const data = matchedData(req);
        const category = new Category({
            title: data.title
        });
        await category.save();
        res.send(category);
        return;
    }

    res.send({ errors: result.array() });
}

exports.findCategory = async (req, res) => {
    const category = await Category.findOne({ _id: req.params.id });
    res.send(category);
}

exports.update = async (req, res) => {
    try {
        const result = validationResult(req);
        if (result.isEmpty()) {
            const data = matchedData(req);
            const category = await Category.findOne({ _id: req.params.id });

            if (data.title) {
                category.title = data.title;
            }
            await category.save();
            res.send(category);
            return;
        }
        res.send({ errors: result.array() });
    } catch (error) {
        res.status(404);
        res.send({ error: "Category doesn't exist!" });
    }
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
