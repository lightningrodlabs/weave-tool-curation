import { defineDevCollectiveToolList } from "@theweave/moss-types";

export default defineDevCollectiveToolList({
  developerCollective: {
    id: "lightningrodlabs-dev",
    name: "Lightningrod Labs (Dev)",
    description:
      "In-development builds from Lightningrod Labs. Unstable and subject to change.",
    icon: "https://lightningrodlabs.org/lrl_logo.png",
    contact: {
      website: "https://lightningrodlabs.org",
    },
  },
  tools: [
    {
      id: "oww-workshop",
      versionBranch: "0.1.x",
      title: "Online Writing Workshop",
      subtitle: "peer review for fiction writers",
      description: "## Overview\n\nThe Online Writing Workshop, ported to Holochain: members post fiction, review each other's work with inline spot comments and ratings, and earn the points that let them post more. The workshop's taxonomy, economy and features are configured in-app by the tool's installer and the stewards they appoint.\n\n## Features\n\n- Post submissions (short stories, chapters, synopses) with a genre/type/audience taxonomy\n- Reviews with text-anchored spot comments, per-criterion ratings and a publishable poll\n- A points economy: reviews earn points, posting spends them; under-reviewed pieces offer a bonus\n- Reviewer levels (the bees) for prolific reviewers\n- Workshop settings: taxonomy, rating criteria, economy numbers and feature switches, all editable in-app\n\n## Status\n\nIn development. Dev builds: the DNA may change between versions and networks may be reset without notice.",
      icon: "https://github.com/lightningrodlabs/weave-tool-curation/releases/download/dev-artifacts/oww-icon.png",
      tags: ["writing", "fiction", "peer review", "experimental"],
      versions: [
        {
          version: "0.1.0",
          url: "https://github.com/lightningrodlabs/weave-tool-curation/releases/download/dev-artifacts/oww-workshop-0.1.0.webhapp",
          hashes: {
            happSha256:
              "a4eb92b65297977d2859d26a868ee2d33591684421b5e0c33593c2b9abebdd47",
            webhappSha256:
              "bc6100f2097577290295dc2526bb11965e7b925415d46c1b93ab540159473f1c",
            uiSha256:
              "0e7769132dee5d2b3f5bbe1ec98592b16e9c11b6799745bb5d4a1cc3d4776757",
          },
          changelog:
            "First dev build: submissions, reviews with spot comments and ratings, the points economy, and in-app workshop settings with stewards.",
          releasedAt: 1787625390397,
        },
      ],
    },
    {
      id: "effing",
      versionBranch: "0.1.x",
      title: "effing",
      subtitle: "track where your daily capacity goes",
      description: "## Overview\n\nA tool for tracking where your daily capacity goes — and, on the other half of the window, the same picture for your group. You set a daily budget, log what drains it and what recharges it, and what you deliberately **give** to the commons. A give debits your budget like a drain, but also mints an equal number of points into the group's shared **Fund**. You check in at the end of the day, and see your week.\n\n## Features\n\n- A daily budget with drains, recharges, gives and an end-of-day check-in\n- Your week at a glance\n- The group half: everyone's status, the activity feed, and the Fund's balance\n- Boosts: hand someone a point of budget when they're running low — +1 from your own balance, or up to 10 drawn from the Fund the group's own gives built, always with a message\n- Each person chooses the app's voice (censored or not) on their own device\n\n## Status\n\nIn development. Dev builds: the DNA may change between versions and networks may be reset without notice.",
      icon: "https://github.com/lightningrodlabs/weave-tool-curation/releases/download/dev-artifacts/effing-icon.png",
      tags: ["wellbeing", "mutual aid", "experimental"],
      versions: [
        {
          version: "0.1.0",
          url: "https://github.com/lightningrodlabs/weave-tool-curation/releases/download/dev-artifacts/effing-0.1.0.webhapp",
          hashes: {
            happSha256:
              "e78e83cd30902cb1b953aa969124ebb88f332f424b1345caef4d8dd1367a91f5",
            webhappSha256:
              "f4242ce4c132beb187653d131b275135d80edccbecd91c04e92bc20815531b61",
            uiSha256:
              "4b0f334aa18c2dcd2b51fd7107d89e725629bc8963a115f9b850e7380c9b29c3",
          },
          changelog:
            "First dev build: the daily budget with drains, recharges, gives and check-in, the group view with the shared Fund and its activity feed, and boosts from your own balance or the Fund.",
          releasedAt: 1787625887294,
        },
      ],
    },
  ],
});
