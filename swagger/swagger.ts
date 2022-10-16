const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' });

const options = {
    info: {
        title: 'KANTT API Document',
        description: 'KANTT API Server',
    },
    servers: [
        {
            url: 'http://localhost:3001',
        },
    ],
    schemes: ['http'],
};
const outputFile = './swagger/swagger-output.json';
const endpointsFiles = ['../src/route/*'];
swaggerAutogen(outputFile, endpointsFiles, options);