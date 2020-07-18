import handlebars from 'handlebars';

import IParseMailTemplateDTO from '../dtos/IParseMailtemplateDTO';
import IMailTemplateProvider from '../models/IMailTemplateProvider';

class HandlebarsMailTemplateProvider implements IMailTemplateProvider {
  public async parse({
    template,
    variable,
  }: IParseMailTemplateDTO): Promise<string> {
    const parseTemplate = handlebars.compile(template);

    return parseTemplate(variable);
  }
}
export default HandlebarsMailTemplateProvider;
