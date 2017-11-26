import 'babel-polyfill';
import should from 'should';
import request from 'supertest';
import server from '../../../app';

describe('controllers', () => {
  describe('person', () => {
    describe('POST', () => {
      it('should return 403 - FORBIDDEN for invalid Authorization token in header', (done) => {
        request(server)
          .post('/person')
          .set({ Accept: 'application/json', Authorization: 'abracadabra1' })
          .expect(403)
          .end((err, res) => {
            should.not.exist(err);
            should.exist(res.body.message);
            done();
          });
      });
      it('should return 400 - BAD REQUEST when firstName is missing', (done) => {
        request(server)
          .post('/person')
          .set({ Accept: 'application/json', Authorization: 'abracadabra' })
          .send({ lastName: 'doe' })
          .expect(400)
          .then((res) => {
            res.body.code.should.eql('SCHEMA_VALIDATION_FAILED');
            res.body.results.errors[0].message.should.eql('Missing required property: firstName');
            done();
          });
      });
      it('should return 400 - BAD REQUEST when lastName is missing', (done) => {
        request(server)
          .post('/person')
          .set({ Accept: 'application/json', Authorization: 'abracadabra' })
          .send({ fistName: 'john' })
          .expect(400)
          .then((res) => {
            res.body.code.should.eql('SCHEMA_VALIDATION_FAILED');
            res.body.results.errors[0].message.should.eql('Missing required property: lastName');
            done();
          });
      });
      it('should create a single person', (done) => {
        request(server)
          .post('/person')
          .set({ Accept: 'application/json', Authorization: 'abracadabra' })
          .send({ firstName: 'john', lastName: 'doe' })
          .expect(200)
          .end((err, res) => {
            should.not.exist(err);
            const person = JSON.parse(res.body);
            person.id.should.eql(25);
            done();
          });
      });
    });

    describe('GET', () => {
      it('should return a Person object for a valid personId', (done) => {
        request(server)
          .get('/person/1')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            should.not.exist(err);
            const person = JSON.parse(res.body);
            person.firstName.should.eql('Murali');
            done();
          });
      });

      it('should return 400 - BAD REQUEST when personId param is not the correct type', (done) => {
        request(server)
          .get('/person/a')
          .set('Accept', 'application/json')
          .expect(400)
          .then((res) => {
            res.body.code.should.eql('INVALID_TYPE');
            done();
          });
      });

      it('should return 404 - NOT FOUND when person is not found for a particular personId', (done) => {
        request(server)
          .get('/person/1000')
          .set('Accept', 'application/json')
          .expect(404)
          .then((res) => {
            res.body.message.should.eql('Person not found');
            done();
          });
      });
    });
  });
});
