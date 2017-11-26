import 'babel-polyfill';
import should from 'should';
import request from 'supertest';
import server from '../../../app';

describe('controllers', () => {
  describe('person', () => {
    describe('GET /person', () => {
      it('should return a Person object', (done) => {
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

    /* it('should accept a personId parameter', function(done) {

        request(server)
          .get('/person')
          .query({ personId: 1})
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            res.body.should.eql('Hello, Scott!');

            done();
          });
      }); */
    });
  });
});
