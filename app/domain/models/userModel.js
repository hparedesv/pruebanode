const pool = require('../../application/config/db');
const getAllUsers = async () => {
    const result = await pool.query('SELECT * FROM "user"');
    return result.rows;
};
const createUser = async (username, email, password, rol_rolid, userstatus_statusid) => {
    const result = await pool.query(
        'INSERT INTO "user" (username, email, password, rol_rolid, userstatus_statusid) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [username, email, password, rol_rolid, userstatus_statusid]
    );
    return result.rows[0];
};
const updateUserInDB = async (userid, username, email, password, rol_rolid) => {
    const result = await pool.query(
        'UPDATE "user" SET username = $2, email = $3, password = $4, rol_rolid = $5 WHERE userid = $1 RETURNING *',
        [userid, username, email, password, rol_rolid]
    );
    return result.rows[0];
};

const deleteUserInDB = async (userid) => {
    const result = await pool.query(
        'UPDATE "user" SET active = false WHERE userid = $1 RETURNING *',
        [userid]
    );
    return result.rows[0];
};

module.exports = { getAllUsers, createUser, updateUserInDB, deleteUserInDB };
