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
      id: "matthme.presence",
      versionBranch: "0.15.x",
      title: "Presence",
      subtitle: "Video Calls",
      description: "## Overview\n\nPresence is a peer-to-peer video call and screen sharing tool. WebRTC connections are negotiated directly between participants, with TURN-relay support for restrictive networks and a Holochain-signal audio fallback when WebRTC fails.\n\n## Features\n\n- Multi-party video calls with screen sharing\n- Circle and rectangle viewport modes, plus hide-self\n- Separate, resizable screen-share pane\n- Connection status indicators and TURN-relay detection\n- Asset sharing into rooms\n- Pluggable module system (Stack for raise-hand ordering, count-down timer, etc.)\n- Reset media tracks on the fly\n- Holochain-signals-based audio fallback when WebRTC is blocked",
      icon: "https://github.com/matthme/presence/blob/main/ui/icon.png?raw=true",
      tags: ["video calls", "screen sharing"],
      versions: [
        {
          version: "0.15.0",
          url: "https://github.com/lightningrodlabs/presence/releases/download/v0.15.0/presence.webhapp",
          hashes: {
            happSha256:
              "e707d8960e209e58043ea54cdf8347b5e5ba2b797613bbf41fca7e905d8823db",
            webhappSha256:
              "4e55edf3de7cf232509f46be1757b89374551fcd543ed57a8db22f8dfde0c975",
            uiSha256:
              "d255e4bd71a8bd75f58b176c063821f33f128bf4116fa0132c33476cf8b2a948",
          },
          changelog: "First release of the Holochain 0.7 line, for Moss 0.16. Same feature set as 0.14.9. The Holochain 0.7 DNA upgrade changed the network: 0.15.0 agents cannot see or join rooms with agents on any 0.14.x version, so groups should upgrade together.",
          releasedAt: 1786118333507,
        },
        {
          version: "0.15.1",
          url: "https://github.com/lightningrodlabs/presence/releases/download/v0.15.1/presence.webhapp",
          hashes: {
            happSha256:
              "e707d8960e209e58043ea54cdf8347b5e5ba2b797613bbf41fca7e905d8823db",
            webhappSha256:
              "a8f4b56ec5d44f65fb9026f128510ff51a3bd2d9c1f9d5ba76cde096016b9ba1",
            uiSha256:
              "924a6ad8793ce2418746928c24231e803a15db523c2daab1389c05eb804b7caa",
          },
          changelog: "Connection reliability release, root-caused from field diagnostics of a session-wide connection thrash on 0.15.0. Fixes a WebRTC reconnect deadlock where two peers reconnecting at the same time could permanently discard each other's offers; reconnects now back off exponentially and a connection that exhausts its retries fails cleanly and gets rebuilt. Audio/video over Holochain signals adapts its send rate to the measured signal round-trip time and batches voice frames (capability-gated), and redundant ICE candidates are deduplicated — much less signal traffic on degraded networks. A total signal outage no longer empties the room: peers are held present for up to 30s, ending chime storms and tile flapping during network blips. Connection and diagnostics timeouts scale with signal round-trip time. Also updates the profiles library and switches zome post-commit handlers to local gets. Same DNA as 0.15.0 — joins existing rooms, and mixed 0.15.0/0.15.1 rooms keep working.",
          releasedAt: 1786650680747,
        },
        {
          version: "0.15.2",
          url: "https://github.com/lightningrodlabs/presence/releases/download/v0.15.2/presence.webhapp",
          hashes: {
            happSha256:
              "e707d8960e209e58043ea54cdf8347b5e5ba2b797613bbf41fca7e905d8823db",
            webhappSha256:
              "a199ce46934548d2f21ff6f955c5b33df61479a27a85f7c387bce1ca6e6320a9",
            uiSha256:
              "367e183cc1ccbb8a2ac2139b8d4f109cd5018d22d1fefcaf5530024c56568983",
          },
          changelog: "Packaging correctness release. A dependency-resolution fault made the 0.15.0 and 0.15.1 builds bundle an older WebRTC library, so the reconnection fixes announced in 0.15.1 (the mutual-reconnect deadlock fix, exponential backoff, ICE candidate deduplication, and clean retry-exhaustion failure) were not actually active in the field. 0.15.2 is the first build that really ships them, with a build-time guard so the bundled library version cannot silently diverge again. Also improves exported diagnostics: per-peer signals-video receive stats, and shared diagnostic snapshots carry 5x more history. Profile fix: the nickname now shows when a profile has no avatar image. Same DNA as 0.15.0/0.15.1 — joins existing rooms, and mixed 0.15.x rooms keep working.",
          releasedAt: 1787677069129,
        },
        {
          version: "0.15.3",
          url: "https://github.com/lightningrodlabs/presence/releases/download/v0.15.3/presence.webhapp",
          hashes: {
            happSha256:
              "e707d8960e209e58043ea54cdf8347b5e5ba2b797613bbf41fca7e905d8823db",
            webhappSha256:
              "8d0d29f0bb69d0c995e73ce22f1307bb027f69c00232e848297de1011c6dc37a",
            uiSha256:
              "02e1bb16113ef3313290ee2f251e1e55d526d9b7a677cdc04faa2600a5bc98bc",
          },
          changelog: "Video display fix release. After a call switched from signal-carried video to a direct WebRTC connection, a frozen frame of the low-fi filmstrip video could stay painted over the live video, making the peer appear frozen until the pane was rebuilt. Two causes, both fixed: a stop/decode race let a stale filmstrip frame repaint after its clear and never be cleared again, and a CSS paint-order bug drew the filmstrip overlay above the video element, so any held filmstrip frame briefly covered live video even on the normal path. Live WebRTC video now paints above the filmstrip. UI-only change: same DNA as 0.15.0-0.15.2 and the app bundle is byte-identical to 0.15.2's, so this arrives as an in-place update and mixed 0.15.x rooms keep working.",
          releasedAt: 1787766971909,
        },
        {
          version: "0.15.4",
          url: "https://github.com/lightningrodlabs/presence/releases/download/v0.15.4/presence.webhapp",
          hashes: {
            happSha256:
              "e707d8960e209e58043ea54cdf8347b5e5ba2b797613bbf41fca7e905d8823db",
            webhappSha256:
              "a7d34c69915419cd09dea881ac7b229a21d68bb1f5794d4798e662c1ab8a2cbc",
            uiSha256:
              "287a6112bf6ec60fa1fbc449587667c341784accacd48940073027a9c244fa4a",
          },
          changelog: "Voice fix release. After switching from a direct WebRTC connection back to signal-carried audio, one direction of voice could stay silent for up to a minute (exactly as long as the previous signal-carried stint, worsening with each switch): the sender restarts its voice numbering on every capture stop, and the receiver's duplicate filter silently discarded the restarted stream until its numbers caught up. Voice frames now carry a capture-session marker, so a restarted stream is picked up immediately and stale packets from an old stream are dropped instead of replayed. UI-only change: same DNA and byte-identical app bundle as 0.15.2/0.15.3 — arrives as an in-place update; older 0.15.x peers interoperate (they simply keep the old behavior when sending).",
          releasedAt: 1787775984535,
        },
        {
          version: "0.15.5",
          url: "https://github.com/lightningrodlabs/presence/releases/download/v0.15.5/presence.webhapp",
          hashes: {
            happSha256:
              "e707d8960e209e58043ea54cdf8347b5e5ba2b797613bbf41fca7e905d8823db",
            webhappSha256:
              "7674a30c8cee209ae2c5db339da9755ec4beb9ba6054a3f6fff52f4af54cbc01",
            uiSha256:
              "083fea1bfeb7e108c616e9477b7db3177f28634d68180e00c441ca1d62b051fc",
          },
          changelog: "Recovery and visibility release. A microphone or camera that died outside the app — OS revoke, unplug, another app taking the device — used to stay dead until you left and rejoined the room; capture state is now reconciled against what you asked for on every presence tick and the device is re-opened automatically. Video no longer fails to start with a peer whose capabilities were still in flight when you joined. And whatever the app cannot deliver is now shown instead of failing silently: mic/camera buttons badge an unavailable device and say whether it is still retrying, peer tiles say what connection is being established, and a room banner appears while the Holochain signal carrier is down.",
          releasedAt: 1788355222979,
        },
        {
          version: "0.15.6",
          url: "https://github.com/lightningrodlabs/presence/releases/download/v0.15.6/presence.webhapp",
          hashes: {
            happSha256:
              "e707d8960e209e58043ea54cdf8347b5e5ba2b797613bbf41fca7e905d8823db",
            webhappSha256:
              "22cbef8c3e0e5b6d70cd20d99c72a9bb50ec98516e704242577ec2249129ceb2",
            uiSha256:
              "4d3764bf471423a1c5113b46adc35def0e2f80870ef0359358c094b413844a1f",
          },
          changelog: "Maintenance release. No user-visible changes: this ships a large internal restructuring of the connection and presence code — one per-peer state record in place of eighteen parallel maps, and the media, presence, screen-share, diagnostics and device concerns each moved into their own module — which makes future connection fixes safer to make and easier to review. Same DNA and byte-identical app bundle as 0.15.0-0.15.5 — arrives as an in-place update, joins existing rooms, and interoperates with every 0.15.x peer in both directions.",
          releasedAt: 1788553508356,
        },
      ],
    },
    {
      id: "ziptest",
      versionBranch: "0.6.x",
      title: "ZipTest",
      subtitle: "Simple performance testing",
      description:
        "Send batches of signals and watch acks com back.  Create entries and watch how long it takes for them to propagate.",
      icon: "https://github.com/holochain/ziptest/releases/download/ziptest-v0.3.0/ziptest_icon.png",
      tags: ["testing"],
      versions: [
        {
          version: "0.6.0-dev.0",
          hashes: {
            happSha256:
              "4da017a73dee5e857448b9075a801e23029ab58d4acee50a1f9ae6d7557bb8f3",
            webhappSha256:
              "271367169b5ab3e8ec73ae8bd9118b841d000733a5315fbf39dbd0c7a27bde1e",
            uiSha256:
              "5482b628a3ebf2189ea27897471b6a5bb691f9c87290245524b7f3cece3090dd",
          },
          url: "https://github.com/holochain/ziptest/releases/download/v0.6.0-dev.0/ziptest.webhapp",
          changelog: "Update to Holochain 0.7.0",
          releasedAt: 1785789192013,
        },
      ],
    },
    {
      id: "ark",
      versionBranch: "0.1.x",
      title: "Ark",
      subtitle: "An archive for a community's written record",
      description: "## Overview\n\nArk is an archive for a community's written record — meeting minutes, decisions and reports — held by the group rather than on a server that one person administers. Documents are immutable, as everywhere in Holochain, but amendable: amending publishes a new version and keeps the old, so the record shows both what it says now and what it used to say.\n\n## Features\n\n- Folder tree held as links, separate from the documents, so reorganising never touches a document\n- Amendable documents with version history\n- Full-text search across the whole archive, in the browser — ranked results with snippets, quoted phrases, prefix terms and exclusions\n- Attachments, indexed alongside the documents that carry them\n- Import a directory of markdown with YAML front matter; export the archive back out as the same format\n- Paste from Google Docs, converted to markdown\n- Documents can be added to the Moss pocket and embedded elsewhere\n\n## Status\n\nExperimental. This is an early release and the DNA may change.",
      icon: "https://github.com/lightningrodlabs/ark/blob/main/ui/icon.png?raw=true",
      tags: ["archive", "documents", "minutes", "experimental"],
      versions: [
        {
          version: "0.1.0",
          url: "https://github.com/lightningrodlabs/ark/releases/download/ark-v0.1.0-hc0.7/ark.webhapp",
          hashes: {
            happSha256:
              "191336d70eaeedb0af1102b8284037c53a0c95ca19c8cd63815bff4e63fcb113",
            webhappSha256:
              "bb1689f94c8aacad2a399cee4df165574a4669d1fa747b57b5613f4bcda2f312",
            uiSha256:
              "decec05a50521a48ccb2504103f9448a63a9622d9008e2c147eaa0d275e4f034",
          },
          changelog: "First release. Experimental: an early build of the Holochain 0.7 line, for Moss 0.16. Same feature set as the 0.15 build, on a different DNA — the two lines are separate networks and cannot see each other.",
          releasedAt: 1787250536000,
        },
        {
          version: "0.1.1",
          url: "https://github.com/lightningrodlabs/ark/releases/download/ark-v0.1.1-hc0.7/ark.webhapp",
          hashes: {
            happSha256:
              "191336d70eaeedb0af1102b8284037c53a0c95ca19c8cd63815bff4e63fcb113",
            webhappSha256:
              "a23424488d9e3be7c7ab35d98a81defaff6acbc3bb52121a4348258879b141e7",
            uiSha256:
              "f177f121bf936b191ed690eb031fab72ab4fc49fc0892c91b4af0017d678e3d6",
          },
          changelog: "UI-only release. Fixes an import that failed on large archives in live Moss: picking a folder read every markdown file at once, which the packaged applet environment refuses at scale, and the failure was swallowed so the panel simply sat there. Reads are now bounded and retried, a failure names the file, and a long run of failures stops early instead of grinding. You can also now pick individual files rather than only a whole folder. Same happ as 0.1.0 — same DNA, same network, so 0.1.0 and 0.1.1 peers stay together.",
          releasedAt: 1787255794000,
        },
        {
          version: "0.1.2",
          url: "https://github.com/lightningrodlabs/ark/releases/download/ark-v0.1.2-hc0.7/ark.webhapp",
          hashes: {
            happSha256:
              "191336d70eaeedb0af1102b8284037c53a0c95ca19c8cd63815bff4e63fcb113",
            webhappSha256:
              "db7d341bb5258cb1a1ffbf681c71934637ced1eb7a4bdb40ab1408f6164e866b",
            uiSha256:
              "204d7c50b5ca645f012d92600be5191c25070ea0357c6b23bb801e5b222f9f7a",
          },
          changelog: "Search release. Results that matched only approximately are no longer returned unexplained: a query is answered exactly by default, and near matches appear only when nothing matched exactly \u2014 labelled, and with the word that actually matched highlighted in both the result and the document. A new Near matches setting offers Only when nothing matches (default), Always \u2014 which surfaces misspellings in the archive itself, kept separate and ordered after the exact hits \u2014 and Never. Search results now continue past the first fifty. The Filters control is a real toggle that shows when a filter is active. Same happ as 0.1.0 and 0.1.1 \u2014 same DNA, same network.",
          releasedAt: 1787266339000,
        },
      ],
    },
    {
      id: "notebooks",
      versionBranch: "0.7.x",
      title: "Notebooks",
      subtitle: "Collaborative MarkDown editor",
      description: "## Overview\n\nNotebooks is a real-time collaborative Markdown editor with built-in versioning. Multiple participants can edit the same document together with live cursors and choose between raw Markdown or a rich text view.\n\n## Features\n\n- Real-time multi-user editing with live participant cursors\n- Markdown and rich text (ProseMirror) editing modes\n- Rich text image support\n- Adjustable Markdown editor width\n- Undo/redo and tab key support in rich text\n- Participant online/offline indicators\n- Built-in version control of documents",
      icon: "https://github.com/lightningrodlabs/notebooks/releases/download/v0.6.0/notebooks_logo.png",
      tags: ["markdown", "real-time editor"],
      versions: [
        {
          version: "0.7.0",
          url: "https://github.com/lightningrodlabs/notebooks/releases/download/v0.7.0/notebooks.webhapp",
          hashes: {
            happSha256:
              "3939d93004e996412c616c2582e01b20368372402ba50c86a2d1c7188ba5141a",
            webhappSha256: "9955c6acd66ef84532337f83487e9f8f5d4ec6e2d763c2a86d179f366008210f",
            uiSha256: "8d7b122007f0b21f873db490b832f4bff4acc3d8369a6ee3bfc57ebf5af12100",
          },
          changelog: "First release of the Holochain 0.7 line, for Moss 0.16. New network: 0.7.x agents cannot see notes from any 0.6.x version, so groups should upgrade together. Use Settings \u2192 Export/Import to carry notes across.",
          releasedAt: 1788807604000,
        },
      ],
    },
  ],
});
