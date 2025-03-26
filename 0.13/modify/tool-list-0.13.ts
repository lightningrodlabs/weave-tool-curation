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
      versionBranch: "1.14.x",
      title: "Vines",
      subtitle: "Group conversations and DMs",
      description: "A conversation capacity for groups in The Weave.",
      icon: "https://github.com/lightningrodlabs/vines/releases/download/we-applet-rc/icon.png",
      tags: ["chat"],
      versions: [
        {
          version: "1.14.0",
          url: "https://github.com/lightningrodlabs/vines/releases/download/we-applet-rc/vines-we_applet-1.14.0.webhapp",
          hashes: {
            happSha256:
              "f6919a3c763e00765a49461b37f4ce8469fbddaef1915743cedbe325351678f2",
            webhappSha256:
              "870bbaf31dbbeb79a4c2120a2223dfc5ee194600eb5915d73ca688e410152e62",
            uiSha256:
              "b22d255c932298e918cba0395d8a8c5bb3d769532aa0deb9375772a525d891a4",
          },
          changelog:
            "Added Microphone recording, Channel moderation and restrictions. UI for displaying live content.",
          releasedAt: 1742307927000,
        },
      ],
    },
    {
      id: "vines",
      versionBranch: "1.13.x",
      title: "Vines",
      subtitle: "Group conversations and DMs",
      description: "A conversation capacity for groups in The Weave.",
      icon: "https://github.com/lightningrodlabs/vines/releases/download/we-applet-rc/icon.png",
      tags: ["chat"],
      versions: [
        {
          version: "1.13.0",
          url: "https://github.com/lightningrodlabs/vines/releases/download/we-applet-rc/vines-we_applet-1.12.1.webhapp",
          hashes: {
            happSha256:
              "d0b4d065641d1808878bede62475f4a450525688cb2121d81a42aeee764b5697",
            webhappSha256:
              "89953e8f69959c77c6ac6c2b481420202cf39c7e9923e2c151619b2452a7ae44",
            uiSha256:
              "428d0a857e3d34b07f1a3ed6a9bd41bbba796d30ae883b853028ecfa8ca241e9",
          },
          changelog: "Changed Add button UI. Many small bug fixes & polish.",
          releasedAt: 1739562342000,
        },
      ],
    },
    {
      id: "vines",
      versionBranch: "1.12.x",
      title: "Vines",
      subtitle: "Group conversations and DMs",
      description: "A conversation capacity for groups in The Weave.",
      icon: "https://github.com/lightningrodlabs/vines/releases/download/we-applet-rc/icon.png",
      tags: ["chat"],
      versions: [
        {
          version: "1.12.0",
          url: "https://github.com/lightningrodlabs/vines/releases/download/we-applet-rc/vines-we_applet-1.11.1.webhapp",
          hashes: {
            happSha256:
              "2c9ab9b8c3eb6c87632f46d45086909ecd475b2f6cf85c663e37bfca8a1ac1ae",
            webhappSha256:
              "cf11598336cf470a800fd8f38a2158339eba6d2c888590f7190d2068bdfc0e03",
            uiSha256:
              "6ab730c77af8d09a241e2fd4e2dfcf212e92adc63e3cdaf9997aaeb69e049f7c",
          },
          changelog:
            "Fixed and added cross-group-view & view message edit history",
          releasedAt: 1739562332000,
        },
      ],
    },
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
            happSha256:
              "1fddfda589f79279e5953c98abc8c515ed790073a1c28065da58d84a1398d809",
            webhappSha256:
              "f2a86ba74d30cbfb62bc3e86dd921d69e2d1a2461b85b29c93dbc4a6b1dcea94",
            uiSha256:
              "ef2ee91c5bd985752487f88bd97fe4ed67adcecbb0856d663b406f145cb42749",
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
      description:
        "ZipZap is ephemeral chat.  Your messages are never stored.  Chat streams are defined by the people who are in them.",
      icon: "https://github.com/lightningrodlabs/zipzap/releases/download/v0.3.0-rc.0/zipzap_icon.png",
      tags: ["markdown", "real-time editor"],
      versions: [
        {
          version: "0.3.0-rc.0",
          url: "https://github.com/lightningrodlabs/zipzap/releases/download/v0.3.0-rc.0/zipzap.webhapp",
          hashes: {
            happSha256:
              "57ce77725d91790298c93d4321003e2f52415ddc81a5a8b618c5874b9fd4d49b",
            webhappSha256:
              "ec95e49f74c309a824adc578b3a6c0fe04cfa70903e95cbf676267950ad3fd1d",
            uiSha256:
              "9ac1b82eb457f26cfd3a9bf6114507162154f4f7e0188112c6aac5fa666053a3",
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
      description:
        "Real-time collaborative Markdown editing, includes version control.",
      icon: "https://github.com/lightningrodlabs/notebooks/releases/download/v0.4.1-rc.0/notebooks_logo.png",
      tags: ["markdown", "real-time editor"],
      versions: [
        {
          version: "0.4.1-rc.0",
          url: "https://github.com/lightningrodlabs/notebooks/releases/download/v0.4.1-rc.0/notebooks.webhapp",
          hashes: {
            happSha256:
              "79569a97b7c4c8736576668ec428f2f18caad8b8f39c72af6df503ea0bef6193",
            webhappSha256:
              "2780343e0edb8714247361728acd6c5c03bd9e5bd56be43d45b5910b861ff2b3",
            uiSha256:
              "d778270c26884728ef4977c1052f91150fa3f024436041b648e7de9e52523b47",
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
      description:
        "Ideation, retros, brain-storming, note-taking, anything with stickies!",
      icon: "https://github.com/holochain-apps/talking-stickies/releases/download/v0.12.0-rc.0/talking-stickies_icon.png",
      tags: ["notes", "stickies", "ideation", "boards"],
      versions: [
        {
          version: "0.12.0-rc.0",
          url: "https://github.com/holochain-apps/talking-stickies/releases/download/v0.12.0-rc.0/talking-stickies.webhapp",
          hashes: {
            happSha256:
              "6e5543dfe9e38f8818d95ca4fb808f435b4dad81ed7051a89e42734f3ab72d45",
            webhappSha256:
              "b5adf22ea0d586f5e9a329cd5042b5516d2163b57164d2f4201586b28b4f8b97",
            uiSha256:
              "2e52715326dc3026d3cc3772737dbd2154b22d27c69a23bc82eb26a27c1812c8",
          },
          changelog: "Updates for Holochain 0.4 and Moss 0.13",
          releasedAt: 1736287085974,
        },
        {
          version: "0.12.0",
          url: "https://github.com/holochain-apps/talking-stickies/releases/download/v0.12.0/talking-stickies.webhapp",
          hashes: {
            happSha256: "6e5543dfe9e38f8818d95ca4fb808f435b4dad81ed7051a89e42734f3ab72d45",
            webhappSha256: "c90effbb4f294740d1aace3d1eb25306442c7c08f522187912824c58a6a16d5e",
            uiSha256: "a9b543b876d93ab4401f608657861d3df197cfe69c6516f7cbc8649e764d6c95",
          },
          changelog: "Updates to final non-RC versions an syn core update",
          releasedAt: 1740423060713,
        },
      ],
    },
    {
      id: "kando",
      versionBranch: "0.12.x",
      title: "KanDo",
      subtitle: "Real-time KanBan boards",
      description:
        "KanBan board based project-tracking. Features include, commenting, labels, categories, checklists, markdown support, and more.",
      icon: "https://theweave.social/images/kando_icon.png",
      tags: ["kanban", "project management"],
      versions: [
        {
          version: "0.12.0-rc.0",
          url: "https://github.com/holochain-apps/kando/releases/download/v0.12.0-rc.0/kando.webhapp",
          hashes: {
            happSha256:
              "fd3a1781fb480d87117af276e5da0d3daa6e99f14e333480ca90f075eeb6455c",
            webhappSha256:
              "e5cfe34756043e01da9285158263300e6cf8b9d1659655c46badb45c169270fd",
            uiSha256:
              "f120a1982084e908f379a5e8e991f493848c352c06a27ce7e8eb25ef06079d95",
          },
          changelog: "Updates for Holochain 0.4 and Moss 0.13",
          releasedAt: 1736019237925,
        },
        {
          version: "0.12.0-rc.1",
          url: "https://github.com/holochain-apps/kando/releases/download/v0.12.0-rc.1/kando.webhapp",
          hashes: {
            happSha256:
              "fd3a1781fb480d87117af276e5da0d3daa6e99f14e333480ca90f075eeb6455c",
            webhappSha256:
              "eae1f8efc5de5c225e811123bec6a8a0c479b5089cf35682403078a225a5b85b",
            uiSha256:
              "4ad0fd8050b7e294e6d5825636585f6875eecdb84730a729f79348e692191337",
          },
          changelog: "Asset fixes.",
          releasedAt: 1736110661818,
        },
      ],
    },
    {
      id: "gamez",
      versionBranch: "0.8.x",
      title: "Gamez",
      subtitle: "Freeform space to create and play board games together",
      description: "Freeform space to create and play board games together",
      icon: "https://github.com/holochain-apps/gamez/releases/download/v0.7.7/icon.png",
      tags: ["game", "board game", "canvas", "collaboration", "play"],
      versions: [
        {
          version: "0.8.2",
          hashes: {
            happSha256:
              "6335eca61415e769c22934d354614e581e65eb4728be0eff2f447c3d729c1f6d",
            webhappSha256:
              "4ee650dd9b1fa4908c8586e548276fa5a7f8ce0794ebc91a243610728c8f1d2c",
            uiSha256:
              "6de94bb72486baed5bd57f3b4a88b670af35cbda801a0ec07e4d11e6a56bf64a",
          },
          url: "https://github.com/holochain-apps/gamez/releases/download/UI-v0.8.2/gamez.webhapp",
          changelog: `
          # UI 0.8.2
- 🎈 Fix: Mini view now renders correctly on the first render
- 🎈 Fix: Piece Source dragged now are rendered with the correct zooming
- 🎈 Fix: Modal prompt for naming spaces now auto-focus on input and is dismissed with ESC
- 🧹 Clean: Remove icon selection from space configurator since the Mini View is now used on the home screen
- 🧹 Clean: A lot of internal code clean up
- 🎛 Tweak: The activity log is not filled now on Library items, and when exporing a space the activity log is purged
- 🎛 Tweak: On Play or View mode all elements are fit on the screen (with some padding) and then panning and zooming is locked
- 🎛 Tweak: When there aren't any active games on the home screen, show a message instead
- 🎛 Tweak: Config Menu
  - Now instead of showing disabled elements it hides them
  - The locking system has a different non-editable view for Play mode
  - If there aren't any Config Menu items available on Play Mode, it won't show up
- 🎉 New: The Selection System
  - Big overhaul on how dragging and events are handled on the Surface component
  - You can now select elements as you would expect (drag a square, or click, shift+click to toggle, shift+drag to add to selection)
  - Dragging selected elements will move all elements selected
  - Moving a single element does not select it
- 🧨 Overhaul: The Resizing System
  - Resizing was redone; now you can resize from any edge or corner
  - You can Shift+Resize to keep aspect ratio
  - You can Alt+Resize to resize symetrically
  - The resizing overlay shows for selected elements only
- 🎉 New: Clear Space Modes
  - A space is in either edit mode, view mode or play mode
  - Library items are on edit mode
  - Active games are on view mode if you haven't joined the game, and play mode if you have
  - Archived spaces are on view mode
  - On active games you can switch temporarily to Edit Mode
  - On Edit Mode you can modify the elements locks and actions ignore the locking mechanisms
  - On Play Mode the actions available to elements are determined by the elements Can Configuration, which can only be modified from Edit Mode.
  - Lock System -> Can Configuration
    - The Can Configuration is part of elements and controls:
      - Moving
      - Resizing
      - Rotating
      - Adding/removing attachments
      - Modifying the element configuration
      - Removing and duplicating
    - The Can Configuration applies to Play Mode only; on edit mode you can modify it, but you are not bound by it
    - The Can Configuration can be accessed from the context menu of elements
- ❌ Disabled: The rotation system is temporarily non-functional until next release

# UI 0.8.1
 - Improved initial clients loading
 - Implemented more direct asset selection for "search", "creatables" and "pocket"
 - Overhauling of the lock system; now named instead on the positive: "can system". The locks apply only on game mode, and on edit mode everything is allowed and locks can be changed. The ConfigMenu only shows the things that are allowed if any. By default you can attach assets and move on newly created elements. On piece source elements you can additionally delete them.

# UI 0.8.0

- Improved people bar on game space to show session and players on a seamless element (removed the view-session-participants button) ⏱ 1:30hs
- Made element configuration a library-mode only feature ⏱ 45min
- Added instructions on game space ⏱ 30min
- Removed lock from library items; hide the preset if there is another edited with the same name. Added create and edit buttons next to each other on library items.  ⏱ 30min
- Show something on player pieces when empty  ⏱ 15min
- Bugfix: Pieces cannot be moved back to piece source; while we're at it, change the piece source to look like the player pieces source ⏱ 2:45hs
- Create mini-preview component to use on home screen instead of icons ⏱ 2:45
- Added WAL asset selection from element instead of having to use the config menu ⏱ 30min
- Updated home screen with bigger mini views and tweaked layout ⏱ 1:30hs
- Make presets behaviour more consistent; they are now indistinguishable from library items on the DHT; you can archive them and remove them ⏱ 1:30hs
- Updated Holochain libraries (and others while I was at it) and ensure the .webhapp file can be loaded into the Holochain launcher ⏱ 30min
- Release UI 0.8 ⏱ 30min
          `,
          releasedAt: 1742832061,
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
    {
      id: "sweet",
      versionBranch: "feature/OT-0.4",
      title: "Sweet",
      subtitle: "Real-time spreadsheets and documents",
      description:
        "Sweet includes real-time collaborative spreadsheets and documents.",
      icon: "https://raw.githubusercontent.com/lightningrodlabs/sweet/refs/heads/feature/OT-0.4/ui/icon.png",
      tags: [
        "collaboration",
        "spreadsheet",
        "table",
        "data",
        "document",
        "office",
      ],
      versions: [
        {
          version: "0.10.4",
          url: "https://github.com/lightningrodlabs/sweet/releases/download/0.10.4/calcy.webhapp",
          hashes: {
            happSha256:
              "16113b9ece15e1cf794e5f24409162a24dcdb3c18e10af6a64c2d16e56b339e9",
            webhappSha256:
              "496b0567cabe44694af6f648ea99fcc90319722909a1e5555d46668c4aed7984",
            uiSha256:
              "30db0bb19775630f8acf6c7584c84e9de307a79c9a721dedd73e7566065e6812",
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
            happSha256:
              "6b6d4c60d4ddc5b82731263519a22597bbfea6d0e4eb57bfd43b16b1e7600f2c",
            webhappSha256:
              "006165cb5864028d10cd1207a5b7217d38d16c2100baee01d3acc9e48bee5b91",
            uiSha256:
              "ed1cf682ed5464cc247e1f7b8c8890eac0dceb62378b40b158beb2425f7661e7",
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
        {
          version: "0.1.4",
          url: "https://github.com/zequez/substrate/releases/download/v0.1.4/substrate.webhapp",
          hashes: {
            happSha256:
              "6b6d4c60d4ddc5b82731263519a22597bbfea6d0e4eb57bfd43b16b1e7600f2c",
            webhappSha256:
              "a5803bab452a2b72f22f8a331ce03b0d246c08910c945a99eb49b9c4d3d049f7",
            uiSha256:
              "ba0523ff9b3756fd1ef9fd89e965355640f7d6cd5b5f5cda8d56e6a7693e2253",
          },
          changelog: `- Added WASD keyboard-based movement
  - You can now select frames and move them or trash them all together
  - Some code clean up and organization
  - Improved agents display; show avatars
  - Added tooltips`,
          releasedAt: 1739200275760,
        },
        {
          version: "0.1.5",
          url: "https://github.com/zequez/substrate/releases/download/v0.1.5/substrate.webhapp",
          hashes: {
            happSha256:
              "6b6d4c60d4ddc5b82731263519a22597bbfea6d0e4eb57bfd43b16b1e7600f2c",
            webhappSha256:
              "53cbda7c244b2ab4d1006810c825330afe83273f974433ac7d3eb6f67105d00c",
            uiSha256:
              "800ab9195cc40edb25e49ef3298026c6109de610dc44d3758690fa47f8b9106a",
          },
          changelog: `- Added an Excalidraw-UX-inspired toolbar with hand, select, frame and art tools
  - Secret hot-key Shift+Z to reverse zoom direction
  - Remove cursor ghost frame
  - Made frame controls less moving, tinier; for now
  - Show asset name along with icon with far out zoom
  - Pixels can now be selected, moved and trashed like frames
  - You can delete selection with Backspace or Delete key
  - Art tool has main and alt colors for left/right click
  - Added configurable right-click-hotkeyed tool
  - Added hand tool you can pick to pan with left click (and panning also linked to wheel click from any tool)`,
          releasedAt: 1739801582029,
        },
      ],
    },
    {
      id: "acorn",
      versionBranch: "11.x.x",
      title: "Acorn",
      subtitle: "State-of-Affairs Trees for Project Management",
      description:
        "Project mangament redefined for distributed teams. Agile project management made simple. Open-source. Peer-to-peer. Perfect for remote teams.",
      icon: "https://github.com/lightningrodlabs/acorn/blob/v11.1.0-alpha/weave-tool/acorn-app-icon-512px.png?raw=true",
      tags: ["project-management"],
      versions: [
        {
          version: "11.1.0",
          url: "https://github.com/lightningrodlabs/acorn/releases/download/v11.1.0-alpha/acorn-moss.webhapp",
          hashes: {
            happSha256:
              "f784e034942274e09fc7720a63765e139101831531e4d04e8cb84f4f02cfa746",
            webhappSha256:
              "0c5fd802bbe254efd255edff1302e50f307f893d6e1418a2e92b1202077396a7",
            uiSha256:
              "f27463b7616f1eb9bb6b1c933d67ddb5bf5a2745b991c48b218ebca723750305",
          },
          changelog: "Bumped to Holochain 0.4.0. Now compatible with Moss.",
          releasedAt: 1740120779000,
        },
        {
          version: "11.1.2",
          url: "https://github.com/lightningrodlabs/acorn/releases/download/v11.1.2-alpha/acorn-moss.webhapp",
          hashes: {
            happSha256:
              "f784e034942274e09fc7720a63765e139101831531e4d04e8cb84f4f02cfa746",
            webhappSha256:
              "811c7ec4d08513ad37a0494e0df5bb647a130c392c094e65f3e4db85ac676b0e",
            uiSha256:
              "972ad7d67489dd33ec5e14d74bf89de2dcb38282ed24d978d85798e2796e45f4",
          },
          changelog:
            "fixed bug preventing projects from being deleted or left.",
          releasedAt: 1741954511000,
        },
      ],
    },
  ],
});
