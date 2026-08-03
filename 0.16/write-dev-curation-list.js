import fs from 'fs';
import curationListObject from './modify/curations-dev-0.16.ts';
const curationListJSON = JSON.stringify(curationListObject, undefined, 4);
fs.writeFileSync('./lists/curations-dev-0.16.json', curationListJSON);
