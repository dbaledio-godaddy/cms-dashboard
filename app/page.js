/* eslint-disable no-unused-vars */
import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import PageLayout from './sitecore/page-layouts';
import ComponentUpgradeRatio from './sitecore/component-upgrade-ratio';
import DeprecatedPages from './sitecore/deprecated-pages';
import LegacyComponents from './sitecore/legacy-components';

function IndexPage() {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={ 2 }>
        <PageLayout />
        <LegacyComponents />
        <ComponentUpgradeRatio />
        <DeprecatedPages />
      </Stack>
    </Box>
  );
}

export default IndexPage;
