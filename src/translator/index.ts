import i18n from 'i18n';

import { join } from 'path';

i18n.configure({
  locales: [ 'pt-br' ],
  directory: join(process.cwd(), 'locales'),
  defaultLocale: 'pt-br'
});

global.i18n = i18n;
