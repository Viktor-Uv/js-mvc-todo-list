exports.up = (pgm) => {
    pgm.db.query(`
        CREATE TABLE todo(
            todo_id     SERIAL PRIMARY KEY,
            description VARCHAR(225) NOT NULL)
    `);
};

exports.down = (pgm) => {
    pgm.db.query("DROP TABLE IF EXISTS todo");
}
