import {expect,use,request} from 'chai';
import chaiHttp from 'chai-http';
import server from '../index';
use(chaiHttp);

describe('user SignUp',()=>{
    it('will retrun 201 status', async() =>{
    const response =  await request(server)
        .post('/api/v1/auth/signup').send({
            firstName:'eugene',
            lastName:'sadmm',
            email:'weod@gmail.com',
            password:'sad123'
        });
        expect(response).to.have.status(201);
    })
})