const express = require('express');
const {create, readAll, remove} = require('../controller');
const router = express.Router();
const PATH = "/todo";

router.post(`${PATH}`, create);
router.get(`${PATH}/:id`, readAll);
router.delete(`${PATH}/:id`, remove);

module.exports = router;
