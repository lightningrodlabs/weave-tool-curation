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
      versionBranch: "1.11.x",
      title: "Vines",
      subtitle: "Group conversations and DMs",
      description: "A conversation capacity for groups in The Weave.",
      icon: "https://github.com/lightningrodlabs/vines/releases/download/we-applet-rc/icon.png",
      tags: ["chat"],
      versions: [
        {
          version: "1.11.0",
          url: "https://github.com/lightningrodlabs/vines/releases/download/we-applet-rc/vines-we_applet-1.11.0.webhapp",
          hashes: {
            happSha256: "1fddfda589f79279e5953c98abc8c515ed790073a1c28065da58d84a1398d809",
            webhappSha256: "f2a86ba74d30cbfb62bc3e86dd921d69e2d1a2461b85b29c93dbc4a6b1dcea94",
            uiSha256: "ef2ee91c5bd985752487f88bd97fe4ed67adcecbb0856d663b406f145cb42749"
          },
          changelog: "Fixed DMs & notifications received via signals",
          releasedAt: 1738617365000,
        },
      ],
    },
    {
      id: "zipzap",
      versionBranch: "0.3.x",
      title: "ZipZap",
      subtitle: "Ephemeral chat",
      description: "ZipZap is ephemeral chat.  Your messages are never stored.  Chat streams are defined by the people who are in them.",
      icon: "https://github.com/lightningrodlabs/zipzap/releases/download/v0.3.0-rc.0/zipzap_icon.png",
      tags: ["markdown", "real-time editor"],
      versions: [
        {
          version: "0.3.0-rc.0",
          url: "https://github.com/lightningrodlabs/zipzap/releases/download/v0.3.0-rc.0/zipzap.webhapp",
          hashes: {
            happSha256: "57ce77725d91790298c93d4321003e2f52415ddc81a5a8b618c5874b9fd4d49b",
            webhappSha256: "ec95e49f74c309a824adc578b3a6c0fe04cfa70903e95cbf676267950ad3fd1d",
            uiSha256: "9ac1b82eb457f26cfd3a9bf6114507162154f4f7e0188112c6aac5fa666053a3",
          },
          changelog: "Updates for Holochain 0.4 and Moss 0.13",
          releasedAt: 1736192464850,
        },
      ],
    },
    {
      id: "notebooks",
      versionBranch: "0.4.x",
      title: "Notebooks",
      subtitle: "Collaborative MarkDown editor",
      description: "Real-time collaborative Markdown editing, includes version control.",
      icon: "https://github.com/lightningrodlabs/notebooks/releases/download/v0.4.1-rc.0/notebooks_logo.png",
      tags: ["markdown", "real-time editor"],
      versions: [
        {
          version: "0.4.1-rc.0",
          url: "https://github.com/lightningrodlabs/notebooks/releases/download/v0.4.1-rc.0/notebooks.webhapp",
          hashes: {
            happSha256: "79569a97b7c4c8736576668ec428f2f18caad8b8f39c72af6df503ea0bef6193",
            webhappSha256: "2780343e0edb8714247361728acd6c5c03bd9e5bd56be43d45b5910b861ff2b3",
            uiSha256: "d778270c26884728ef4977c1052f91150fa3f024436041b648e7de9e52523b47",
          },
          changelog: "Updates for Holochain 0.4 and Moss 0.13",
          releasedAt: 1736192464850,
        },
      ],
    },
    {
      id: "talking-stickies",
      versionBranch: "0.12.x",
      title: "TalkingStickies",
      subtitle: "Real-time stickies boards",
      description: "Ideation, retros, brain-storming, note-taking, anything with stickies!",
      icon: "https://github.com/holochain-apps/talking-stickies/releases/download/v0.12.0-rc.0/talking-stickies_icon.png",
      tags: ["notes", "stickies", "ideation", "boards"],
      versions: [
        {
          version: "0.12.0-rc.0",
          url: "https://github.com/holochain-apps/talking-stickies/releases/download/v0.12.0-rc.0/talking-stickies.webhapp",
          hashes: {
            happSha256: "6e5543dfe9e38f8818d95ca4fb808f435b4dad81ed7051a89e42734f3ab72d45",
            webhappSha256: "b5adf22ea0d586f5e9a329cd5042b5516d2163b57164d2f4201586b28b4f8b97",
            uiSha256: "2e52715326dc3026d3cc3772737dbd2154b22d27c69a23bc82eb26a27c1812c8",
          },
          changelog: "Updates for Holochain 0.4 and Moss 0.13",
          releasedAt: 1736287085974,
        },
      ],
    },
    {
      id: "kando",
      versionBranch: "0.12.x",
      title: "KanDo",
      subtitle: "Real-time KanBan boards",
      description: "KanBan board based project-tracking. Features include, commenting, labels, categories, checklists, markdown support, and more.",
      icon: "https://theweave.social/images/kando_icon.png",
      tags: ["kanban", "project management"],
      versions: [
        {
          version: "0.12.0-rc.0",
          url: "https://github.com/holochain-apps/kando/releases/download/v0.12.0-rc.0/kando.webhapp",
          hashes: {
            happSha256: "fd3a1781fb480d87117af276e5da0d3daa6e99f14e333480ca90f075eeb6455c",
            webhappSha256: "e5cfe34756043e01da9285158263300e6cf8b9d1659655c46badb45c169270fd",
            uiSha256: "f120a1982084e908f379a5e8e991f493848c352c06a27ce7e8eb25ef06079d95",
          },
          changelog: "Updates for Holochain 0.4 and Moss 0.13",
          releasedAt: 1736019237925,
        },
        {
          version: "0.12.0-rc.1",
          url: "https://github.com/holochain-apps/kando/releases/download/v0.12.0-rc.1/kando.webhapp",
          hashes: {
            happSha256: "fd3a1781fb480d87117af276e5da0d3daa6e99f14e333480ca90f075eeb6455c",
            webhappSha256: "eae1f8efc5de5c225e811123bec6a8a0c479b5089cf35682403078a225a5b85b",
            uiSha256: "4ad0fd8050b7e294e6d5825636585f6875eecdb84730a729f79348e692191337",
          },
          changelog: "Asset fixes.",
          releasedAt: 1736110661818,
        },
      ],
    },
    {
      id: "gamez",
      versionBranch: "main",
      title: "Gamez",
      subtitle: "Freeform space to create and play board games together",
      description: "Freeform space to create and play board games together",
      icon: "https://github.com/holochain-apps/gamez/releases/download/v0.7.7/icon.png",
      tags: ["game", "board game", "canvas", "collaboration", "play"],
      versions: [
        {
          version: "0.7.8",
          hashes: {
            happSha256: "6335eca61415e769c22934d354614e581e65eb4728be0eff2f447c3d729c1f6d",
            webhappSha256: "dfc240caf9721b05138f120d2ffeb9d146f51a2a974c4feb734927200c535b84",
            uiSha256: "1db2d9804278973c72c63be4887d571ce8b414b0778cb69e94694ddb989ad1e2",
          },
          url: "https://github.com/holochain-apps/gamez/releases/download/v0.7.8/gamez.webhapp",
          changelog: `
          - Updated flake to latest version
          - Moved Weave initialization outside UI framework, and start the UI only after the window becomes visible
          - Adjust config menu position so it's always fully visible when opened
          - Added the possibility of adding assets to the space that aren't embedded, and added a toggle to show/hide the embed
          - Added some checks to maybe prevent panning from getting stuck
          - Fixed some breaking changes related to calling the Weave API that changed after the last update
          - Added logs for turn, move, join, left and remove elements
          - Added the possibility of getting notifications for different log types
          `,
          releasedAt: 1735674381,
        },
        {
          version: "0.7.7",
          hashes: {
            happSha256: "6335eca61415e769c22934d354614e581e65eb4728be0eff2f447c3d729c1f6d",
            webhappSha256: "d75b28807052bbf56d0641a51c63fde6d5f6f80a8efe4c782581473c8de4d4bf",
            uiSha256: "f8fb3e75e7670c41cad9c71700b78d25bc8e996276e878d94d40d8a4cb1892e3",
          },
          url: "https://github.com/holochain-apps/gamez/releases/download/v0.7.7/gamez.webhapp",
          changelog: `- Fixed WALs not loading when you first open a space
- Removed top bar on game space screen
- Removed ability to join games in library items; allow anyone to edit
- Adding UX indication that you are editing a library item
- Replaced hand-rolled tooltip directive with svooltip
- Hide self view and participants on Weave context
- Updated to Weave 0.13.0-rc, Holochain 0.4, and Syn 0.400.0-rc.2
          `,
          releasedAt: 1734971274,
        },
      ],
    },
    {
      id: "sweet",
      versionBranch: "feature/OT-0.4",
      title: "Sweet",
      subtitle: "Real-time spreadsheets and documents",
      description: "Sweet includes real-time collaborative spreadsheets and documents.",
      icon: "https://raw.githubusercontent.com/lightningrodlabs/sweet/refs/heads/feature/OT-0.4/ui/icon.png",
      tags: ["collaboration", "spreadsheet", "table", "data", "document", "office"],
      versions: [
        {
          version: "0.10.4",
          url: "https://github.com/lightningrodlabs/sweet/releases/download/0.10.4/calcy.webhapp",
          hashes: {
            happSha256: "16113b9ece15e1cf794e5f24409162a24dcdb3c18e10af6a64c2d16e56b339e9",
            webhappSha256: "496b0567cabe44694af6f648ea99fcc90319722909a1e5555d46668c4aed7984",
            uiSha256: "30db0bb19775630f8acf6c7584c84e9de307a79c9a721dedd73e7566065e6812",
          },
          changelog: "",
          releasedAt: 1736866346798,
        },
      ],
    },
    {
      id: "substrate",
      versionBranch: "main",
      title: "Substrate",
      subtitle: "Embed Weave assets on a canvas",
      description: "Embed Weave assets on a canvas",
      icon: "https://raw.githubusercontent.com/zequez/substrate/refs/heads/main/icon.png",
      tags: ["substrate", "canvas", "grid", "embedding", "assemblage"],
      versions: [
        {
          version: "0.1.1",
          url: "https://github.com/zequez/substrate/releases/download/v0.1.1/substrate.webhapp",
          hashes: {
            happSha256: "6b6d4c60d4ddc5b82731263519a22597bbfea6d0e4eb57bfd43b16b1e7600f2c",
            webhappSha256: "006165cb5864028d10cd1207a5b7217d38d16c2100baee01d3acc9e48bee5b91",
            uiSha256: "ed1cf682ed5464cc247e1f7b8c8890eac0dceb62378b40b158beb2425f7661e7",
          },
          changelog: `- Fixed a bug that caused syncing between peers not to work
     - You can now add frames to pocket and embed instances of Substrate that are centered around that Frame
     - You can now remove linked assets from frames
     - Added provision to prevent inifinite recursion from happening when embedding Substrate within Substrate
     - Refactored store so it can be initialized outside the UI components structure
     - Made the canvas (0,0) position be at the center of the screen
     - Made shadows all share the same z-index so they don't overlap
     - Added provision to disable pointer events on iframes while dragging so the panning doesn't get stuck`,
          releasedAt: 1738676622953,
        },
      ],
    },
  ],
});
