import fs from 'fs';
import curationListObject from './modify/curations-dev-0.15.ts';
const curationListJSON = JSON.stringify(curationListObject, undefined, 4);
fs.writeFileSync('./lists/curations-dev-0.15.json', curationListJSON);
