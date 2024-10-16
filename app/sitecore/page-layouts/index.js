import * as React from 'react';
import LineGraph from './graph';
import Section from '../../common/section';
import { fetchData } from './data-dupe'
import { lineChartData } from './data';

const cms = 'SITECORE';
const title = 'PAGE LAYOUTS';
// eslint-disable-next-line max-len
const description = 'Tracks instances of pages using the following layouts: PL Stacked Header, Stacked Header, Full Screen Desktop. Excludes the following paths of the content tree: TLD, Legal, Market-Demo.';


export default async function PageLayout() {
  const data = await fetchData();
  // console.log('data:', data); // debug

  return (
    <Section cms={ cms } title={ title } description={ description } graph={ <LineGraph data={ lineChartData }/> }/>
  );
}
