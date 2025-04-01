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
          versionBranch: "1.14.x",
          tags: ["chat"],
        },
        {
          toolListUrl:
            "https://lightningrodlabs.org/weave-tool-curation/0.13/tool-list-0.13.json",
          toolId: "vines",
          versionBranch: "1.13.x",
          tags: ["chat"],
        },
        {
          toolListUrl:
            "https://lightningrodlabs.org/weave-tool-curation/0.13/tool-list-0.13.json",
          toolId: "acorn",
          versionBranch: "11.x.x",
          tags: ["project-management"],
        },
        {
          toolListUrl:
            "https://lightningrodlabs.org/weave-tool-curation/0.13/tool-list-0.13.json",
          toolId: "vines",
          versionBranch: "1.11.x",
          tags: ["chat"],
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
          versionBranch: "0.8.x",
          tags: ["game", "board game", "canvas", "collaboration", "play"],
        },
        {
          toolListUrl:
            "https://lightningrodlabs.org/weave-tool-curation/0.13/tool-list-0.13.json",
          toolId: "sweet",
          versionBranch: "feature/OT-0.4",
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
            "https://raw.githubusercontent.com/matthme/weave-tool-curation/refs/heads/main/0.13/lists/tool-list-0.13.json",
          toolId: "matthme.presence",
          versionBranch: "0.10.x",
          tags: ["video calls", "screen sharing"],
        },
        {
          toolListUrl:
            "https://lightningrodlabs.org/weave-tool-curation/0.13/tool-list-0.13.json",
          toolId: "substrate",
          versionBranch: "main",
          tags: ["substrate", "canvas", "grid", "embedding", "assemblage"],
        },
        {
          toolListUrl:
            "https://lightningrodlabs.org/weave-tool-curation/0.13/tool-list-0.13.json",
          toolId: "converge",
          versionBranch: "main",
          tags: ["collaboration", "problem-solving", "brainstorming", "convergent facilitation", "nvc", "dcan", "governance", "decision making"],
        },
      ],
    },
  },
});
