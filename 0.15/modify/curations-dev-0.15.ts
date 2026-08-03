import { defineCurationLists } from "@theweave/moss-types";

export default defineCurationLists({
  curator: {
    name: "Lightningrod Labs (Dev)",
    description:
      "In-development Tools from Lightningrod Labs. Versions in this list are unstable, may break, and may change or disappear without notice. Not for production use.",
    contact: {
      website: "https://lightningrodlabs.org",
    },
    icon: "https://lightningrodlabs.org/lrl_logo.png",
  },
  curationLists: {
    default: {
      name: "Dev Curation List",
      description:
        "Curation List of in-development Tools from Lightningrod Labs (Moss 0.15)",
      tags: ["dev"],
      tools: [],
    },
  },
});
