import fs from 'fs';
import developerCollectiveListObject from './modify/developerCollective.ts';
const developerCollectiveListJSON = JSON.stringify(developerCollectiveListObject, undefined, 4);
fs.writeFileSync('./lists/developerCollective.json', developerCollectiveListJSON);