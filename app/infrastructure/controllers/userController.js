const User = require('../../domain/models/userModel');

const getUsers = async (req, res) => {
    try {
        const users = await User.findAll({ where: { active: true } });
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const addUser = async (req, res) => {
    const { username, email, password, rol_rolid, userstatus_statusid } = req.body;

    if (!/^[A-Za-z\d]{8,50}$/.test(username)) {
        return res.status(400).json({ error: 'El nombre de usuario debe tener entre 8 y 50 caracteres, y contener letras y al menos un número.' });
    }

    if (!/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,30}$/.test(password)) {
        return res.status(400).json({ error: 'La contraseña debe tener al menos una letra mayúscula, un número, y estar entre 8 y 30 caracteres.' });
    }

    try {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: 'El formato del correo electrónico no es válido.' });
        }
        const userExists = await User.findOne({ where: { email } });
        if (userExists) {
            return res.status(409).json({ error: 'El correo electrónico ya está registrado en el sistema.' });
        }
        const statusExists = await UserStatus.findOne({ where: { statusid: userstatus_statusid } });
        if (!statusExists) {
            return res.status(400).json({ error: 'El estatus del usuario proporcionado no es válido.' });
        }
        const newUser = await User.create({ username, email, password, rol_rolid, userstatus_statusid });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateUser = async (req, res) => {
    const { userid, username, email, password, rol_rolid, userstatus_statusid } = req.body;
    try {
        const updatedUser = await User.update(
            { username, email, password, rol_rolid, userstatus_statusid },
            { where: { userid, active: true } }
        );
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteUser = async (req, res) => {
    const { userid } = req.body;
    try {
        const deletedUser = await User.update({ active: false }, { where: { userid } });
        res.status(200).json(deletedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getUsers, addUser, updateUser, deleteUser };
