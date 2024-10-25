const pool = require("database");

exports.create = (description, cb) => {
    pool.query("INSERT INTO todo(description) VALUES ($1) RETURNING *;", [
            description
        ], cb);
};

exports.readAll = (cb) => {
    pool.query("SELECT * FROM todo;", cb);
};

exports.remove = (todoId, cb) => {
    pool.query("DELETE FROM todo WHERE todo_id = $1;", [
        todoId
    ], cb);
};
