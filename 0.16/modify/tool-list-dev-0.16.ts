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
  ],
});
