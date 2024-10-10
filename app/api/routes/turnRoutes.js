const express = require('express');
const router = express.Router();
const { getTurns, addTurn, editTurn, removeTurn } = require('../../infrastructure/controllers/turnController');

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
 *               cash_cashid:
 *                 type: integer
 *               usergestorid:
 *                 type: integer
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
 *               description:
 *                 type: string
 *                 description: Nueva descripción del turno (2 letras mayúsculas y 4 números).
 *               cash_cashid:
 *                 type: integer
 *                 description: ID actualizado de la caja asociada.
 *               usergestorid:
 *                 type: integer
 *                 description: ID actualizado del gestor.
 *     responses:
 *       200:
 *         description: Turno actualizado exitosamente.
 *       400:
 *         description: Datos no válidos o faltantes.
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
 *     responses:
 *       200:
 *         description: Turno eliminado exitosamente.
 *       400:
 *         description: Datos no válidos o faltantes.
 *       500:
 *         description: Error del servidor.
 */
router.delete('/delete', removeTurn);

module.exports = router;
