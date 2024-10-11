const Contract = require('../../domain/models/contractModel');
const moment = require('moment');

const getContracts = async (req, res) => {
    try {
        const contracts = await Contract.findAll({ where: { active: true } });
        res.status(200).json(contracts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const addContract = async (req, res) => {
    let { startdate, enddate, service_serviceid, statuscontract_statusid, client_clientid, methodpayment_methodpaymentid } = req.body;

    if (!moment(startdate, 'YYYY-MM-DD HH:mm', true).isValid() || !moment(enddate, 'YYYY-MM-DD HH:mm', true).isValid()) {
        return res.status(400).json({ error: 'El formato de las fechas debe ser AAAA-MM-DD HH:MM.' });
    }

    try {
        const newContract = await Contract.create({ startdate, enddate, service_serviceid, statuscontract_statusid, client_clientid, methodpayment_methodpaymentid });
        res.status(201).json(newContract);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const editContract = async (req, res) => {
    const { contractid, service_serviceid, statuscontract_statusid, methodpayment_methodpaymentid, enddate } = req.body;

    try {
        const updatedContract = await Contract.update(
            { service_serviceid, statuscontract_statusid, methodpayment_methodpaymentid, enddate },
            { where: { contractid, active: true } }
        );
        res.status(200).json(updatedContract);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const removeContract = async (req, res) => {
    const { contractid } = req.body;
    try {
        const deletedContract = await Contract.update({ active: false }, { where: { contractid } });
        res.status(200).json(deletedContract);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getContracts, addContract, editContract, removeContract };
