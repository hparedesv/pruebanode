const Client = require('../../domain/models/clientModel');

const getClients = async (req, res) => {
    try {
        const clients = await Client.findAll({ where: { active: true } });
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
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'El correo electrónico no es válido.' });
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
        const clientExists = await Client.findOne({ where: { identification } });
        if (clientExists) {
            return res.status(409).json({ error: 'La identificación ya existe en el sistema.' });
        }

        const newClient = await Client.create({ name, lastname, identification, email, phonenumber, address, referencedaddress });
        res.status(201).json(newClient);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const editClient = async (req, res) => {
    const { clientid, name, lastname, identification, email, phonenumber, address, referencedaddress } = req.body;

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
        const updatedClient = await Client.update(
            { name, lastname, identification, email, phonenumber, address, referencedaddress },
            { where: { clientid, active: true } }
        );
        res.status(200).json(updatedClient);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const removeClient = async (req, res) => {
    const { clientid } = req.body;
    try {
        const deletedClient = await Client.update({ active: false }, { where: { clientid } });
        res.status(200).json(deletedClient);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getClients, addClient, editClient, removeClient };
