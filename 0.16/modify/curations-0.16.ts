import { defineCurationLists } from "@theweave/moss-types";

export default defineCurationLists({
  curator: {
    name: "Lightningrod Labs",
    description: "The official curation of Tools from Lightningrod Labs",
    contact: {
      website: "https://lightningrodlabs.org",
    },
    icon: "https://lightningrodlabs.org/lrl_logo.png",
  },
  curationLists: {
    default: {
      name: "Default Curation List",
      description: "Default Curation List of Lightningrod Labs",
      tags: [],
      tools: [
        {
          toolListUrl:
            "https://lightningrodlabs.org/weave-tool-curation/0.16/tool-list-0.16.json",
          toolId: "ziptest",
          versionBranch: "0.5.x",
          tags: ["testing"],
          visiblity: "low",
        },
      ],
    },
  },
});
