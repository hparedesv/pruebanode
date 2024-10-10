const express = require('express');
const router = express.Router();
const { getUsers, addUser, updateUser, deleteUser } = require('../../infrastructure/controllers/userController');


/**
 * @swagger
 * /api/users/list:
 *   post:
 *     summary: Obtener todos los usuarios
 *     description: Obtiene una lista de todos los usuarios registrados en el sistema.
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   userid:
 *                     type: integer
 *                     description: ID del usuario.
 *                   username:
 *                     type: string
 *                     description: Nombre de usuario.
 *                   email:
 *                     type: string
 *                     description: Email del usuario.
 *                   rol_rolid:
 *                     type: integer
 *                     description: ID del rol asignado al usuario.
 *                   userstatus_statusid:
 *                     type: string
 *                     description: Estado del usuario.
 *       500:
 *         description: Error del servidor.
 */
router.post('/list', getUsers);

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
 *               creatorRole:
 *                 type: string
 *                 description: Rol del usuario que está creando al nuevo usuario (Administrador o Gestor).
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente.
 *       400:
 *         description: Error en la solicitud, datos no válidos.
 *       403:
 *         description: Permiso denegado o datos de usuario incompletos.
 *       409:
 *         description: Conflicto, el nombre de usuario ya está en uso.
 *       500:
 *         description: Error del servidor.
 */
router.post('/create', addUser);

/**
 * @swagger
 * /api/users/update:
 *   put:
 *     summary: Actualizar un usuario existente
 *     description: Actualiza la información de un usuario existente con los datos proporcionados.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userid:
 *                 type: integer
 *                 description: ID del usuario a actualizar.
 *               username:
 *                 type: string
 *                 description: Nuevo nombre de usuario.
 *               email:
 *                 type: string
 *                 description: Nuevo correo electrónico.
 *               password:
 *                 type: string
 *                 description: Nueva contraseña.
 *               rol_rolid:
 *                 type: integer
 *                 description: ID del nuevo rol asignado al usuario.
 *     responses:
 *       200:
 *         description: Usuario actualizado exitosamente.
 *       400:
 *         description: Datos no válidos o faltantes.
 *       500:
 *         description: Error del servidor.
 */
router.put('/update', updateUser);

/**
 * @swagger
 * /api/users/delete:
 *   delete:
 *     summary: Eliminar un usuario
 *     description: Elimina un usuario existente de forma lógica.
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
 *         description: Datos no válidos o faltantes.
 *       500:
 *         description: Error del servidor.
 */
router.delete('/delete', deleteUser);

module.exports = router;
