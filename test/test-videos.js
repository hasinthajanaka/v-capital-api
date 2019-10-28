const chai = require('chai');
const expect = require('chai').expect;
const request = require('supertest');
const app = require('../app')

describe('GET /video end point', () => {
    it('/video?userId - get video count by userid', function (done) {
        request(app)
            .get('/video?userId=5db4091589e0afb20cad8dde')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function (err, res) {
                if (err) done(err);
                // check response body
                expect(res.body).equal(5);
                done();
            });
    });

    it('/video?userId - get video count by from non existing userid', function (done) {
        request(app)
            .get('/video?userId=5wb4091589e03fb20ctd8dde')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(500)
            .end(function (err, res) {
                if (err) done(err);
                done();
            });
    });
})