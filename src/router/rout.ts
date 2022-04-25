/* eslint-disable no-dupe-else-if */
import express, { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import resize from '../utilities/process';

const rout = express.Router();

rout.get('/file', (req: Request, res: Response): void => {
  const { fileName, height, width } = req.query;
  const newPath = path.join(
    __dirname,
    '..',
    '..',
    'resized_images',
    `${height}_${width}${fileName}`
  );
  const oldpath = path.join(__dirname, '..', '..', 'images', `${fileName}`);
  if (!fileName) {
    res.send('you should enter your image name');
  } else if (fs.existsSync(oldpath) == false) {
    res.send('your image not found');
  } else if ((fileName as string).split('.')[1] != 'jpg') {
    res.send('your image extension must be .jpg ');
  } else if (!height && !width) {
    res.send('please enter all dimensions of your image');
  } else if (!height || !width) {
    res.send('please enter the other dimension of your image');
  }else if (width as unknown as number <= 0 && height as unknown as number <= 0) {
    res.send('please enter a number of dimension more than zero ');
  }
   else if ((height as unknown as number) <= 0) {
    res.send('please enter a number of height more than zero');
  } else if ((width as unknown as number) <= 0) {
    res.send('please enter a number of width more than zero ');
  }else if (isNaN(width as unknown as number) && (isNaN(height as unknown as number))) {
    res.send('please enter a number of dimensions not string');
  }
  else if ( isNaN(height as unknown as number) ) {
    res.send('please enter a number of height not string');
  } else if (isNaN(width as unknown as number)) {
    res.send('please enter a number of width not string');
  }
   else {
    if (fs.existsSync(newPath)) {
      res.sendFile(newPath);
    } else {
      resize(
        width as unknown as string,
        height as unknown as string,
        newPath as string,
        oldpath as string
      )
        .then(function () {
          res.sendFile(newPath);
        })
        .catch(function (err) {
          console.log(err);
          res.send("isn't valid");
        });
    }
  }
});
export default rout;
