import fs from 'fs';
import curationListObject from './modify/curation.ts';
const curationListJSON = JSON.stringify(curationListObject, undefined, 4);
fs.writeFileSync('./lists/curation.json', curationListJSON);