import request from 'supertest'
import app from './app'

describe('App is live', function () {
  it('responds with a not found message', function (done: jest.DoneCallback) {
    request(app)
      .get('/a-route-that-does-not-exist')
      .set('Accept', 'application/json')
      .expect(404, done)
  })

  describe('GET /', function () {
    it('responds with a json message', function (done: jest.DoneCallback) {
      request(app).get('/').set('Accept', 'application/json').expect(200, done)
    })
  })
})
