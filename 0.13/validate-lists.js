import fs from "fs";
import semver from "semver";
import curationListObject from "./modify/curation.ts";
import devCollectiveListObject from "./modify/developerCollective.ts";
const curationListJSON = JSON.stringify(curationListObject, undefined, 4);
const devCollectiveListJSON = JSON.stringify(
  devCollectiveListObject,
  undefined,
  4
);

const curationListActual = fs.readFileSync("./lists/curation.json", "utf-8");
const devCollectiveListActual = fs.readFileSync(
  "./lists/developerCollective.json",
  "utf-8"
);

if (curationListJSON !== curationListActual)
  throw new Error(
    "Invalid curation list. List does not match the list defined in ./lists/curation.ts"
  );
if (devCollectiveListJSON !== devCollectiveListActual)
  throw new Error(
    "Invalid developer collective Tools list. List does not match the list defined in ./lists/developerColelctive.ts"
  );

// Check that version fields are all valid semver
devCollectiveListObject.apps.forEach((app) => {
  app.versions.forEach((versionInfo) => {
    if (!semver.valid(versionInfo.version))
      throw new Error(
        `Found invalid semver version ${versionInfo.version} for app ${app.id}`
      );
  });
});
