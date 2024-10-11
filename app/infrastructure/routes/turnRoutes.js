const express = require('express');
const router = express.Router();
const { getTurns, addTurn, editTurn, removeTurn } = require('../controllers/turnController');

/**
 * @swagger
 * /api/turns/list:
 *   get:
 *     summary: Obtener todos los turnos
 *     description: Devuelve una lista de todos los turnos registrados.
 *     responses:
 *       200:
 *         description: Lista de turnos obtenida exitosamente.
 *       500:
 *         description: Error del servidor.
 */
router.get('/list', getTurns);

/**
 * @swagger
 * /api/turns/create:
 *   post:
 *     summary: Crear un nuevo turno
 *     description: Crea un nuevo turno con la descripción dada.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               description:
 *                 type: string
 *                 description: Descripción del turno (2 letras mayúsculas y 4 números).
 *               cash_cashid:
 *                 type: integer
 *                 description: ID de la caja asociada.
 *               usergestorid:
 *                 type: integer
 *                 description: ID del gestor.
 *     responses:
 *       201:
 *         description: Turno creado exitosamente.
 *       400:
 *         description: Datos no válidos o faltantes.
 *       500:
 *         description: Error del servidor.
 */
router.post('/create', addTurn);

/**
 * @swagger
 * /api/turns/update:
 *   put:
 *     summary: Actualizar un turno existente
 *     description: Actualiza un turno existente con la nueva información proporcionada.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               turnid:
 *                 type: integer
 *                 description: ID del turno a actualizar.
 *                 example: 1
 *               description:
 *                 type: string
 *                 description: Descripción del turno.
 *                 example: 'AA1234'
 *               cash_cashid:
 *                 type: integer
 *                 description: ID de la caja asociada al turno.
 *                 example: 2
 *               usergestorid:
 *                 type: integer
 *                 description: ID del usuario gestor del turno.
 *                 example: 3
 *               date:
 *                 type: string
 *                 format: date-time
 *                 description: Fecha del turno.
 *                 example: '2024-10-11T00:00:00Z'
 *               active:
 *                 type: boolean
 *                 description: Estado del turno (activo o inactivo).
 *                 example: true
 *     responses:
 *       200:
 *         description: Turno actualizado exitosamente.
 *       400:
 *         description: Error en la solicitud, datos no válidos.
 *       500:
 *         description: Error del servidor.
 */
router.put('/update', editTurn);

/**
 * @swagger
 * /api/turns/delete:
 *   delete:
 *     summary: Eliminar un turno
 *     description: Elimina un turno existente de forma lógica.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               turnid:
 *                 type: integer
 *                 description: ID del turno a eliminar.
 *                 example: 1
 *     responses:
 *       200:
 *         description: Turno eliminado exitosamente.
 *       400:
 *         description: Error en la solicitud, datos no válidos.
 *       500:
 *         description: Error del servidor.
 */
router.delete('/delete', removeTurn);


module.exports = router;
