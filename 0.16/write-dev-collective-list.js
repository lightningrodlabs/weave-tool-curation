import fs from 'fs';
import toolListObject from './modify/tool-list-dev-0.16.ts';
const toolListJSON = JSON.stringify(toolListObject, undefined, 4);
fs.writeFileSync('./lists/tool-list-dev-0.16.json', toolListJSON);
