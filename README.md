# cms-dashboard

An app to visualize the tracking of CMS content reduction, migration, and normalization.

## Overview

This application is built with [Gasket](https://gasket.dev/) and [Next.js](https://nextjs.org/). This application utilizes [EcmaScript Modules] and requires Node.js v18.17 or higher.

## Getting Started

### Development

To start the app locally, run:

```bash
cd cms-dashboard
npm install
npm run local
```

### Debugging

To start the API locally with debugging enabled, run:

```bash
DEBUG=* npm run local
```

Extended filtering of the debug output can be achieved by adding to the `DEBUG` environment variable:

```bash
DEBUG=gasket:* npm run local // gasket operations only
DEBUG=:* npm run local //  operations only
```

### Documentation

Generated docs will be placed in the `.docs` directory. To generate markdown documentation for the API, run:

```bash
npm run docs
```

### Docusaurus

When using [Docusaurus], generated docs will be available at `http://localhost:3000` when running the [Docusaurus] server. By default the Docusaurus server is started with the `docs` script. Add the `--no-view` option to only generate the markdown files.

### App Router

This Gasket app uses Next.js 14 with the [App Router], which allows for intuitive, file-based routing within the app directory. The integration with Next.js 14 enhances development by leveraging features like automatic static optimization and server-side rendering, ensuring a scalable and efficient web application.




<!-- LINKS -->
[App Router]: https://nextjs.org/docs/app
[Page Router]: https://nextjs.org/docs/pages
[Custom Server]: https://nextjs.org/docs/pages/building-your-application/configuring/custom-server
[EcmaScript Modules]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
[Docusaurus]: https://docusaurus.io/



1. Tracking process by section should be articulated here
2. External resources should be listed here (shane's scraping tool, larry's tracking sheet)
3. templates discussion from Friday?
4. My personal dev reference material
  - https://www.chartjs.org/docs/latest/charts/line.html
  - https://mui.com/material-ui/react-divider/
  - https://www.youtube.com/watch?v=ZpfseYy5Hxg
  - https://caas.godaddy.com/prompt/view?promptId=f0df3bf20dcf302529a8d922b5aa748a5356470e5d0a5b6bd6938af5bcfa40a4&resultId=7ede3065b702a3548d822563ef4d8ee75d1ce2f0c9699924c3e42a7b69d51676
  - https://gasket.dev/docs/gasket-actions/
  - https://github.com/gdcorp-site/cms-migration-scripts/tree/main
  - https://secureservernet-my.sharepoint.com/:x:/r/personal/lgrothaus_godaddy_com/_layouts/15/Doc.aspx?sourcedoc=%7B0EFE3784-079C-465F-A5D1-25BAC30A987E%7D&file=Contentful%20Page%20Migrations.xlsx&wdLOR=cEB934617-58BA-4344-9225-B1FEDF607A8C&fromShare=true&action=default&mobileredirect=true
  - https://secureservernet-my.sharepoint.com/:x:/r/personal/smorrissey1_godaddy_com/_layouts/15/Doc.aspx?sourcedoc=%7BAFADFCF3-69FC-4328-B2AB-330942881D45%7D&file=SHL-2024-05-16_.xlsx&action=default&mobileredirect=true
  - https://secureservernet-my.sharepoint.com/:x:/r/personal/smorrissey1_godaddy_com/_layouts/15/Doc.aspx?sourcedoc=%7B36CE6607-5D38-4A35-9020-45D1B4D10104%7D&file=SiteCoreAnalysis.xlsx&action=default&mobileredirect=true
  https://origin-swp.dev-godaddy.com/v1/content/godaddy/sales/hosting/web-hosting?format=reactv2&contextState=draft