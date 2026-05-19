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
      versionBranch: "0.5.x",
      title: "ZipTest",
      subtitle: "Simple performance testing",
      description:
        "Send batches of signals and watch acks com back.  Create entries and watch how long it takes for them to propagate.",
      icon: "https://github.com/holochain/ziptest/releases/download/ziptest-v0.3.0/ziptest_icon.png",
      tags: ["testing"],
      versions: [
        {
          version: "0.5.0-dev.0",
          hashes: {
            happSha256:
              "06d6957ff2812e16f3707315f6ea397260cc2bec690eaba9522b6f30755e8085",
            webhappSha256:
              "f49b368096c2ac4f40a78e1ce56d5cf507331efbe6779d927b17ac44650ee079",
            uiSha256:
              "8ed9f60e5eaa484bc350a133cfe4045ccb65b87593c742d44218c1244b1fe0c8",
          },
          url: "https://github.com/holochain/ziptest/releases/download/v0.5.0-dev.0/ziptest.webhapp",
          changelog: "Update to holochain 0.7 line",
          releasedAt: 1779219790524,
        },
      ],
    },
  ],
});
