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
      id: "files",
      versionBranch: "1.1.x",
      title: "Files",
      subtitle: "File sharing & sending",
      description: "",
      icon: "https://github.com/lightningrodlabs/files/releases/download/we-applet-rc/icon.png",
      tags: ["file", "storage"],
      versions: [
        {
          version: "1.1.0",
          url: "https://github.com/lightningrodlabs/files/releases/download/manual-release/files-we_applet-1.1.0.webhapp",
          hashes: {
            happSha256:
              "1c5a0dede5dd5aa6b59ca0769bd4652e04f21448e9aa4fbbbf0fc77695c83632",
            webhappSha256:
              "dc31d64c0bf2c12fcdcd924a180ab3d48f669acdbbef0f9ae350b6c30d94b627",
            uiSha256:
              "8ac71edfbb0b0af6ecda9a1788b981a743f357b8c5b28771f30cce62da0c6bc1",
          },
          changelog: "Updates for Holochain 0.5 and Moss 0.14",
          releasedAt: 1745418999425,
        },
      ],
    },
    {
      id: "converge",
      versionBranch: "0.2.x",
      title: "Converge",
      subtitle: "A group decision-making tool",
      description:
        "Converge provides structure for decision-making that shifts the focus from outcomes to criteria.",
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
          version: "0.2.0",
          url: "https://github.com/lightningrodlabs/converge/releases/download/0.2.0/converge.webhapp",
          hashes: {
            happSha256:
              "2ba61f8be6cf2966dc94cd1b68740bdde0165c12430d87fc095952cd9d7ab608",
            webhappSha256:
              "0c0a24ae90d6353eaddc3b41d5aae2d92bbf7c252349348b5215154bb9a85087",
            uiSha256:
              "f635b1405626d369ce1e5ecbdd7884496befc1b4cc12b41e6d488c02aacfd6eb",
          },
          changelog: "Initial release",
          releasedAt: 1745336855862,
        },
        {
          version: "0.2.1",
          url: "https://github.com/lightningrodlabs/converge/releases/download/0.2.1/converge.webhapp",
          hashes: {
            happSha256:
              "2ba61f8be6cf2966dc94cd1b68740bdde0165c12430d87fc095952cd9d7ab608",
            webhappSha256:
              "8a7e78f2631af70c271e33daa0746f13eccef5bbec5efe5f37443e414811d418",
            uiSha256:
              "0466a46c04595ae04e503d3406a86fc80f14811640e12baace99622374db7092",
          },
          changelog: "Day 1 patch",
          releasedAt: 1745442741695,
        },
      ],
    },
    {
      id: "whosin",
      versionBranch: "main-0.5",
      title: "Who's In?",
      subtitle: "Scheduling events and tracking agreements",
      description:
        " Who's In? enables users to propose events, shared tasks and agreements. With it, anyone can suggest a joint action or event, which other people can agree to on the contingency that every necessary role is filled. This allows group action to grow from idea to reality without anyone having to worry about its viability.",
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
          version: "0.2.0",
          url: "https://github.com/lightningrodlabs/whos-in/releases/download/0.2.0/whosin.webhapp",
          hashes: {
            happSha256:
              "d0f36d3f49a03f41f2f52559e7f4726b244111cb3f456367ac2ac0d92201e064",
            webhappSha256:
              "c8190da01f49a58fbb25e0ca21116cd4c67b17c8b0d40f7b53fbf646b46a0f63",
            uiSha256:
              "023a196630b6ed1aca7264f96ca626807986cacc262c7045e9caa2282a8d08b6",
          },
          changelog: "Initial release",
          releasedAt: 1745336855862,
        },
        {
          version: "0.2.1",
          url: "https://github.com/lightningrodlabs/whos-in/releases/download/0.2.1/whosin.webhapp",
          hashes: {
            happSha256:
              "d0f36d3f49a03f41f2f52559e7f4726b244111cb3f456367ac2ac0d92201e064",
            webhappSha256:
              "e4144adcaa319487981f0a059a2bd334480d6eaabfcba217e7097d8edee81532",
            uiSha256:
              "f6f178d732373be911c65d96beb6318e4d903daa6c3db84425236e0e5f54dfe2",
          },
          changelog: "Day 1 patch",
          releasedAt: 1745429999504,
        },
      ],
    },
    {
      id: "kando",
      versionBranch: "0.13.x",
      title: "KanDo",
      subtitle: "Real-time KanBan boards",
      description:
        "KanBan board based project-tracking. Features include, commenting, labels, categories, checklists, markdown support, and more.",
      icon: "https://theweave.social/images/kando_icon.png",
      tags: ["kanban", "project management"],
      versions: [
        {
          version: "0.13.0-rc.0",
          url: "https://github.com/holochain-apps/kando/releases/download/v0.13.0-rc.0/kando.webhapp",
          hashes: {
            happSha256:
              "178b73aee2ca8d851fe831ba9512da44ec4dc4b263d03ecc7311f1202ae37d36",
            webhappSha256:
              "b598abe73dce46f34f7d68250ee9f541daaca8b18735da8fed2badce9c617080",
            uiSha256:
              "f09bb1c11c533edac722f93587177e6345a017fc3b91c43faf92f3a3d15fbb4b",
          },
          changelog: "Updates for Holochain 0.5 and Moss 0.14",
          releasedAt: 1745418989425,
        },
      ],
    },
    {
      id: "notebooks",
      versionBranch: "0.5.x",
      title: "Notebooks",
      subtitle: "Collaborative MarkDown editor",
      description:
        "Real-time collaborative Markdown editing, includes version control.",
      icon: "https://github.com/lightningrodlabs/notebooks/releases/download/v0.5.0-rc.0/notebooks_logo.png",
      tags: ["markdown", "real-time editor"],
      versions: [
        {
          version: "0.5.0-rc.0",
          url: "https://github.com/lightningrodlabs/notebooks/releases/download/v0.5.0-rc.0/notebooks.webhapp",
          hashes: {
            happSha256:
              "f29768624cc250bffd06d416f7c9f0e191bfbfda4fd03f2c3498c48ce30bc174",
            webhappSha256:
              "15cb2f1738bd0dc48995e4768bd33e7dbe298251653e03033e44116b6682f141",
            uiSha256:
              "2b8c69debfa7ab81f911237307d63c0586b1676f6d29bb87e188bb84c18f9bb5",
          },
          changelog: "Updates for Holochain 0.5 and Moss 0.14",
          releasedAt: 1745418989425,
        },
      ],
    },
    {
      id: "talking-stickies",
      versionBranch: "0.13.x",
      title: "TalkingStickies",
      subtitle: "Real-time stickies boards",
      description:
        "Ideation, retros, brain-storming, note-taking, anything with stickies!",
      icon: "https://github.com/holochain-apps/talking-stickies/releases/download/v0.12.0-rc.0/talking-stickies_icon.png",
      tags: ["notes", "stickies", "ideation", "boards"],
      versions: [
        {
          version: "0.13.0-rc.0",
          url: "https://github.com/holochain-apps/talking-stickies/releases/download/v0.13.0-rc.0/talking-stickies.webhapp",
          hashes: {
            happSha256:
              "5abed674b6133447ba3b782d93adc1c5a39fae567edb2d44a2e357280450778e",
            webhappSha256:
              "562d038aca9396e050949aada01ffb98576ed3f1b6470396c04a03f6b6346771",
            uiSha256:
              "bf2b89e5dcc79ed8c1858919b175a3ded85ca8581ff033f384c2570e8396e610",
          },
          changelog: "Updates for Holochain 0.5 and Moss 0.14",
          releasedAt: 1745507314219,
        },
      ],
    },
    {
      id: "spreadsheets",
      versionBranch: "0.1.x",
      title: "Spreadsheets",
      subtitle: "Real-time collaborative spreadsheets",
      description:
        "Spreadsheets for real-time collaborative editing.",
      icon: "https://github.com/lightningrodlabs/sweet/releases/download/spreadsheets-0.1.0/calcy.png",
      tags: ["spreadsheet", "collaboration", "real-time"],
      versions: [
        {
          version: "0.1.0",
          url: "https://github.com/lightningrodlabs/sweet/releases/download/spreadsheets-0.1.0/calcy.webhapp",
          hashes: {
            happSha256:
              "3084158209487c171aa9cb1f78ada630d47aad67689312bd84bfe82b92ca673c",
            webhappSha256:
              "2c62dbf7318be8d84f047e82f7bb3744ac63382c3fbb2d8e8af7ce9128112104",
            uiSha256:
              "5d5461e7a01247b8c9ec9e7b994be2834384f2197295733ad1d52e9f54a68e66",
          },
          changelog: "First release",
          releasedAt: 1745938625478,
        },
      ],
    },
    {
      id: "datatub",
      versionBranch: "0.10.x",
      title: "DataTub",
      subtitle: "Airtable-like data management",
      description:
        "Data management, collaboration, and custom displays.",
      icon: "https://github.com/lightningrodlabs/tables/blob/v0.10.3/weave/datatub.png?raw=true",
      tags: ["data", "management", "collaboration"],
      versions: [
        {
          version: "0.10.3",
          url: "https://github.com/lightningrodlabs/tables/releases/download/v0.10.3/tables.webhapp",
          hashes: {
            happSha256:
              "21526e04cad5cd6c336266fdaf71d7b79a9a84d8ad1ba198f3270868962a1457",
            webhappSha256:
              "3f796eff3ca8627f538e89a6e17b1fc0321d8c9a81d533110da4d40f05fbdc0f",
            uiSha256:
              "10ad5885a6f6f77cc7a9a1ad7908d063674552ddab6fde0e2d5c9f90eefe07ae",
          },
          changelog: "First release",
          releasedAt: 1746034699618,
        },
      ],
    },
  ],
});
