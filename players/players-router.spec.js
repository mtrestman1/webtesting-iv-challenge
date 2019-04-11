const request = require('supertest');
const server = require('./players-router');


describe('server.js', () => {
    describe('POST', () => {

        it('should return 200 OK', () => {
            return request(server)
              .get('/')
              .then(response => {
                expect(response.status).toBe(200);
              });
          });

        it('should respond with 201 Created', () => {
            return request(server)
            .post('/')
            .then(response => {
                expect(response.status).toBe(201)
            })
        })

        

          




    })
})