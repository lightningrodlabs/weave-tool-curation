import fs from 'fs';
import curationListObject from './modify/curations-0.14.ts';
const curationListJSON = JSON.stringify(curationListObject, undefined, 4);
fs.writeFileSync('./lists/curations-0.14.json', curationListJSON);