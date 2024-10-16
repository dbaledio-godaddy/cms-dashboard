# cms-dashboard


## Overview

This application visualizes the progress made toward the retirement of Sitecore and migration into Contentful. It is comprised of tracking numerous efforts that work toward that goal and have several dashboards accordingly.

## Maintenance

> [!NOTE]
> A Sitecore user group role with permission to run Sitecore PowerShell scripts is required.

Maintenance for each dashboard is prescribed below.

### Page Layouts

1. Log into Sitecore and select the *"Desktop"* editing experience.
2. Open the PowerShell ISE (*Red Sitecore Icon* > *"Development Tools"* > *"Powershell ISE"*) 
3. Paste in the script content from [page-layouts.ps1](https://github.com/gdcorp-site/fos-sitecore-powershell-scripts/blob/main/progress-tracking-scripts/page-layouts.ps1) into the Powershell ISE editor.
4. Select *"Execute"* from the top ribbon to run script.
5. Upon script completion, several report windows will open. Download each as a JSON file to your local machine.
6. Paste each JSON into their respective subfolder in the following path `app/sitecore/page-layouts/datasets`. (e.g. *"Sales"* report goes into `/sales`). Ensure a report has filed into each subfolder for today's data pull; a missing set can break the dashboard.
7. Complete. The dashboard will automatically process and update the new data set.

## Getting Started

This application is built with [Gasket](https://gasket.dev/), [Next.js](https://nextjs.org/), [Material UI](https://mui.com/material-ui/getting-started/), and [Chart.js](https://www.chartjs.org/docs/latest/getting-started/). This application utilizes [EcmaScript Modules] and requires Node.js v18.17 or higher.

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

## Resources

- [Shane's Migration Scripts](https://github.com/gdcorp-site/cms-migration-scripts)
- [Larry's Tracking Spreadsheets](https://secureservernet-my.sharepoint.com/:x:/r/personal/lgrothaus_godaddy_com/_layouts/15/doc2.aspx?sourcedoc=%7B0EFE3784-079C-465F-A5D1-25BAC30A987E%7D&file=Contentful%20Page%20Migrations.xlsx&wdLOR=cEB934617-58BA-4344-9225-B1FEDF607A8C&fromShare=true&action=default&mobileredirect=true)
- [Stephen's Audit Spreadsheets](https://secureservernet-my.sharepoint.com/:x:/r/personal/smorrissey1_godaddy_com/_layouts/15/Doc.aspx?sourcedoc=%7BAFADFCF3-69FC-4328-B2AB-330942881D45%7D&file=SHL-2024-05-16_.xlsx&action=default&mobileredirect=true)
- [Stephen's Component Analysis Spreadsheets](https://secureservernet-my.sharepoint.com/:x:/r/personal/smorrissey1_godaddy_com/_layouts/15/Doc.aspx?sourcedoc=%7B36CE6607-5D38-4A35-9020-45D1B4D10104%7D&file=SiteCoreAnalysis.xlsx&action=default&mobileredirect=true)
- [Example Content API View](https://origin-swp.dev-godaddy.com/v1/content/godaddy/sales/hosting/web-hosting?format=reactv2&contextState=draft)


<!-- LINKS -->
[App Router]: https://nextjs.org/docs/app
[Page Router]: https://nextjs.org/docs/pages
[Custom Server]: https://nextjs.org/docs/pages/building-your-application/configuring/custom-server
[EcmaScript Modules]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
[Docusaurus]: https://docusaurus.io/

<!-- Personal Reference Material -->
[Graph.js Tutorial]: https://www.youtube.com/watch?v=ZpfseYy5Hxg