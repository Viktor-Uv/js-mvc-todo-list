const formidable = require("formidable");

const {create, readAll, remove} = require("../model/todo");

exports.create = (req, res) => {
    const form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, async (err, fields) => {
        const {description} = fields;
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        if (!description) {
            return res.status(400).json({
                error: "Description is required"
            });
        }
        create(description, (err, result) => {
            if (err) {
                return res.status(400).json(err);
            }
            res.status(201).json({
                data: result.rows[0]
            });
        });
    });
};

exports.readAll = (req, res) => {
    readAll((err, result) => {
        if (err) {
            return res.status(400).json(err);
        }
        res.status(200).json({
            data: result.rows
        });
    });
};
