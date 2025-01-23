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
          toolId: "vines",
          versionBranch: "1.10.x",
          tags: [""],
        },
        {
          toolListUrl:
            "https://lightningrodlabs.org/weave-tool-curation/0.13/tool-list-0.13.json",
          toolId: "zipzap",
          versionBranch: "0.3.x",
          tags: [""],
        },
        {
          toolListUrl:
            "https://lightningrodlabs.org/weave-tool-curation/0.13/tool-list-0.13.json",
          toolId: "notebooks",
          versionBranch: "0.4.x",
          tags: [""],
        },
        {
          toolListUrl:
            "https://lightningrodlabs.org/weave-tool-curation/0.13/tool-list-0.13.json",
          toolId: "talking-stickies",
          versionBranch: "0.12.x",
          tags: [""],
        },
        {
          toolListUrl:
            "https://lightningrodlabs.org/weave-tool-curation/0.13/tool-list-0.13.json",
          toolId: "kando",
          versionBranch: "0.12.x",
          tags: [""],
        },
        {
          toolListUrl:
            "https://lightningrodlabs.org/weave-tool-curation/0.13/tool-list-0.13.json",
          toolId: "gamez",
          versionBranch: "main",
          tags: ["game", "board game", "canvas", "collaboration", "play"],
        },
        {
          toolListUrl:
            "https://lightningrodlabs.org/weave-tool-curation/0.13/tool-list-0.13.json",
          toolId: "sweet",
          versionBranch: "main",
          tags: [
            "collaboration",
            "spreadsheet",
            "table",
            "data",
            "document",
            "office",
          ],
        },
        {
          toolListUrl:
            "https://github.com/matthme/weave-tool-curation/blob/main/0.13/lists/tool-list-0.13.json",
          toolId: "matthme.presence",
          versionBranch: "0.10.x",
          tags: ["video calls", "screen sharing"],
        },
      ],
    },
  },
});
