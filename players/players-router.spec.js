const request = require('supertest');
const server = require('../server');


describe('server.js', () => {
    describe('POST', () => {

        // it('should return 200 OK', () => {
        //     return request(server)
        //       .get('/api/players')
        //       .then(response => {
        //         expect(response.status).toBe(200);
        //       });
        //   });

        it('should respond with 201 Created', async () => {
            const body = { name: 'max'}
            const response = await request(server).post('/api/players').send(body);
        expect(response.status).toBe(201);
            
        })

        it('should respond with 400 If missing req fields', async () => {
            const body = {}
            const response = await request(server).post('/api/players').send(body);
        expect(response.status).toBe(400);
            
        })

        it('should return JSON', async () => {
            const body = { name: 'max'}
            const response = await request(server).post('/api/players').send(body);
        expect(response.type).toBe('application/json');
        })

        })

        describe('Delete', () => {

            it('should return status code 200', async () => {
                let response = await request(server).delete('/api/players/:id');
                expect(response.status).toBe(200);
              });
        })

        
})