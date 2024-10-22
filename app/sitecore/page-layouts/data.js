import { getJsonFiles, readJsonFile, extractDateFromFilename, pushToArray } from '../utilities';

const relativeRootPath = 'app/sitecore/page-layouts/datasets';
const datasetFolders = ['full-screen-desktop', 'other', 'pl-stacked-header', 'sales', 'stacked-header'];

const pageLayoutLabelMap = {
  'full-screen-desktop': 'Full Screen Desktop',
  'other': 'Other',
  'pl-stacked-header': 'PL Stacked Header',
  'sales': 'Sales',
  'stacked-header': 'Stacked Header'
};

const pageLayoutColorMap = {
  'full-screen-desktop': 'rgba(255, 0, 0, 1)',
  'other': 'rgba(0, 0, 255, 1)',
  'pl-stacked-header': 'rgba(0, 255, 0, 1)',
  'sales': 'rgba(128, 0, 128, 1)',
  'stacked-header': 'rgba(255, 165, 0, 1)'
};

// this may change
const pageLayoutDataModel = {
  labels: [],
  datasets: []
};

// eslint-disable-next-line max-statements
export async function fetchData() {
  try {
    const dates = [];
    const datasets = [];

    for (const datasetFolder of datasetFolders) {
      const jsonFiles = await getJsonFiles(`${relativeRootPath}/${datasetFolder}`);
      const instanceCount = [];

      // console.log('jsonFiles:', jsonFiles); // debug

      for (const file of jsonFiles) {
        const date = extractDateFromFilename(file);
        pushToArray(dates, date);

        const data = await readJsonFile(`${relativeRootPath}/${datasetFolder}/${file}`);
        // console.log('data size:', data.length); // debug
        instanceCount.push(data.length);
      }

      // console.log('instanceCount:', instanceCount); // debug

      const dataset = {
        label: pageLayoutLabelMap[datasetFolder],
        data: instanceCount,
        borderColor: pageLayoutColorMap[datasetFolder]
      };

      // console.log('dataset:', dataset); // debug
      datasets.push(dataset);
    }

    pageLayoutDataModel.datasets = datasets;
    pageLayoutDataModel.labels = dates;
    // console.log('pageLayoutDataModel:', pageLayoutDataModel); // debug
    return pageLayoutDataModel;
  } catch (error) {
    /* eslint-disable-next-line no-console */
    console.error('Encountered an error while fetching the data:', error);
    return null;
  }

}
