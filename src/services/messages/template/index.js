import {fileURLToPath} from "url";
import fs from "fs";
import path from "path";
import handlebars from "handlebars";

export const templateHtml = (type, data) => {
  const pathFile = fileURLToPath(import.meta.url);
  const emailTemplate = fs.readFileSync(path.join(pathFile, `../${type}.handlebars`), 'utf8');

  const template = handlebars.compile(emailTemplate);

  return template(data);
}
