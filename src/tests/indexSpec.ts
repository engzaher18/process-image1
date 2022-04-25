import supertest from 'supertest';
import app from '../index';
import resize from '../utilities/process';
import path from 'path/posix';
import fs from 'fs';
const req = supertest(app);
describe('test of the end point', () => {
  it('test the end point', async () => {
    const newPath = path.join(
      __dirname,
      '..',
      '..',
      'resized_images',
      `1500_2500encenadaport.jpg`
    );
    await req.get('/api/file/?fileName=encenadaport.jpg&height=2500&width=1500');
    expect(fs.existsSync(newPath)).toBeTruthy();
  });
});
describe('', () => {
  it('', () => {
    const oldPath = path.join(
      __dirname,
      '..',
      '..',
      'images',
      'encenadaport.jpg'
    );
    const newPath = path.join(
      __dirname,
      '..',
      '..',
      'resized_images',
      `1500_2500encenadaport.jpg`
    );
    expect(async () => {
      await resize(
        1500 as unknown as string,
        2500 as unknown as string,
        oldPath,
        newPath
      );
    }).not.toThrow();
  });
});
