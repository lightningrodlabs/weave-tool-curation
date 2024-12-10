import { defineCurationList } from "@theweave/moss-types";

export default defineCurationList({
  name: "Lightningrod Labs",
  description: "The official curation of Tools from Lightningrod Labs",
  contact: {
    website: "https://lightningrodlabs.org",
  },
  icon: "https://lightningrodlabs.org/lrl_logo.png",
  developerCollectives: [{
    url: "https://raw.githubusercontent.com/lightningrodlabs/weave-tool-curation/refs/heads/test-0.13/0.13/lists/developerCollective.json",
    tools: {
      type: "all"
    }
  }],
});
