const chai = require('chai');
const expect = require('chai').expect;
const should = require('should');
const request = require('supertest');
const app = require('../app')
const assert = require('assert');



describe('GET /user end point', () => {
    it('/user - respond with json containing a list of all users', function (done) {
        request(app)
            .get('/user')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function (err, res) {
                if (err) done(err);
                // check data type
                expect(res.body.docs).to.be.an('array');
                // document count for one
                expect(res.body.docs.length).equal(25);
                done();
            });
    });

    it('/user - check pagination of user endpoint ', function (done) {
        request(app)
            .get('/user')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function (err, res) {
                if (err) done(err);
                // check data type
                expect(res.body.docs).to.be.an('array');
                // document count for one
                expect(res.body.docs.length).equal(25);
                done();
            });;
    });

    it('/user?page=5 - check pagination of user endpoint ', function (done) {
        request(app)
            .get('/user?page=5')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function (err, res) {
                if (err) done(err);
                // check data type
                expect(res.body.docs).to.be.an('array');
                // document count for one
                expect(res.body.docs.length).equal(25);
                done();
            });
    });

    it('/user?page=50 - check pagination of user endpoint ', function (done) {
        request(app)
            .get('/user?page=50')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function (err, res) {
                if (err) done(err);
                // check data type
                expect(res.body.docs).to.be.an('array');
                // document count for one
                expect(res.body.docs.length).equal(0);
                done();
            });
    });
})
