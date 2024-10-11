const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const logger = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const userRoutes = require('./app/infrastructure/routes/userRoutes');
const clientRoutes = require('./app/infrastructure/routes/clientRoutes');
const turnRoutes = require('./app/infrastructure/routes/turnRoutes');
const contractRoutes = require('./app/infrastructure/routes/contractRoutes');
const app = express();

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API Documentation',
            version: '1.0.0',
            description: 'Documentación de la API para gestionar usuarios, clientes, turnos y contratos.',
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Servidor de desarrollo',
            },
        ],
    },
    apis: ['./app/infrastructure/routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(helmet());
app.use(cors({ origin: ['http://localhost:3000'], methods: ['GET', 'POST', 'PUT', 'DELETE'] }));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/users', userRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/turns', turnRoutes);
app.use('/api/contracts', contractRoutes);

module.exports = app;
