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
          toolId: "converge",
          versionBranch: "0.2.x",
          tags: ["collaboration", "problem-solving", "brainstorming", "convergent facilitation", "nvc", "dcan", "governance", "decision making"],
        },
        {
          toolListUrl:
            "https://lightningrodlabs.org/weave-tool-curation/0.14/tool-list-0.14.json",
          toolId: "whosin",
          versionBranch: "0.2.x",
          tags: [
            "collaboration", "scheduling", "calendar", "events", "task management", "governance", "collective action"
          ],
        },
      ],
    },
  },
});
