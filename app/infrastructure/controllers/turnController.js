const { getAllTurns, createTurn, updateTurn, deleteTurn } = require('../../domain/models/turnModel');
const isValidTurnDescription = (description) => /^[A-Z]{2}\d{4}$/.test(description);
const getTurns = async (req, res) => {
    try {
        const turns = await getAllTurns();
        res.status(200).json(turns);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const addTurn = async (req, res) => {
    const { description, cash_cashid, usergestorid } = req.body;

    if (!description || !cash_cashid || !usergestorid) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios para crear un turno' });
    }
    if (!isValidTurnDescription(description)) {
        return res.status(400).json({ error: 'La descripción del turno debe tener 2 letras mayúsculas seguidas de 4 números (ejemplo: AC0001).' });
    }

    try {
        const newTurn = await createTurn(description, cash_cashid, usergestorid);
        res.status(201).json(newTurn);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const editTurn = async (req, res) => {
    const { turnid, description, cash_cashid, usergestorid } = req.body;

    if (!turnid || !description || !cash_cashid || !usergestorid) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios para actualizar un turno' });
    }

    if (!isValidTurnDescription(description)) {
        return res.status(400).json({ error: 'La descripción del turno debe tener 2 letras mayúsculas seguidas de 4 números (ejemplo: AC0001).' });
    }

    try {
        const updatedTurn = await updateTurn(turnid, description, cash_cashid, usergestorid);
        res.status(200).json(updatedTurn);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const removeTurn = async (req, res) => {
    const { turnid } = req.body;

    if (!turnid) {
        return res.status(400).json({ error: 'El ID del turno es obligatorio para eliminarlo' });
    }

    try {
        const deletedTurn = await deleteTurn(turnid);
        res.status(200).json(deletedTurn);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
module.exports = { getTurns, addTurn, editTurn, removeTurn };
