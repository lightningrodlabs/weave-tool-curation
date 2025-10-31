import { defineDevCollectiveToolList } from "@theweave/moss-types";

export default defineDevCollectiveToolList({
  developerCollective: {
    id: "lightningrodlabs",
    name: "Lightningrod Labs",
    description: "Nurturing The Holochain Ecosystem",
    icon: "https://lightningrodlabs.org/lrl_logo.png",
    contact: {
      website: "https://lightningrodlabs.org",
    },
  },
  tools: [
    {
      id: "vines",
      versionBranch: "1.19.x",
      title: "Vines",
      subtitle: "Group conversations and DMs",
      description: "A conversation capacity for groups in The Weave.",
      icon: "https://github.com/lightningrodlabs/vines/releases/download/we-applet-rc/icon.png",
      tags: ["chat"],
      versions: [
        {
          version: "1.19.0",
          url: "https://github.com/lightningrodlabs/vines/releases/download/we-applet-rc/vines-we_applet-1.19.0.webhapp",
          hashes: {
            happSha256:
              "c0d2a7862d063c3ca987daa0b39883010bf433d50d117e306544d4ae872ea07b",
            webhappSha256:
              "0a337873805073fe8fcf6e37cdebd578b8d41d47edffbe4bc87e337e87ccc3f9",
            uiSha256:
              "a631298bfb36162692aabb4388ed324bdfa7ca96e6f40e89036e042b33d81c2c",
          },
          changelog: "Update for Holochain 0.6.0 and Moss 0.15.0",
          releasedAt: 1761847402299,
        }
      ]
    },
    {
      id: "files",
      versionBranch: "1.3.x",
      title: "Files",
      subtitle: "File sharing & sending",
      description: "",
      icon: "https://github.com/lightningrodlabs/files/releases/download/we-applet-rc/icon.png",
      tags: ["file", "storage"],
      versions: [
        {
          version: "1.3.0",
          url: "https://github.com/lightningrodlabs/files/releases/download/we-applet-rc/files-we_applet-1.3.0.webhapp",
          hashes: {
            happSha256:
              "c1a5d70e83f0212ce4b236cdb579be6ae76450143ebea5571ac897bf15502e8a",
            webhappSha256:
              "ddc74873f56ae481087bc4f37131a2ae9e3c737f240d72a4503d998866b908bc",
            uiSha256:
              "1a4eb3a80e38e0875780cea0172f83bae5236d50081f1b11a7a466a366b86a87",
          },
          changelog: "Update for Holochain 0.6.0 and Moss 0.15.0",
          releasedAt: 1761841029030,
        },
      ],
    },
    {
      id: "notebooks",
      versionBranch: "0.6.x",
      title: "Notebooks",
      subtitle: "Collaborative MarkDown editor",
      description: "Real-time collaborative Markdown editing, includes version control.",
      icon: "https://github.com/lightningrodlabs/notebooks/releases/download/v0.6.0/notebooks_logo.png",
      tags: ["markdown", "real-time editor"],
      versions: [
        {
          version: "0.6.0",
          url: "https://github.com/lightningrodlabs/notebooks/releases/download/v0.6.0/notebooks.webhapp",
          hashes: {
            happSha256: "8a7584239b7cd4349b08f8083c9dd479b9dc112112cda5c58757f0aff1dda750",
            webhappSha256: "bef9e1b8a2a2663a752b7579e89ed3034fabb23cd9899db561c76a981b2cd9d3",
            uiSha256: "e8bd69d6fe49e85b8e2225b0d8edfe0685c7810dddf52c25b5bfff430922c288"
          },
          changelog: "Update for Holochain 0.6.0 and Moss 0.15.0",
          releasedAt: 1761911255717
        }
      ]
    },
    {
      id: "kando",
      versionBranch: "0.15.x",
      title: "KanDo",
      subtitle: "Real-time KanBan boards",
      description:
        "KanBan board based project-tracking. Features include, commenting, labels, categories, checklists, markdown support, and more.",
      icon: "https://theweave.social/images/kando_icon.png",
      tags: ["kanban", "project management"],
      versions: [
        {
          version: "0.15.0",
          url: "https://github.com/holochain-apps/kando/releases/download/v0.15.0/kando.webhapp",
          hashes: {
              "happSha256": "29cfb3ab4ad150af34f282636d239b7c5f8dbb309d37f2c28f0de991716e5ebb",
              "webhappSha256": "49841640ba104eb653862ade0c46c325e4a5924b3a12405f7fa9abf616627f5a",
              "uiSha256": "7b5788067a6188e01fcbc9ab9cb30db081dc35a54a4f5669ed1f7a46cb0b5a3f"
          },
          changelog: "Update for Holochain 0.6.0 and Moss 0.15.0",
          releasedAt: 1761920196929
        }

      ],
    },
  ],
});
