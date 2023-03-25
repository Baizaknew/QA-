const LoginPage = require( "../pageobjects/LoginPage");

describe('Clients Suit', ()=> {
    beforeEach( async() => {
        await LoginPage.open();
        await LoginPage.doLogin('Admin', 'Admin@Navi')
    })

    afterEach( async()=>{
        await browser.reloadSession();
    })

    const request = require('request');

    describe('View Client', () => {
      it('should return correct client data', (done) => {
        const client_id = 12345;
        const endpoint = `http://167.114.201.175:5000/clients/${client_id}`;
        
        const expected_client_data = {
          "id": client_id,
          "name": "John Doe",
          "email": "johndoe@example.com",
          "phone": "555-5555",
          "points": 100,
          "tier": "Gold"
        };
        
        request.get(endpoint, (error, response, body) => {
          if (error) {
            done(error);
          }
          expect(response.statusCode).toBe(200);
          expect(JSON.parse(body)).toEqual(expected_client_data);
          done();
        });
      });
    });

})