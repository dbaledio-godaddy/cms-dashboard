import fs from 'fs';
import path from 'path';

export function getJsonFiles(relativePath) {
  const absolutePath = path.resolve(process.cwd(), relativePath);

  return new Promise((resolve, reject) => {
    fs.readdir(absolutePath, (error, files) => {
      if (error) {
        console.error('Error reading folder:', error);
        reject(error);
      }

      const jsonFiles = files.filter(file => path.extname(file) === '.json');
      resolve(jsonFiles);
    });
  });
}


export function readJsonFile(relativeFilePath) {
  const absolutePath = path.resolve(process.cwd(), relativeFilePath);
  // const filePath = path.join(absolutePath, relativeFilePath);

  fs.readFile(absolutePath, 'utf8', (err, data) => {
    if (err) {
      /* eslint-disable-next-line no-console */
      console.error('Error reading file:', err);
      return null;
    }

    try {
      const jsonData = JSON.parse(data);
      const dataArray = jsonData.map(item => item);
      return dataArray;
    } catch (error) {
      /* eslint-disable-next-line no-console */
      console.error('Error parsing JSON:', error);
      return null;
    }
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

