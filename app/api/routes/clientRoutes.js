const express = require('express');
const router = express.Router();
const { getClients, addClient, editClient, removeClient } = require('../../infrastructure/controllers/clientController');

/**
 * @swagger
 * /api/clients/list:
 *   post:
 *     summary: Obtener todos los clientes
 *     description: Obtiene una lista de todos los clientes registrados en el sistema.
 *     responses:
 *       200:
 *         description: Lista de clientes obtenida exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   clientid:
 *                     type: integer
 *                     description: ID del cliente.
 *                   name:
 *                     type: string
 *                     description: Nombre del cliente.
 *                   lastname:
 *                     type: string
 *                     description: Apellido del cliente.
 *                   identification:
 *                     type: string
 *                     description: Identificación del cliente.
 *       500:
 *         description: Error del servidor.
 */
router.post('/list', getClients);

/**
 * @swagger
 * /api/clients/create:
 *   post:
 *     summary: Crear un nuevo cliente
 *     description: Crea un nuevo cliente en el sistema con los datos proporcionados.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nombre del cliente.
 *               lastname:
 *                 type: string
 *                 description: Apellido del cliente.
 *               identification:
 *                 type: string
 *                 description: Identificación del cliente.
 *               email:
 *                 type: string
 *                 description: Correo electrónico del cliente.
 *               phonenumber:
 *                 type: string
 *                 description: Número de teléfono del cliente.
 *               address:
 *                 type: string
 *                 description: Dirección del cliente.
 *               referencedaddress:
 *                 type: string
 *                 description: Referencia de dirección del cliente.
 *     responses:
 *       201:
 *         description: Cliente creado exitosamente.
 *       400:
 *         description: Error en la solicitud, datos no válidos.
 *       500:
 *         description: Error del servidor.
 */
router.post('/create', addClient);

/**
 * @swagger
 * /api/clients/update:
 *   put:
 *     summary: Actualizar un cliente existente
 *     description: Actualiza la información de un cliente existente con los datos proporcionados.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               clientid:
 *                 type: integer
 *                 description: ID del cliente a actualizar.
 *               name:
 *                 type: string
 *                 description: Nuevo nombre del cliente.
 *               lastname:
 *                 type: string
 *                 description: Nuevo apellido del cliente.
 *               identification:
 *                 type: string
 *                 description: Nueva identificación del cliente.
 *               email:
 *                 type: string
 *                 description: Nuevo correo electrónico del cliente.
 *               phonenumber:
 *                 type: string
 *                 description: Nuevo número de teléfono del cliente.
 *               address:
 *                 type: string
 *                 description: Nueva dirección del cliente.
 *               referencedaddress:
 *                 type: string
 *                 description: Nueva referencia de dirección del cliente.
 *     responses:
 *       200:
 *         description: Cliente actualizado exitosamente.
 *       400:
 *         description: Datos no válidos o faltantes.
 *       500:
 *         description: Error del servidor.
 */
router.put('/update', editClient);

/**
 * @swagger
 * /api/clients/delete:
 *   delete:
 *     summary: Eliminar un cliente
 *     description: Elimina un cliente existente de forma lógica.
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
 *       400:
 *         description: Datos no válidos o faltantes.
 *       500:
 *         description: Error del servidor.
 */
router.delete('/delete', removeClient);

module.exports = router;
