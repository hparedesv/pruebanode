const { getAllClients, createClient, updateClient, deleteClient } = require('../../domain/models/clientModel');
const pool = require('../../application/config/db');

const getClients = async (req, res) => {
    try {
        const clients = await getAllClients();
        res.status(200).json(clients);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const addClient = async (req, res) => {
    const { name, lastname, identification, email, phonenumber, address, referencedaddress } = req.body;
    if (!/^\d{10,13}$/.test(identification)) {
        return res.status(400).json({ error: 'La identificación debe tener entre 10 y 13 dígitos y solo contener números.' });
    }
    if (!/^09\d{8}$/.test(phonenumber)) {
        return res.status(400).json({ error: 'El número de teléfono debe empezar con 09 y tener 10 dígitos.' });
    }
    if (address.length < 20 || address.length > 100) {
        return res.status(400).json({ error: 'La dirección debe tener entre 20 y 100 caracteres.' });
    }
    if (referencedaddress.length < 20 || referencedaddress.length > 100) {
        return res.status(400).json({ error: 'La referencia de dirección debe tener entre 20 y 100 caracteres.' });
    }
    try {
        const clientExists = await pool.query('SELECT * FROM client WHERE identification = $1', [identification]);
        if (clientExists.rows.length > 0) {
            return res.status(400).json({ error: 'La identificación ya existe en el sistema.' });
        }
        const newClient = await createClient(name, lastname, identification, email, phonenumber, address, referencedaddress);
        res.status(201).json(newClient);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const editClient = async (req, res) => {
    const { clientid, name, lastname, identification, email, phonenumber, address, referencedaddress } = req.body;

    if (!clientid) {
        return res.status(400).json({ error: 'El ID del cliente es obligatorio para actualizar.' });
    }
    try {
        const updatedClient = await updateClient(clientid, name, lastname, identification, email, phonenumber, address, referencedaddress);
        res.status(200).json(updatedClient);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const removeClient = async (req, res) => {
    const { clientid } = req.body;

    if (!clientid) {
        return res.status(400).json({ error: 'El ID del cliente es obligatorio para eliminar.' });
    }
    try {
        const deletedClient = await deleteClient(clientid);
        res.status(200).json(deletedClient);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getClients, addClient, editClient, removeClient };
