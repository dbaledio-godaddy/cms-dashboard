import * as React from 'react';
import Section from '../../common/section';

const cms = 'SITECORE';
const title = 'LEGACY COMPONENTS';
const description = 'Tracks instances of legacy component use aggregated by component GUID/name.';

export default function LegacyComponents() {
  return (
    <Section cms={ cms } title={ title } description={ description }/>
  );
}
