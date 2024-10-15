import * as React from 'react';
import { LineGraph } from './graph';
import Section from '../../common/section';
import { getJsonFiles, readJsonFile, extractDateFromFilename, pushToArray } from '../utilities';
import { pageLayoutLabelMap, pageLayoutColorMap, pageLayoutDataModel } from './data-dupe';

const cms = 'SITECORE';
const title = 'PAGE LAYOUTS';
// eslint-disable-next-line max-len
const description = 'Tracks instances of pages using the following layouts: PL Stacked Header, Stacked Header, Full Screen Desktop. Excludes the following paths of the content tree: TLD, Legal, Market-Demo.';
const relativeRootPath = 'app/sitecore/page-layouts/datasets';
const datasetFolders = ['full-screen-desktop', 'other', 'pl-stacked-header', 'sales', 'stacked-header'];


async function fetchData() {
  try {
    const dates = [];

    datasetFolders.map(async (datasetFolder) => {
      const jsonFiles = await getJsonFiles(`${ relativeRootPath }/${ datasetFolder }`);
      const instanceCount = [];

      // console.log('jsonFiles:', jsonFiles);

      jsonFiles.forEach(async (file) => {
        const date = extractDateFromFilename(file);
        pushToArray(dates, date);

        const data = await readJsonFile(`${ relativeRootPath }/${ datasetFolder }/${ file }`);
        instanceCount.push(data.length);
      });

      const dataset = {
        label: pageLayoutLabelMap[datasetFolder],
        data: instanceCount,
        borderColor: pageLayoutColorMap[datasetFolder]
      };

      pageLayoutDataModel.datasets.push(dataset);
    });

    pageLayoutDataModel.labels = dates;
    console.log('pageLayoutDataModel:', pageLayoutDataModel);
  } catch (error) {
    /* eslint-disable-next-line no-console */
    console.error('Encountered an error while fetching the data:', error);
  }
}

await fetchData();


export default function PageLayout() {
  return (
    <Section cms={ cms } title={ title } description={ description } Graph={ LineGraph }/>
  );
}
