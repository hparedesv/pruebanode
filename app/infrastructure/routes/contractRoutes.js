const express = require('express');
const router = express.Router();
const { getContracts, addContract, editContract, removeContract } = require('../controllers/contractController');

/**
 * @swagger
 * /api/contracts/list:
 *   get:
 *     summary: Obtener todos los contratos
 *     description: Devuelve una lista de todos los contratos registrados.
 *     responses:
 *       200:
 *         description: Lista de contratos obtenida exitosamente.
 *       500:
 *         description: Error del servidor.
 */
router.get('/list', getContracts);

/**
 * @swagger
 * /api/contracts/create:
 *   post:
 *     summary: Crear un nuevo contrato
 *     description: Crea un nuevo contrato para un servicio de internet, vinculando el cliente y el método de pago.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               startdate:
 *                 type: string
 *                 format: date-time
 *                 example: "2024-10-12 14:00"
 *               enddate:
 *                 type: string
 *                 format: date-time
 *                 example: "2025-10-12 14:00"
 *               service_serviceid:
 *                 type: integer
 *                 example: 1
 *               statuscontract_statusid:
 *                 type: string
 *                 example: "VIG"
 *               client_clientid:
 *                 type: integer
 *                 example: 3
 *               methodpayment_methodpaymentid:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       201:
 *         description: Contrato creado exitosamente.
 *       400:
 *         description: Error en la solicitud, datos no válidos.
 *       500:
 *         description: Error del servidor.
 */
router.post('/create', addContract);

/**
 * @swagger
 * /api/contracts/update:
 *   put:
 *     summary: Actualizar un contrato existente
 *     description: Actualiza los detalles de un contrato existente en el sistema.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               contractid:
 *                 type: integer
 *                 example: 5
 *               service_serviceid:
 *                 type: integer
 *                 example: 2
 *               statuscontract_statusid:
 *                 type: string
 *                 example: "SUS"
 *               methodpayment_methodpaymentid:
 *                 type: integer
 *                 example: 3
 *               enddate:
 *                 type: string
 *                 format: date-time
 *                 example: "2025-12-31 23:59"
 *     responses:
 *       200:
 *         description: Contrato actualizado exitosamente.
 *       400:
 *         description: Error en la solicitud, datos no válidos.
 *       500:
 *         description: Error del servidor.
 */
router.put('/update', editContract);

/**
 * @swagger
 * /api/contracts/delete:
 *   delete:
 *     summary: Eliminar un contrato
 *     description: Elimina un contrato existente de manera lógica.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               contractid:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Contrato eliminado exitosamente.
 *       500:
 *         description: Error del servidor.
 */
router.delete('/delete', removeContract);

module.exports = router;
