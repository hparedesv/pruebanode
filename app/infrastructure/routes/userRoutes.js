const express = require('express');
const router = express.Router();
const { getUsers, addUser, updateUser, deleteUser } = require('../controllers/userController');

/**
 * @swagger
 * /api/users/list:
 *   get:
 *     summary: Obtener todos los usuarios
 *     description: Obtiene una lista de todos los usuarios registrados en el sistema.
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida exitosamente.
 *       500:
 *         description: Error del servidor.
 */
router.get('/list', getUsers);

/**
 * @swagger
 * /api/users/create:
 *   post:
 *     summary: Crear un nuevo usuario
 *     description: Crea un nuevo usuario en el sistema con los datos proporcionados.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: El nombre de usuario.
 *               email:
 *                 type: string
 *                 description: Correo electrónico del usuario.
 *               password:
 *                 type: string
 *                 description: Contraseña del usuario.
 *               rol_rolid:
 *                 type: integer
 *                 description: ID del rol asignado al usuario.
 *               userstatus_statusid:
 *                 type: string
 *                 description: Estado inicial del usuario.
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente.
 *       400:
 *         description: Error en la solicitud, datos no válidos.
 */
router.post('/create', addUser);

/**
 * @swagger
 * /api/users/update:
 *   put:
 *     summary: Actualizar un usuario existente
 *     description: Actualiza los detalles de un usuario existente en el sistema.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userid:
 *                 type: integer
 *                 description: ID del usuario.
 *               username:
 *                 type: string
 *                 description: El nombre de usuario.
 *               email:
 *                 type: string
 *                 description: Correo electrónico del usuario.
 *               password:
 *                 type: string
 *                 description: Contraseña del usuario.
 *               rol_rolid:
 *                 type: integer
 *                 description: ID del rol asignado al usuario.
 *               userstatus_statusid:
 *                 type: string
 *                 description: Estado del usuario.
 *     responses:
 *       200:
 *         description: Usuario actualizado exitosamente.
 *       400:
 *         description: Error en la solicitud, datos no válidos.
 *       500:
 *         description: Error del servidor.
 */
router.put('/update', updateUser);

/**
 * @swagger
 * /api/users/delete:
 *   delete:
 *     summary: Eliminar un usuario
 *     description: Marca un usuario como inactivo en el sistema.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userid:
 *                 type: integer
 *                 description: ID del usuario a eliminar.
 *     responses:
 *       200:
 *         description: Usuario eliminado exitosamente.
 *       400:
 *         description: Error en la solicitud, datos no válidos.
 *       500:
 *         description: Error del servidor.
 */
router.delete('/delete', deleteUser);

module.exports = router;
