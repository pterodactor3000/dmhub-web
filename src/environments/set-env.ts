const { writeFile } = require('fs');
require('dotenv').config();

if (!process.env['API_KEY']) {
  console.error('All the required environment variables were not provided!');
  process.exit(-1);
}

const targetPath = `./src/environments/environment.onprem.ts`;

const content = `
export const environment = {
  production: false,
  baseUrl: '${process.env['API_URL']}',
  title: 'WebHub',
  description: 'Web catalog of DMHub resources',
  firebase: {
    apiKey: '${process.env['API_KEY']}',
  },
  refreshRate: ${process.env['REFRESH_RATE']},
};
`;

writeFile(targetPath, content, (err: NodeJS.ErrnoException | null) => {
  if (err) {
    console.error(err);
  }
  console.info(`Wrote variables to ${targetPath}`);
});
