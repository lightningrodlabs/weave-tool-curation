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
  ],
});
