import fs from "fs";
import semver from "semver";

import curationListObject from "./modify/curations-0.16.ts";
import toolListObject from "./modify/tool-list-0.16.ts";
import devCurationListObject from "./modify/curations-dev-0.16.ts";
import devToolListObject from "./modify/tool-list-dev-0.16.ts";

// Moss renders a Tool's description and each version's changelog as markdown,
// side by side in the same details card: the description fills the Overview
// tab and the changelogs fill the Versions tab, where a version's number is
// the section heading. The checks below keep every Tool's prose shaped the
// same way so the two tabs read as one document.
//
// Description: level-2 sections only, opening with "## Overview" and
// including "## Features". Further "## " sections (e.g. "## Status") may
// follow.
// Changelog: prose and lists, no headings — the version number is already the
// heading the changelog sits under.
function validateProse(toolListObject) {
  toolListObject.tools.forEach((tool) => {
    const description = tool.description ?? "";
    const headings = Array.from(
      description.matchAll(/^(#{1,6})[ \t]+(.+?)[ \t]*$/gm)
    );

    const wrongLevel = headings.find((match) => match[1] !== "##");
    if (wrongLevel)
      throw new Error(
        `Description of tool '${tool.title}' uses a level-${wrongLevel[1].length} heading '${wrongLevel[2]}'. Tool descriptions use level-2 headings ("## ") only.`
      );

    const sections = headings.map((match) => match[2]);
    if (sections[0] !== "Overview")
      throw new Error(
        `Description of tool '${tool.title}' must open with a "## Overview" section (found ${
          sections.length ? `'${sections[0]}'` : "no headings"
        }).`
      );
    if (!sections.includes("Features"))
      throw new Error(
        `Description of tool '${tool.title}' must include a "## Features" section.`
      );

    tool.versions.forEach((versionInfo) => {
      const changelogHeading = /^#{1,6}[ \t]+(.+?)[ \t]*$/m.exec(
        versionInfo.changelog ?? ""
      );
      if (changelogHeading)
        throw new Error(
          `Changelog of tool '${tool.title} ${versionInfo.version}' contains the heading '${changelogHeading[1]}'. Changelogs are prose and lists only — the version number is the heading they sit under.`
        );
    });
  });
}

function validatePair({
  label,
  curationListObject,
  toolListObject,
  curationListFile,
  toolListFile,
  curationListSource,
  toolListSource,
  // Dev lists publish multiple in-development builds on the same versionBranch,
  // and the happ legitimately changes between those builds, so the
  // same-branch-same-happ invariant is only enforced for stable lists.
  enforceSameHappPerBranch = true,
}) {
  const curationListJSON = JSON.stringify(curationListObject, undefined, 4);
  const toolListJSON = JSON.stringify(toolListObject, undefined, 4);

  const curationListActual = fs.readFileSync(curationListFile, "utf-8");
  const toolListActual = fs.readFileSync(toolListFile, "utf-8");

  if (curationListJSON !== curationListActual)
    throw new Error(
      `Invalid ${label} curation list. List does not match the list defined in ${curationListSource}`
    );
  if (toolListJSON !== toolListActual)
    throw new Error(
      `Invalid ${label} developer collective Tools list. List does not match the list defined in ${toolListSource}`
    );

  let webhappUrls = new Set();

  // Check each tool
  toolListObject.tools.forEach((tool) => {
    // Check Icon URL
    try {
      const _iconUrl = new URL(tool.icon);
    } catch (e) {
      throw new Error(`Invalid icon URL for tool '${tool.title}' `);
    }
    // Check each version
    tool.versions.forEach((versionInfo) => {
      // Check version field is valid semver
      if (!semver.valid(versionInfo.version))
        throw new Error(
          `Found invalid semver version ${versionInfo.version} for tool '${tool.title} ${tool.versionBranch}'`
        );

      // Check releasedAt timestamp
      if (
        versionInfo.releasedAt < 1711978174000 ||
        versionInfo.releasedAt > 2690198974000
      ) {
        throw new Error(
          `Invalid releasedAt timestamp ${versionInfo.releasedAt} for tool '${tool.title} ${versionInfo.version}'.
           Timestamps must be in milliseconds unix epoch time.`
        );
      }

      // Check webhapp URL
      if (webhappUrls.has(versionInfo.url)) {
        throw new Error(`Duplicate use of webhapp url ${versionInfo.url} for tool '${tool.title} ${versionInfo.version}'`);
      }
      webhappUrls.add(versionInfo.url);
      if (!versionInfo.url.toLowerCase().endsWith(".webhapp")) {
        throw new Error(`Invalid webhapp URL for tool '${tool.title} ${versionInfo.version}'`);
      }
      try {
        const _url = new URL(versionInfo.url);
      } catch (e) {
        throw new Error(`Invalid webhapp URL for tool '${tool.title} ${versionInfo.version}'`);
      }

      // Make sure each hash is different
      if (versionInfo.hashes.happSha256 === versionInfo.hashes.webhappSha256
          || versionInfo.hashes.happSha256 === versionInfo.hashes.uiSha256
          || versionInfo.hashes.uiSha256 === versionInfo.hashes.webhappSha256) {
        throw new Error(`Found identical hashes for tool '${tool.title} ${versionInfo.version}'`);
      }

    });
  });

  // Verify that versionBranch fields are unique for the same tool id
  const idsAndBranches = toolListObject.tools.map(
    (tool) => `${tool.id}#${tool.versionBranch}`
  );
  if (Array.from(new Set(idsAndBranches)).length !== idsAndBranches.length)
    throw new Error(
      "Tool list contains at least two Tools that have the same id and versionBranch. This is not allowed."
    );

  validateProse(toolListObject);

  // Verify that happ sha256 are the same for tools in the same versionBranch
  if (enforceSameHappPerBranch) {
    toolListObject.tools.forEach((toolInfo) => {
      if (
        Array.from(
          new Set(
            toolInfo.versions.map((versionInfo) => versionInfo.hashes.happSha256)
          )
        ).length > 1
      )
        throw new Error(
          `happSha256 are not unique for tool ${toolInfo.title} and verisonBranch ${toolInfo.versionBranch}`
        );
    });
  }
}

validatePair({
  label: "stable",
  curationListObject,
  toolListObject,
  curationListFile: "./lists/curations-0.16.json",
  toolListFile: "./lists/tool-list-0.16.json",
  curationListSource: "./modify/curations-0.16.ts",
  toolListSource: "./modify/tool-list-0.16.ts",
});

validatePair({
  label: "dev",
  curationListObject: devCurationListObject,
  toolListObject: devToolListObject,
  curationListFile: "./lists/curations-dev-0.16.json",
  toolListFile: "./lists/tool-list-dev-0.16.json",
  curationListSource: "./modify/curations-dev-0.16.ts",
  toolListSource: "./modify/tool-list-dev-0.16.ts",
  enforceSameHappPerBranch: false,
});
