import supertest from 'supertest';
import app from '../../index';

const request = supertest(app);

describe('Testing Image Proccessing endpoint', () => {
  it('if all parameters is correct expect 200', async () => {
    await request.get('/api/images?image_name=pic.jpeg&hieght=55&width=55').expect(200);
  });

  it('if image not exist return 404', async () => {
    await request.get('/api/images?image_name=pic22.jpeg&hieght=55&width=55').expect(404);
  });

  it('if there is a missing parameter return 422', async () => {
    await request.get('/api/images?image_name=pic22.jpeg&hieght=55').expect(422);
  });
});
