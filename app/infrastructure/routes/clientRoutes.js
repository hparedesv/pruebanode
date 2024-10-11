const express = require('express');
const router = express.Router();
const { getClients, addClient, editClient, removeClient } = require('../controllers/clientController');

/**
 * @swagger
 * /api/clients/list:
 *   get:
 *     summary: Obtener todos los clientes
 *     description: Devuelve una lista de todos los clientes activos en el sistema.
 *     responses:
 *       200:
 *         description: Lista de clientes obtenida exitosamente.
 *       500:
 *         description: Error del servidor.
 */
router.get('/list', getClients);

/**
 * @swagger
 * /api/clients/create:
 *   post:
 *     summary: Crear un nuevo cliente
 *     description: Crea un nuevo cliente en el sistema.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               lastname:
 *                 type: string
 *               identification:
 *                 type: string
 *               email:
 *                 type: string
 *               phonenumber:
 *                 type: string
 *               address:
 *                 type: string
 *               referencedaddress:
 *                 type: string
 *     responses:
 *       201:
 *         description: Cliente creado exitosamente.
 *       409:
 *         description: La identificación ya existe en el sistema.
 *       500:
 *         description: Error del servidor.
 */
router.post('/create', addClient);

/**
 * @swagger
 * /api/clients/update:
 *   put:
 *     summary: Actualizar un cliente existente
 *     description: Actualiza los detalles de un cliente en el sistema.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               clientid:
 *                 type: integer
 *               name:
 *                 type: string
 *               lastname:
 *                 type: string
 *               identification:
 *                 type: string
 *               email:
 *                 type: string
 *               phonenumber:
 *                 type: string
 *               address:
 *                 type: string
 *               referencedaddress:
 *                 type: string
 *     responses:
 *       200:
 *         description: Cliente actualizado exitosamente.
 *       500:
 *         description: Error del servidor.
 */
router.put('/update', editClient);

/**
 * @swagger
 * /api/clients/delete:
 *   delete:
 *     summary: Eliminar un cliente
 *     description: Marca un cliente como inactivo en el sistema.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               clientid:
 *                 type: integer
 *                 description: ID del cliente a eliminar.
 *     responses:
 *       200:
 *         description: Cliente eliminado exitosamente.
 *       500:
 *         description: Error del servidor.
 */
router.delete('/delete', removeClient);

module.exports = router;
