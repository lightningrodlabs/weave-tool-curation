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
              "https://lightningrodlabs.org/weave-tool-curation/0.14/tool-list-0.14.json",
          toolId: "files",
          versionBranch: "1.2.x",
          tags: ["file sharing"],
          visiblity: "low",
        },
        {
          toolListUrl:
            "https://lightningrodlabs.org/weave-tool-curation/0.14/tool-list-0.14.json",
          toolId: "acorn",
          versionBranch: "11.3.x",
          tags: ["project-management"],
        },
        {
          toolListUrl:
            "https://lightningrodlabs.org/weave-tool-curation/0.14/tool-list-0.14.json",
          toolId: "vines",
          versionBranch: "1.17.x",
          tags: ["chat"],
        },
        {
          toolListUrl:
            "https://lightningrodlabs.org/weave-tool-curation/0.14/tool-list-0.14.json",
          toolId: "files",
          versionBranch: "1.1.x",
          tags: ["file sharing"],
          visiblity: "low",
        },
        {
          toolListUrl:
            "https://raw.githubusercontent.com/matthme/weave-tool-curation/refs/heads/main/0.14/lists/tool-list-0.14.json",
          toolId: "matthme.presence",
          versionBranch: "0.11.x",
          tags: ["video calls", "screen sharing"],
        },

        {
          toolListUrl:
            "https://raw.githubusercontent.com/matthme/weave-tool-curation/refs/heads/main/0.14/lists/tool-list-0.14.json",
          toolId: "matthme.rhymez",
          versionBranch: "0.1.x",
          tags: ["chat", "messages", "message", "threads", "channels"],
        },
        {
          toolListUrl:
            "https://lightningrodlabs.org/weave-tool-curation/0.14/tool-list-0.14.json",
          toolId: "converge",
          versionBranch: "0.2.x",
          tags: [
            "collaboration",
            "problem-solving",
            "brainstorming",
            "convergent facilitation",
            "nvc",
            "dcan",
            "governance",
            "decision making",
          ],
        },
        {
          toolListUrl:
            "https://lightningrodlabs.org/weave-tool-curation/0.14/tool-list-0.14.json",
          toolId: "whosin",
          versionBranch: "main-0.5",
          tags: [
            "collaboration",
            "scheduling",
            "calendar",
            "events",
            "task management",
            "governance",
            "collective action",
          ],
        },
        {
          toolListUrl:
            "https://lightningrodlabs.org/weave-tool-curation/0.14/tool-list-0.14.json",
          toolId: "kando",
          versionBranch: "0.14.x",
          tags: [
            "collaboration",
            "scheduling",
            "calendar",
            "events",
            "task management",
            "governance",
            "collective action",
          ],
        },
        {
          toolListUrl:
            "https://lightningrodlabs.org/weave-tool-curation/0.14/tool-list-0.14.json",
          toolId: "notebooks",
          versionBranch: "0.5.x",
          tags: [""],
        },
        {
          toolListUrl:
            "https://lightningrodlabs.org/weave-tool-curation/0.14/tool-list-0.14.json",
          toolId: "talking-stickies",
          versionBranch: "0.13.x",
          tags: [""],
        },
        {
          toolListUrl:
            "https://lightningrodlabs.org/weave-tool-curation/0.14/tool-list-0.14.json",
          toolId: "spreadsheets",
          versionBranch: "0.1.x",
          tags: [""],
          visiblity: "low",
        },
        {
          toolListUrl:
            "https://lightningrodlabs.org/weave-tool-curation/0.14/tool-list-0.14.json",
          toolId: "datatub",
          versionBranch: "0.10.x",
          tags: [""],
          visiblity: "low",
        },
        {
          toolListUrl:
            "https://lightningrodlabs.org/weave-tool-curation/0.14/tool-list-0.14.json",
          toolId: "gamez",
          versionBranch: "0.9.x",
          tags: ["game", "board game", "canvas", "collaboration", "play"],
        },
        {
          toolListUrl:
            "https://lightningrodlabs.org/weave-tool-curation/0.14/tool-list-0.14.json",
          toolId: "ziptest",
          versionBranch: "0.3.x",
          tags: ["testing"],
          visiblity: "low",
        },
        {
          toolListUrl:
            "https://lightningrodlabs.org/weave-tool-curation/0.14/tool-list-0.14.json",
          toolId: "acfn",
          versionBranch: "0.5.x",
          tags: ['testing', 'supply chain', 'hREA'],
          visiblity: "low",
        },
      ],
    },
  },
});
