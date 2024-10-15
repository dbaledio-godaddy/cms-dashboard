import * as React from 'react';
import { Graph } from './graph';
import Section from '../../common/section';
import { getJsonFiles, readJsonFile } from '../utilities';

const cms = 'SITECORE';
const title = 'PAGE LAYOUTS';
// eslint-disable-next-line max-len
const description = 'Tracks instances of pages using the following layouts: PL Stacked Header, Stacked Header, Full Screen Desktop. Excludes the following paths of the content tree: TLD, Legal, Market-Demo.';
const relativeRootPath = 'app/sitecore/page-layouts/datasets';
const datasetFolders = ['full-screen-desktop', 'other', 'pl-stacked-header', 'sales', 'stacked-header'];
// Red: RGBA(255, 0, 0, 1)
// Blue: RGBA(0, 0, 255, 1)
// Green: RGBA(0, 255, 0, 1)
// Purple: RGBA(128, 0, 128, 1)
// Orange: RGBA(255, 165, 0, 1)



async function fetchData() {
  try {
    datasetFolders.map(async (datasetFolder) => {
      const jsonFiles = await getJsonFiles(`${ relativeRootPath }/${ datasetFolder }`);

      console.log('jsonFiles:', jsonFiles);

      jsonFiles.forEach((file) => {
        const data = readJsonFile(`${ relativeRootPath }/${ datasetFolder }/${ file }`);
        console.log('data:', data);
      });
    });
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

fetchData();

export default function PageLayout() {
  return (
    <Section cms={ cms } title={ title } description={ description } Graph={ Graph }/>
  );
}
