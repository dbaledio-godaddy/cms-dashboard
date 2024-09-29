import { makeGasket } from '@gasket/core';
import pluginHttps from '@gasket/plugin-https';
import pluginWebpack from '@gasket/plugin-webpack';
import pluginWinston from '@gasket/plugin-winston';
import pluginLogger from '@gasket/plugin-logger';
import pluginMetadata from '@gasket/plugin-metadata';
import pluginCommand from '@gasket/plugin-command';
import pluginDocs from '@gasket/plugin-docs';
import pluginDocusaurus from '@gasket/plugin-docusaurus';
import pluginNextjs from '@gasket/plugin-nextjs';
import pluginIntl from '@gasket/plugin-intl';

export default makeGasket({
  plugins: [
    pluginHttps,
    pluginWebpack,
    pluginWinston,
    pluginLogger,
    pluginMetadata,
    pluginCommand,
    pluginDocs,
    pluginDocusaurus,
    pluginNextjs,
    pluginIntl
  ],
  intl: {
    locales: [
      'en-US',
      'fr-FR'
    ]
  }
});
