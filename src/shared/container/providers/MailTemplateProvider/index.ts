import { container } from 'tsyringe';

import IMailTemplateProvider from './models/IMailTemplateProvider';

import HandlebarsmailTemplateProvider from './implementations/HandlebarsmailTemplateProvider';

const providers = {
  handlebars: HandlebarsmailTemplateProvider,
};

container.registerSingleton<IMailTemplateProvider>(
  'MailTemplateProvider',
  providers.handlebars
);
