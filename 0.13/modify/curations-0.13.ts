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
            "https://lightningrodlabs.org/weave-tool-curation/0.13/tool-list-0.13.json",
          toolId: "gamez",
          versionBranch: "main",
          tags: ["game", "board game", "canvas", "collaboration", "play"],
        },
      ],
    },
  },
});
