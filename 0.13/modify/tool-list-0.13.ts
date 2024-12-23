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
      id: "gamez",
      versionBranch: "main",
      title: "Gamez",
      subtitle: "Freeform space to create and play board games together",
      description: "Freeform space to create and play board games together",
      icon: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' style='enable-background:new 0 0 64 64' xml:space='preserve'%3e%3cpath d='M6 12c0-3.3 2.7-6 6-6h40c3.3 0 6 2.7 6 6v40c0 3.3-2.7 6-6 6H12c-3.3 0-6-2.7-6-6V12z' style='fill:white'/%3e%3cpath d='M4 12c0-4.4 3.6-8 8-8h8v16H8v12h12v12H8v2c0 2.8 5.1 5.1 12 5.8V44h12v7.4c4.4-.7 8.5-2 12-3.8V44h5.6c4-3.3 6.4-7.5 6.4-12h2v20c0 3.3-2.7 6-6 6h-8v2H12c-4.4 0-8-3.6-8-8V12zm28 20v12h12V32H32zm12 0h12V20H44v12zm0-12V8H32v12h12zm-12 0H20v12h12V20z' style='fill:%23acbdc5'/%3e%3cpath d='M32 56H20v-4.2c1.3.1 2.6.2 4 .2 2.8 0 5.4-.2 8-.6V56zm12-8.4V56h12V44h-6.4c-1.6 1.3-3.5 2.6-5.6 3.6z' style='fill:%23597380'/%3e%3cpath d='M20 4h32c4.4 0 8 3.6 8 8v40c0 4.4-3.6 8-8 8h-8v-4h8c2.2 0 4-1.8 4-4V12c0-2.2-1.8-4-4-4H20V4z' style='fill-rule:evenodd%3bclip-rule:evenodd%3bfill:%23314a52'/%3e%3c/svg%3e",
      tags: ["game", "board game", "canvas", "collaboration", "play"],
      versions: [
        {
          version: "0.7.6",
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
