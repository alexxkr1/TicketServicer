const express = require('express')
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const mainRoutes = require('./routes/mainRoutes')

const app = express();
app.use(mainRoutes);
app.use(express.static('public'));

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'My API',
            version: '1.0.0',
            description: 'A sample API'
        }
    },
    apis: ['server.js', 'swagger.yaml']
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.urlencoded({extended: true}));

port = 3000;
app.listen(port, () => {
    console.log(`API Server is running on port ${port}`)
});