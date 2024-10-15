import fs from 'fs';
import path from 'path';

export function getJsonFiles(relativePath) {
  const absolutePath = path.resolve(process.cwd(), relativePath);

  return new Promise((resolve, reject) => {
    fs.readdir(absolutePath, (error, files) => {
      if (error) {
        /* eslint-disable-next-line no-console */
        console.error('Error reading folder:', error);
        reject(error);
      }

      const jsonFiles = files.filter(file => path.extname(file) === '.json');
      resolve(jsonFiles);
    });
  });
}


export function readJsonFile(relativePath) {
  const absolutePath = path.resolve(process.cwd(), relativePath);

  return new Promise((resolve, reject) => {
    fs.readFile(absolutePath, 'utf8', (error, data) => {
      if (error) {
        /* eslint-disable-next-line no-console */
        console.error('Error reading file:', error);
        reject(error);
      }

      const jsonData = JSON.parse(data);
      const dataArray = jsonData.map(item => item);
      resolve(dataArray);
    });
  });
}

export function extractDateFromFilename(filename) {
  const regex = /(\d{4})-(\d{2})-(\d{2})/;
  const matches = filename.match(regex);

  if (matches && matches.length === 4) {
    const year = matches[1];
    const month = matches[2];
    const day = matches[3];

    const formattedDate = `${month}/${day}/${year}`;
    return formattedDate;
  }

  /* eslint-disable-next-line no-console */
  console.error('Encountered error extracting a date from file:', filename);
  return null;
}

export function pushToArray(array, value) {
  if (!array.includes(value))
    array.push(value);

  return array;
}

