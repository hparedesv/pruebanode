const pool = require('../../application/config/db');

const getAllContracts = async () => {
    const result = await pool.query('SELECT * FROM contract');
    return result.rows;
};

const createContract = async (startdate, enddate, service_serviceid, statuscontract_statusid, client_clientid, methodpayment_methodpaymentid) => {
    const result = await pool.query(
        `INSERT INTO contract (startdate, enddate, service_serviceid, statuscontract_statusid, client_clientid, methodpayment_methodpaymentid)
         VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
        [startdate, enddate, service_serviceid, statuscontract_statusid, client_clientid, methodpayment_methodpaymentid]
    );
    return result.rows[0];
};

const updateContract = async (contractid, service_serviceid, statuscontract_statusid, methodpayment_methodpaymentid, enddate = null) => {
    const query = `
        UPDATE contract 
        SET service_serviceid = COALESCE($2, service_serviceid), 
            statuscontract_statusid = COALESCE($3, statuscontract_statusid), 
            methodpayment_methodpaymentid = COALESCE($4, methodpayment_methodpaymentid),
            enddate = COALESCE($5, enddate)
        WHERE contractid = $1 
        RETURNING *`;

    const result = await pool.query(query, [contractid, service_serviceid, statuscontract_statusid, methodpayment_methodpaymentid, enddate]);
    return result.rows[0];
};

const deleteContract = async (contractid) => {
    const result = await pool.query(
        'UPDATE contract SET active = false WHERE contractid = $1 RETURNING *', [contractid]
    );
    return result.rows[0];
};

module.exports = { getAllContracts, createContract, updateContract, deleteContract };
