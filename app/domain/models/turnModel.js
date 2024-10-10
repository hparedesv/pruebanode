const pool = require('../../application/config/db');
const getAllTurns = async () => {
    const result = await pool.query('SELECT * FROM turn');
    return result.rows;
};
const createTurn = async (description, cash_cashid, usergestorid) => {
    const result = await pool.query(
        'INSERT INTO turn (description, cash_cashid, usergestorid) VALUES ($1, $2, $3) RETURNING *',
        [description, cash_cashid, usergestorid]
    );
    return result.rows[0];
};
const updateTurn = async (turnid, description, cash_cashid, usergestorid) => {
    const result = await pool.query(
        'UPDATE turn SET description = $1, cash_cashid = $2, usergestorid = $3 WHERE turnid = $4 RETURNING *',
        [description, cash_cashid, usergestorid, turnid]
    );
    return result.rows[0];
};
const deleteTurn = async (turnid) => {
    const result = await pool.query(
        'UPDATE turn SET active = false WHERE turnid = $1 RETURNING *',
        [turnid]
    );
    return result.rows[0];
};
module.exports = { getAllTurns, createTurn, updateTurn, deleteTurn };
