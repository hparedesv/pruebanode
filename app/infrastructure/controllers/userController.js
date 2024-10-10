const { getAllUsers, createUser,updateUserInDB, deleteUserInDB  } = require('../../domain/models/userModel');
const pool = require('../../application/config/db');
const isValidUsername = (username) => /^[A-Za-z\d]{8,20}$/.test(username);
const isValidPassword = (password) => /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,30}$/.test(password);
const getUsers = async (req, res) => {
    try {
        const users = await getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const addUser = async (req, res) => {
    let { username, email, password, rol_rolid, userstatus_statusid, creatorRole } = req.body;
    if (!username || !email || !password || !rol_rolid || !userstatus_statusid || !creatorRole) {
        return res.status(403).json({ error: 'Todos los campos son obligatorios para crear un usuario' });
    }
    if (!isValidUsername(username)) {
        return res.status(400).json({ error: 'El nombre de usuario debe tener entre 8 y 20 caracteres, contener letras y al menos un número, sin caracteres especiales.' });
    }
    if (!isValidPassword(password)) {
        return res.status(400).json({ error: 'La contraseña debe tener al menos una mayúscula, un número y estar entre 8 y 30 caracteres.' });
    }
    try {
        const userExists = await pool.query('SELECT * FROM "user" WHERE username = $1', [username]);
        if (userExists.rows.length > 0) {
            return res.status(409).json({ error: 'El nombre de usuario ya está en uso' });
        }

        if (creatorRole === 'Administrador') {
            if (rol_rolid !== 2 && rol_rolid !== 3) { // 2 = Gestor, 3 = Cajero
                return res.status(403).json({ error: 'Los administradores solo pueden crear usuarios cajeros y gestores.' });
            }
        } else if (creatorRole === 'Gestor') {
            if (rol_rolid !== 2 && rol_rolid !== 3) { // 2 = Gestor, 3 = Cajero
                return res.status(403).json({ error: 'Los gestores solo pueden crear usuarios cajeros y gestores.' });
            }
            userstatus_statusid = 'P01'; // Estado 'P01' para 'Pendiente de aprobación'
        } else {
            return res.status(403).json({ error: 'Solo los administradores y gestores pueden crear usuarios.' });
        }
        const newUser = await createUser(username, email, password, rol_rolid, userstatus_statusid);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const updateUser = async (req, res) => {
    const { userid, username, email, password, rol_rolid } = req.body;
    if (!userid) {
        return res.status(400).json({ error: 'El ID del usuario es obligatorio para actualizar.' });
    }

    try {
        const updatedUser = await updateUserInDB(userid, username, email, password, rol_rolid);
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteUser = async (req, res) => {
    const { userid } = req.body;
    if (!userid) {
        return res.status(400).json({ error: 'El ID del usuario es obligatorio para eliminar.' });
    }

    try {
        const deletedUser = await deleteUserInDB(userid);
        res.status(200).json(deletedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
module.exports = { getUsers, addUser, updateUser, deleteUser };

