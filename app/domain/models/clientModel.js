const pool = require('../../application/config/db');
const getAllClients = async () => {
    const result = await pool.query('SELECT * FROM client WHERE active = true');
    return result.rows;
};
const createClient = async (name, lastname, identification, email, phonenumber, address, referencedaddress) => {
    const result = await pool.query(
        'INSERT INTO client (name, lastname, identification, email, phonenumber, address, referencedaddress, active) VALUES ($1, $2, $3, $4, $5, $6, $7, true) RETURNING *',
        [name, lastname, identification, email, phonenumber, address, referencedaddress]
    );
    return result.rows[0];
};
const updateClient = async (clientid, name, lastname, identification, email, phonenumber, address, referencedaddress) => {
    const result = await pool.query(
        'UPDATE client SET name = $2, lastname = $3, identification = $4, email = $5, phonenumber = $6, address = $7, referencedaddress = $8 WHERE clientid = $1 AND active = true RETURNING *',
        [clientid, name, lastname, identification, email, phonenumber, address, referencedaddress]
    );
    return result.rows[0];
};

const deleteClient = async (clientid) => {
    const result = await pool.query(
        'UPDATE client SET active = false WHERE clientid = $1 RETURNING *',
        [clientid]
    );
    return result.rows[0];
};
module.exports = { getAllClients, createClient, updateClient, deleteClient };
