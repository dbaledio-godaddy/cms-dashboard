import * as React from 'react';
import Section from '../../common/section';

const cms = 'SITECORE';
const title = 'COMPONENT UPGRADE RATIO';
const description = 'Tracks the ratio of React to legacy components per page.';

export default function ComponentUpgradeRatio() {
  return (
    <Section cms={ cms } title={ title } description={ description }/>
  );
}
