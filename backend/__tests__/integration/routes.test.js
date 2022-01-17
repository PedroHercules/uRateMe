const request = require('supertest');
const app = require('../../src/index.js');


describe('Autenticação', ()=>{

    it('deve registrar usuário com dados válidos', async ()=>{
        
        const response = await request(app)
        .post('/auth/register')
        .send({
            nickname: "pablo",
            email: "pablo@gmail.com",
            password: "Abc123@"
        });
        
        expect(response.status).toBe(200);
    })

    it('deve autenticar usuário com dados válidos', async ()=>{
        
        const response = await request(app)
        .post('/auth/authenticate')
        .send({
            nickname: "pablo",
            password: "Abc123@"
        });
        
        expect(response.status).toBe(200);
    })

    it('não deve autenticar usuário com dados inválidos', async ()=>{
        
        const response = await request(app)
        .post('/auth/register')
        .send({
            nickname: "maria",
            password: "123"
        });
        
        expect(response.status).toBe(400);
    })

    it('não deve registrar usuário com dados inválidos', async ()=>{
        
        const response = await request(app)
        .post('/auth/register')
        .send({
            nickname: "maria",
            email: "maria",
            password: "123"
        });
        
        expect(response.status).toBe(400);
    })

    it('não deve registrar usuário já cadastrado', async ()=>{
        
        const response = await request(app)
        .post('/auth/register')
        .send({
            nickname: "paulo",
            email: "paulo@gmail.com",
            password: "Abc123@"
        });
        
        expect(response.status).toBe(400);
    })
});


describe('Funcionalidades filmes', () => {
    it('deve adicionar filmes com id válido', async () => {
        const response = await request(app)
         .post('/movies/update')
         .send({
             id: "12153"
         });

         expect(response.status).toBe(200);
    })

    it('deve buscar filme armazenado no banco de dados pelo nome', async () => {
        const response = await request(app)
         .post('/movies/search')
         .send({
            search: "As Branquelas"
         });
         let responseJson = JSON.parse(response.text);
        
         expect(responseJson.movie[0].title).toBe("As Branquelas");
    })

});


describe('Funcionalidades series', () => {
    it('deve adicionar serie com id válido', async () => {
        const response = await request(app)
         .post('/series/update')
         .send({
             id: "63174"
         });

         expect(response.status).toBe(200);
    })

    it('deve buscar serie armazenado no banco de dados pelo nome', async () => {
        const response = await request(app)
         .post('/series/search')
         .send({
            search: "Lucifer"
         });
         let responseJson = JSON.parse(response.text);
        
         expect(responseJson.serie[0].title).toBe("Lucifer");
    })

});

