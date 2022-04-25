import sharp from 'sharp';
const resize = async function (
  Width: string,
  Height: string,
  newPath: string,
  oldpath: string
) {
  return sharp(oldpath)
    .resize({ width: parseInt(Width), height: parseInt(Height) })
    .toFile(newPath);
};
export default resize;
