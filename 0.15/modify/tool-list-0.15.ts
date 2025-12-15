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
          versionBranch: "1.21.x",
          title: "Vines",
          subtitle: "Group conversations and DMs",
          description: "A conversation capacity for groups in The Weave.",
          icon: "https://github.com/lightningrodlabs/vines/releases/download/we-applet-rc/icon.png",
          tags: ["chat"],
          versions: [
              {
                  "version": "1.21.0",
                  "url": "https://github.com/lightningrodlabs/vines/releases/download/v1.21.0/vines-we_applet-1.21.0.webhapp",
                  "hashes": {
                      happSha256: "2670e560c448471665fd4ad8f79e0d45c040019b25cb7f661957dff58d44ea12",
                      webhappSha256: "c8dc846cfba5c69b5b1fabea678d5ca1c9deffab91a205bebf692a3731d6b2f3",
                      uiSha256: "35c70081f6f09ff3b1c2da6d841042aee88e6e3d0e46eff4f7a087d2543672a1"
                  },
                  "changelog": "Holochain 0.6.0 & Android-compatible",
                  "releasedAt": 1765557166280
              }
          ]
      },
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
        },
        {
          version: "0.6.2",
          url: "https://github.com/lightningrodlabs/notebooks/releases/download/v0.6.2/notebooks.webhapp",
          hashes: {
              happSha256: "8a7584239b7cd4349b08f8083c9dd479b9dc112112cda5c58757f0aff1dda750",
              webhappSha256: "a59a35cd36e13edf35affb60196c19aadafe6c4e30cc9d3dac9b0714c528c085",
              uiSha256: "6725c2d74ade19ba05e0c560300c1fbac2c446814e935a1eeca09ad9f017f8f3"
          },
          changelog: "Further commit reductions",
          releasedAt: 1764168450138
        },
        {
          version: "0.6.3",
          url: "https://github.com/lightningrodlabs/notebooks/releases/download/v0.6.3/notebooks.webhapp",
          hashes: {
            "happSha256": "8a7584239b7cd4349b08f8083c9dd479b9dc112112cda5c58757f0aff1dda750",
            "webhappSha256": "c1f67f631a8c28a04c8dfa1f84ec9325ea27843eedebac2f26f999c31c1770d7",
            "uiSha256": "9b481d89d7ff967cc9bc4a6980feeff16e9dd3c0ca122934d0854adfb0a06a92"
        },
          changelog: "Add rich text editor",
          releasedAt: 1765370095205
        },
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
        {
          "version": "0.16.1",
          url: "https://github.com/holochain-apps/kando/releases/download/v0.16.1/kando.webhapp",
          "hashes": {
            "happSha256": "cc2fed238d4fee07c3fe31bddac7f9cffe5b2b6e917e960edcb1f595e808f19b",
            "webhappSha256": "b7cacbe2bc52d6d4427cb84b83d53bd1be26d725201926b407d82e4ab097da91",
            "uiSha256": "595cb02343205e32e044726bfda94fedc5609279e5ec2da13565449f3e60ad84"
          },
          "changelog": "Fix participant list",
          "releasedAt": 1765796678924
        }
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
          version: "0.14.0",
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
        }
      ],
    },
    {
      id: "talking-stickies",
      versionBranch: "0.15.x",
      title: "TalkingStickies",
      subtitle: "Real-time stickies boards",
      description:
        "Ideation, retros, brain-storming, note-taking, anything with stickies!",
      icon: "https://github.com/holochain-apps/talking-stickies/releases/download/v0.12.0-rc.0/talking-stickies_icon.png",
      tags: ["notes", "stickies", "ideation", "boards"],
      versions: [
        {
          "version": "0.15.0",
          url: "https://github.com/holochain-apps/talking-stickies/releases/download/v0.15.0/talking-stickies.webhapp",
          "hashes": {
              "happSha256": "1c6e35da1ccf4ec67ab1d4a9bb0b6739d5d94b0f3b252b615c2f87f9de19df6d",
              "webhappSha256": "f3868d4c7247fedd2aa496fb9cb2bb0eccdf53b4d0dcd3a89476f9a6782a414a",
              "uiSha256": "9e67d0a34ed0869f383764d215d4a17b52c724597102eb5e2a0aa00976b5d3e5"
          },
          "changelog": "Fix participant list",
          "releasedAt": 1765796662104
        }
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
    {
      id: "emergence",
      versionBranch: "0.5.x",
      title: "Emergence",
      subtitle: "Conference and event management",
      description: "Conference and event management with session scheduling, space management, and collaborative notes.",
      icon: "https://github.com/holochain-apps/emergence/releases/download/v0.5.0/emergence_icon.png",
      tags: ["conference", "events", "scheduling", "notes", "collaboration"],
      versions: [
        {
          version: "0.5.0",
          url: "https://github.com/holochain-apps/emergence/releases/download/v0.5.0/emergence.webhapp",
          hashes: {
            happSha256: "983006410cbeab772ffd50bd138a9d1aeba08c1f58517b9cad58704464771efe",
            webhappSha256: "55683b572143475e9831c5c4641e8af637bf0818a17197bd1413658cb0fde6aa",
            uiSha256: "5c1eac98b0abf6e195d9a50b126afa6b8eb51253a82367a81d3bf00de3875a2b"
          },
          changelog: "Update for Holochain 0.6.0 and Moss 0.15.0",
          releasedAt: 1764123873254,
        },
      ],
    },
    {
      id: "acfn",
      versionBranch: "0.6.x",
      title: "Carbon Farm Network App",
      subtitle: "Custom supply chain management using hREA",
      description:
        "The Carbon Farm Network App is a custom supply chain management app built on the hREA framework. It allows users to plan, track and facilitate transactions within the network.",
      icon: "https://github.com/Carbon-Farm-Network/app-carbon-farm-network/blob/afd20c2b27ff177f2d703e3b4fbbb3191a346146/logo.png?raw=true",
      tags: ["testing", "supply chain", "hREA"],
      versions: [
        {
          version: "0.6.0",
          url: "https://github.com/Carbon-Farm-Network/app-carbon-farm-network/releases/download/v0.6.0/acfn.webhapp",
          hashes: {
              happSha256: "721cc880a07f762517a712ec9d60576f568972e741a394b5f52a69725d2d39df",
              webhappSha256: "1647ac52aafa046c9ee11b0c4db2552254a0f4f0f516c4f00720df5e90678c0c",
              uiSha256: "f8fdeb3a5f103278a62b8472a2629ddf30fdfe3d34270cbee16df3334cb686af"
          },
          changelog: "First release",
          releasedAt: 1764690389192,
        },
      ]
    },
    {
      id: "slate",
      versionBranch: "0.4.x",
      title: "Slate",
      subtitle: "Real-time collaborative whiteboard",
      description: "A real-time collaborative whiteboard for sketching, drawing, and brainstorming together.",
      icon: "https://github.com/lightningrodlabs/slate/releases/download/v0.4.0/icon.png",
      tags: [
        "collaboration",
        "real-time",
        "drawing"
      ],
      versions: [
        {
          version: "0.4.0",
          url: "https://github.com/lightningrodlabs/slate/releases/download/v0.4.0/slate.webhapp",
          hashes: {
            happSha256: "ea48c2d9fb1dd4459a0fc7a383aeea04e426dba591651f85229740426585bd99",
            webhappSha256: "f4590732a81a9df77b9d4028ccbcc55677cfe52fb9291e80179f17d866a4536f",
            uiSha256: "23bd97ef2e5e305db5a6313eba1b9d12b8e46221db92d6e82aea53ff794c91cf"
          },
          changelog: "Update for Holochain 0.6.0 and Moss 0.15.0",
          releasedAt: 1764949451809,
        },
        {
          "version": "0.4.1",
          url: "https://github.com/lightningrodlabs/slate/releases/download/v0.4.1/slate.webhapp",
          "hashes": {
              "happSha256": "ea48c2d9fb1dd4459a0fc7a383aeea04e426dba591651f85229740426585bd99",
              "webhappSha256": "9ae709d1dfd04cb7f1af826bba069fa911463b6f13793a9308ad25a7170587e7",
              "uiSha256": "098a6358e3f8724955e63c901e01ba148c869136e8056d6f2197359d6feaad56"
          },
          "changelog": "Fix participant list",
          "releasedAt": 1765796599046
        }
      ],
    },
    {
      id: "gamez",
      versionBranch: "0.9.x",
      title: "Gamez",
      subtitle: "Customizable tabletop games",
      description: "A platform for creating and playing customizable tabletop games with friends.",
      icon: "https://github.com/holochain-apps/gamez/releases/download/v0.9.2/icon.png",
      tags: [
        "games",
        "entertainment",
        "tabletop"
      ],
      versions: [
        {
          version: "0.9.2",
          url: "https://github.com/holochain-apps/gamez/releases/download/v0.9.2/gamez.webhapp",
          hashes: {
              happSha256: "63f99687127a3d6c8e8684c8a95874360fe40ea7aebe6d1bcbaafb9c4bee9e5c",
              webhappSha256: "15c7980886794c4e81d2b792bed77940b262a3382170f8cbd27247c62486d93c",
              uiSha256: "2ef19a90210440c22b2c95a1de439c24cd745b4050959bec8e697dd3d1baec2a"
          },
          changelog: "Update for Holochain 0.6.0 and Moss 0.15.0",
          releasedAt: 1764957314443,
        },
      ],
    },
    {
      id: "converge",
      versionBranch: "0.2.x",
      title: "Converge",
      subtitle: "A group decision-making tool",
      description:
        "A platform for decision-making that shifts the focus from outcomes to criteria.",
      icon: "https://github.com/lightningrodlabs/converge/blob/main/weave/converge.png?raw=true",
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
      versions: [
        {
          "version": "0.2.3",
          "url": "https://github.com/lightningrodlabs/converge/releases/download/0.2.3/converge.webhapp",
          "hashes": {
              "happSha256": "b6b87c548540498b06a2b4d087eedafd01de81938b85a5ca0ebffce33e2f0e0a",
              "webhappSha256": "2c6f176e3b631e71ed420f037efd7f585d900b2ea2ee01e5a368204c359c010e",
              "uiSha256": "e6ec5b6bf0f88e01e9d813ea7130929acd96588b11cec41b917abc8e168e0be8"
          },
          "changelog": "Update for Holochain 0.6.0 and Moss 0.15.0",
          "releasedAt": 1765280123965
        }
      ]
    },
    {
      id: "whosin",
      versionBranch: "0.2.x",
      title: "Who's In?",
      subtitle: "Scheduling events and tracking agreements",
      description:
        "Distributed event planning, task management, and agreement tracking.",
      icon: "https://github.com/lightningrodlabs/whos-in/blob/0.1.2/we_dev/whosin.png?raw=true",
      tags: [
        "collaboration",
        "scheduling",
        "calendar",
        "events",
        "task management",
        "governance",
        "collective action",
      ],
      versions: [
        {
          "version": "0.2.2",
          "url": "https://github.com/lightningrodlabs/whos-in/releases/download/0.2.2/whosin.webhapp",
          "hashes": {
            "happSha256": "5c9b45ce578f1a6cfddcd8c231ccbe6bf21aac8322178f7b561d6cb529d309e1",
            "webhappSha256": "eeca1c0ed46be1d21b6ff1c13ce44a7e648d286a3290344a158c725897b54990",
            "uiSha256": "65ab9eadba8c65c82922a96943e42c6e64058dcee3d34702dec9af21f8bd1033"
        },
          "changelog": "Update for Holochain 0.6.0 and Moss 0.15.0",
          "releasedAt": 1765215811636
      }
      ]
    },
    {
      id: "datatub",
      versionBranch: "0.10.x",
      title: "DataTub",
      subtitle: "Airtable-like data management",
      description: "Data management, collaboration, and custom displays.",
      icon: "https://github.com/lightningrodlabs/tables/blob/v0.10.3/weave/datatub.png?raw=true",
      tags: ["data", "management", "collaboration"],
      versions: [
        {
          version: "0.10.4",
          url: "https://github.com/lightningrodlabs/tables/releases/download/v0.10.4/tables.webhapp",
          hashes: {
            "happSha256": "2fcdd2a7bb7189179e2898d122153bda05c56e12063179a8ee997feeb76b5de9",
            "webhappSha256": "026e762cd806b58f35643dc09118aefdf54161ab419531109b0592b323c0ed71",
            "uiSha256": "e9199d361cf4ccd0b2548c1b629ad82fbc758774cd6e58cb2eac61c69da6db9d"
          },
          changelog: "Update for Holochain 0.6.0 and Moss 0.15.0",
          releasedAt: 1765376395946,
        },
      ],
    },
  ],
});
