import { defineDevCollectiveContent } from "@theweave/moss-types";

export default defineDevCollectiveContent({
  name: "Lightningrod Labs",
  description: "Nurturing The Holochain Ecosystem",
  id: "lightningrodlabs",
  icon: "https://lightningrodlabs.org/lrl_logo.png",
  contact: {
    website: "https://lightningrodlabs.org",
  },
  apps: [
    {
      id: "kando",
      versionBranch: "0.11.x",
      title: "KanDo",
      subtitle: "Kanban board.",
      description: "Kanban board",
      icon: "https://theweave.social/images/kando_icon.png",
      tags: ["test", "tag2"],
      versions: [
        {
          version: "0.11.3",
          url: "https://github.com/holochain-apps/kando/releases/download/v0.11.3/kando.webhapp",
          hashes: {
            happSha256: "sdfasdfasdf",
            uiSha256: "asdfasfdasd",
            webhappSha256: "asdfasdf",
          },
          changelog: "Same new",
        },
      ],
    },
  ],
});
