import * as React from 'react';
import Section from '../../common/section';

const cms = 'SITECORE';
const title = 'DEPRECATED PAGES';
const description = 'Tracks instances of pages that need to be retired.';

export default function DeprecatedPages() {
  return (
    <Section cms={ cms } title={ title } description={ description }/>
  );
}
