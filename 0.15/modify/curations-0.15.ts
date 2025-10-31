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
            "https://lightningrodlabs.org/weave-tool-curation/0.15/tool-list-0.15.json",
          toolId: "vines",
          versionBranch: "1.19.x",
          tags: ["chat"],
        },
        {
          toolListUrl:
            "https://lightningrodlabs.org/weave-tool-curation/0.15/tool-list-0.15.json",
          toolId: "files",
          versionBranch: "1.3.x",
          tags: ["file sharing"],
        },
        {
          toolListUrl:
            "https://lightningrodlabs.org/weave-tool-curation/0.15/tool-list-0.15.json",
          toolId: "notebooks",
          versionBranch: "0.6.0",
          tags: ["collaborative text editing"],
        },
      ],
    },
  },
});
