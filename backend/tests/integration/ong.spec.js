const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach( async ()=>{
        await connection.migrate.rollback();
        await connection.migrate.latest();
    })

    afterAll(async ()=>{
        await connection.destroy();
    });

    it('shoud be able to create a new ONG', async ()=> {
        const res = await request(app)
            .post('/ongs')
            .send({
                name: "teste" ,
                email:"teste@teste.com",
                whatsapp: "1111111111111",
                city: "cidade",
                uf: "CE",
            });
        expect(res.body).toHaveProperty('id');
        expect(res.body.id).toHaveLength(8);
    });
    
});