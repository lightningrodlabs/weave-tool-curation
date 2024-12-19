import fs from "fs";
import semver from "semver";
import curationListObject from "./modify/curations-0.13.ts";
import toolListObject from "./modify/tool-list-0.13.ts";
const curationListJSON = JSON.stringify(curationListObject, undefined, 4);
const toolListJSONJSON = JSON.stringify(toolListObject, undefined, 4);

const curationListActual = fs.readFileSync(
  "./lists/curations-0.13.json",
  "utf-8"
);
const toolListActual = fs.readFileSync("./lists/tool-list-0.13.json", "utf-8");

if (curationListJSON !== curationListActual)
  throw new Error(
    "Invalid curation list. List does not match the list defined in ./lists/curations-0.13.ts"
  );
if (toolListJSONJSON !== toolListActual)
  throw new Error(
    "Invalid developer collective Tools list. List does not match the list defined in ./lists/tool-list-0.13.ts"
  );

// Check that version fields are all valid semver
toolListObject.tools.forEach((tool) => {
  tool.versions.forEach((versionInfo) => {
    if (!semver.valid(versionInfo.version))
      throw new Error(
        `Found invalid semver version ${versionInfo.version} for app ${tool.id}`
      );
  });
  try {
    const _iconUrl = new URL(tool.icon);
  } catch (e) {
    throw new Error(`Invalid icon URL for tool '${tool.title}'`);
  }
});

// TODO Verify that versionBranch fields are unique for the same tool id
const idsAndBranches = toolListObject.tools.map(
  (tool) => `${tool.id}#${tool.versionBranch}`
);
if (Array.from(new Set(idsAndBranches)).length !== idsAndBranches.length)
  throw new Error(
    "Tool list contains at least two Tools that have the same id and versionBranch. This is not allowed."
  );
