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
          versionBranch: "1.20.x",
          title: "Vines",
          subtitle: "Group conversations and DMs",
          description: "A conversation capacity for groups in The Weave.",
          icon: "https://github.com/lightningrodlabs/vines/releases/download/we-applet-rc/icon.png",
          tags: ["chat"],
          versions: [
              {
                  "version": "1.20.0",
                  "url": "https://github.com/lightningrodlabs/vines/releases/download/we-applet-rc/vines-we_applet-1.20.0.webhapp",
                  "hashes": {
                      happSha256: "4708371274565615e07cc508dd949897eb55f97d0fa83eaf4ade071fc76fbdc9",
                      webhappSha256: "e59f762ab43283e3a471ec5712ae16afe1cff55cb5c6cb02443c12b8704b69c8",
                      uiSha256: "fa3516343d91edd6dfadbabdff2c2a9be2e6e1c1401181cb31f9531dffea9248"
                  },
                  "changelog": "Changed message commit feedback, some CSS changes for Mobile and updated for Holochain 0.6.0.",
                  "releasedAt": 1763739364292
              }
          ]
      },
    {
      id: "acorn",
      versionBranch: "12.0.x",
      title: "Acorn",
      subtitle: "State-of-Affairs Trees for Project Management",
      description:
        "Project planning and management redefined for distributed teams. Agile project management made simple. Open-source. Peer-to-peer. Perfect for remote teams.",
      icon: "https://github.com/lightningrodlabs/acorn/blob/v11.1.0-alpha/weave-tool/acorn-app-icon-512px.png?raw=true",
      tags: ["project-management"],
      versions: [
        {
          "version": "12.0.0-rc.0",
          url: "https://github.com/lightningrodlabs/acorn/releases/download/happ-v12.0.0-rc.0/acorn.webhapp",
          "hashes": {
              "happSha256": "2769b4e625ae834c0df486895b84426e6723ca1297b10ee8955fb5f69e2c327a",
              "webhappSha256": "e2c12b86a6bf0143529206167bc4069c60ba0850ea0f2bdc82d69468bde21d23",
              "uiSha256": "fb1c4c8ae8dfd93348a41826a361fe2d828774f3085dc280eaa84751b185c338"
          },
          "changelog": "Update to holochain 0.6.0",
          "releasedAt": 1763309307116
        },
      ]
    },
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
        },
        {
          version: "0.6.1",
          url: "https://github.com/lightningrodlabs/notebooks/releases/download/v0.6.1/notebooks.webhapp",
          hashes: {
            happSha256: "8a7584239b7cd4349b08f8083c9dd479b9dc112112cda5c58757f0aff1dda750",
            webhappSha256: "56ac6d6c2fc6dfef375de3f9f552998c9363b2ede5ab660a23e8bbde5c015484",
            uiSha256: "02439cf4621b7174f0c27e9278223c6fcb02ea197880218074913ed5dc2ed4d2"
          },
          changelog: "Reduce excess commits",
          releasedAt: 1763033737307
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
      deprecation: "Superseded by version 0.16.x",
    },
    {
      id: "kando",
      versionBranch: "0.16.x",
      title: "KanDo",
      subtitle: "Real-time KanBan boards",
      description:
        "KanBan board based project-tracking. Features include, commenting, labels, categories, checklists, markdown support, and more.",
      icon: "https://theweave.social/images/kando_icon.png",
      tags: ["kanban", "project management"],
      versions: [
        {
          version: "0.16.0",
          url: "https://github.com/holochain-apps/kando/releases/download/v0.16.0/kando.webhapp",
          hashes: {
            happSha256: "cc2fed238d4fee07c3fe31bddac7f9cffe5b2b6e917e960edcb1f595e808f19b",
            webhappSha256: "50e2439a0021689cfc5d2685290bdc7c21eca4ad9bc464ff9218e1e6b9a19ab0",
            uiSha256: "f8758dfb8e237bc9bedb138e30caac4e681426d6e4a51d98ec0b4c460397846c"
          },
          changelog: "Updates for syn 0.6.0-rc.0 and HC final 0.6.0",
          releasedAt: 1764038163359,
          },
      ],
    },
{
      id: "talking-stickies",
      versionBranch: "0.14.x",
      title: "TalkingStickies",
      subtitle: "Real-time stickies boards",
      description:
        "Ideation, retros, brain-storming, note-taking, anything with stickies!",
      icon: "https://github.com/holochain-apps/talking-stickies/releases/download/v0.12.0-rc.0/talking-stickies_icon.png",
      tags: ["notes", "stickies", "ideation", "boards"],
      versions: [
        {
          version: "0.14.0  ",
          url: "https://github.com/holochain-apps/talking-stickies/releases/download/v0.14.0/talking-stickies.webhapp",
          hashes: {
            happSha256:
              "dc89d3614862da93c835d7fa64c748478057a0645ffad24229511bd5201343c0",
            webhappSha256:
              "480672000a913b35001bab46ebd591c0a7f002ff34af42d48875631c57edd6d6",
            uiSha256:
              "3399694069dcb516ea7a9f7839795cf2430e44e6e4f29f83848589025327f597",
          },
          changelog: "Updates for Holochain 0.6 and Moss 0.15",
          releasedAt: 1764038833331,
        },
      ],
    },
    {
      id: "spreadsheets",
      versionBranch: "0.2.x",
      title: "Spreadsheets",
      subtitle: "Real-time collaborative spreadsheets",
      description: "Spreadsheets for real-time collaborative editing.",
      icon: "https://github.com/lightningrodlabs/sweet/blob/spreadsheets-only/weave/xylem.png?raw=true",
      tags: ["spreadsheet", "collaboration", "real-time"],
      versions: [
        {
          version: "0.2.0",
          url: "https://github.com/lightningrodlabs/sweet/releases/download/spreadsheets-0.2.0/calcy.webhapp",
          "hashes": {
              "happSha256": "6f3a8a4c997edcdde7dd49130ccba294835477eeb8b6ccf3edc04f4a70730448",
              "webhappSha256": "d64025bd0d3b26e62baf0f06e48f5aad3207c3b07452554e1783669cda19f33d",
              "uiSha256": "0f6d1b30306c06eccbeb306ad24937e1dffdaa43babb8e81aeffb41aba159c96"
          },
          changelog: "First release",
          releasedAt: 1764003953652,
        },
      ],
    },
  ],
});
