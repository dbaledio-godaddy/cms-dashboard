import * as React from 'react';
import { Graph1 } from './graph1';
import Section from '../../common/section';


const cms = 'SITECORE';
const title = 'PAGE LAYOUTS';
// eslint-disable-next-line max-len
const description = 'Tracks instances of pages using the following layouts: PL Stacked Header, Stacked Header, Full Screen Desktop. Excludes the following paths of the content tree: TLD, Legal, Market-Demo.';

export default function PageLayout() {
  return (
    <Section cms={ cms } title={ title } description={ description } Graph={ Graph1 }/>
  );
}
