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
            "happSha256": "fd3a1781fb480d87117af276e5da0d3daa6e99f14e333480ca90f075eeb6455c",
            "webhappSha256": "e5cfe34756043e01da9285158263300e6cf8b9d1659655c46badb45c169270fd",
            "uiSha256": "f120a1982084e908f379a5e8e991f493848c352c06a27ce7e8eb25ef06079d95"
          },
          changelog: "Updates for Holochain 0.4 and Moss 0.13",
          releasedAt: 1736019237925,
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
            happSha256:
              "6335eca61415e769c22934d354614e581e65eb4728be0eff2f447c3d729c1f6d",
            webhappSha256:
              "dfc240caf9721b05138f120d2ffeb9d146f51a2a974c4feb734927200c535b84",
            uiSha256:
              "1db2d9804278973c72c63be4887d571ce8b414b0778cb69e94694ddb989ad1e2",
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
            happSha256:
              "6335eca61415e769c22934d354614e581e65eb4728be0eff2f447c3d729c1f6d",
            webhappSha256:
              "d75b28807052bbf56d0641a51c63fde6d5f6f80a8efe4c782581473c8de4d4bf",
            uiSha256:
              "f8fb3e75e7670c41cad9c71700b78d25bc8e996276e878d94d40d8a4cb1892e3",
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
  ],
});
