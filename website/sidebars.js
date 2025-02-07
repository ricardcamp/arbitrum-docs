/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  introSidebar: [
    {
      type: "doc",
      id: "intro/intro",
      label: "A gentle introduction: Arbitrum"
    },
    {
      type: "doc",
      id: "getting-started-users",
      label: "Get started"
    },
    {
      type: "category",
      label: "FAQs",
      items: [{
        type: "doc",
        id: "faqs/faqs-index",
        label: "FAQ index"
      },
      {
        type: "doc",
        id: "faqs/gas-faqs",
        label: "Gas"
      },
      {
        type: "doc",
        id: "faqs/nodes-faqs",
        label: "Nodes"
      },
      {
        type: "doc",
        id: "faqs/x-chain-faqs",
        label: "Cross-chain messaging"
      },
      {
        type: "doc",
        id: "faqs/protocol-faqs",
        label: "Protocol"
      },
      {
        type: "doc",
        id: "faqs/tooling-faqs",
        label: "Tooling"
      },
      {
        type: "doc",
        id: "faqs/misc-faqs",
        label: "Misc"
      }
      ]
    },
    {
      type: "doc",
      id: "intro/glossary",
      label: "Glossary"
    },
    {
      type: "doc",
      id: "mainnet-beta",
      label: "Mainnet Beta status"
    },
    {
      type: "doc",
      label: "Troubleshooting",
      id: "for-users/troubleshooting-users"
    },
    {
      type: "doc",
      label: "Audit reports",
      id: "audit-reports"
    }
  ],
  runNodesSidebar: [
    {
      type: "doc",
      id: "node-running/running-a-node",
      label: "Run a node"
    },
    {
      type: "doc",
      id: "node-running/running-a-classic-node",
      label: "Run a Classic (pre-Nitro) node"
    },
    {
      type: "doc",
      id: "node-running/running-an-archive-node",
      label: "Running an Archive Node"
    },
    {
      type: "doc",
      id: "node-running/local-dev-node",
      label: "Run a local dev node"
    },
    {
      type: "doc",
      label: "Run a feed relay",
      id: "node-running/running-a-feed-relay"
    },
    {
      type: "doc",
      label: "Run a validator",
      id: "node-running/running-a-validator"
    },
    {
      type: "doc",
      id: "node-running/node-providers",
      label: "Third-party node providers"
    },
    {
      type: "doc",
      id: "das/daserver-instructions",
      label: "Data Availability Server"
    },
    {
      type: "doc",
      label: "Troubleshooting",
      id: "node-running/troubleshooting-running-nodes"
    }

  ],
  launchAChainSidebar: [
    {
      type: "doc",
      id: "chain-launching/launch-a-chain",
      label: "Launch an L3 chain",
    },
  ],
  devsSideBar: [
    {
      type: "doc",
      id: "for-devs/quickstart-solidity-hardhat",
    },
    {
      type: "category",
      label: "How-to guides",
      collapsed: false,
      items: [
        {
          type: "doc",
          label: "Start building",
          id: "getting-started-devs"
        },
        {
          type: "doc",
          label: "Estimate gas",
          id: "devs-how-tos/how-to-estimate-gas"
        },
        {
          type: "doc",
          label: "Migrate from Classic to Nitro (architecture, contracts)",
          id: "migration/dapp_migration"
        },
        {
          type: "doc",
          label: "Migrate from Classic to Nitro (state)",
          id: "migration/state-migration"
        }
      ]
    },
    {
      type: "category",
      label: "Concepts",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Arbitrum/Ethereum differences",
          items: [
            {
              type: "doc",
              label: "Arbitrum vs. Ethereum",
              id: "arbitrum-ethereum-differences"
            },
            {
              type: "doc",
              label: "Solidity support",
              id: "solidity-support"
            },
            {
              type: "doc",
              label: "Block numbers and time",
              id: "time"
            }
          ]
        },
        {
          type: "doc",
          label: "Cross-chain messaging",
          id: "for-devs/cross-chain-messsaging"
        },
        {
          type: "doc",
          label: "Token bridge",
          id: "asset-bridging"
        },
        {
          type: "category",
          label: "Precompiles",
          items: [
            {
              type: "doc",
              label: "Common precompiles",
              id: "arbos/common-precompiles"
            },
            {
              type: "doc",
              label: "Precompiles",
              id: "arbos/precompiles"
            }
          ]
        },
      ]
    },
    {
      type: "doc",
      label: "Troubleshooting",
      id: "for-devs/troubleshooting-building"
    },

    {
      type: "doc",
      label: "Public chains",
      id: "public-chains"
    },
    {
      type: "doc",
      label: "Useful addresses",
      id: "useful-addresses"
    },
    {
      type: "category",
      label: "Resources",
      items: [
        {
          type: "link",
          label: "Tutorials",
          href: "https://github.com/OffchainLabs/arbitrum-tutorials"
        },
        {
          type: "link",
          label: "SDK",
          href: "/sdk"
        },
        {
          type: "link",
          label: "Github",
          href: "https://github.com/OffchainLabs"
        }
      ]
    }
  ],
  howItWorksSidebar: [
    {
      type: "doc",
      id: "tx-lifecycle",
      label: "Overview: Transaction lifecycle"
    },
    {
      type: "doc",
      id: "sequencer",
      label: "Sequencer"
    },
    {
      type: "category",
      label: "ArbOS",
      items: [
        {
          type: "doc",
          id: "arbos/arbos",
          label: "ArbOS"
        },
        {
          type: "doc",
          id: "arbos/geth",
          label: "Geth"
        },
        {
          type: "doc",
          label: "All precompiles",
          id: "arbos/precompiles"
        }
      ]
    },

    {
      type: "category",
      label: "Fraud Proofs",
      items: [
        {
          type: "doc",
          id: "proving/challenge-manager",
          label: "Interactive challenges"
        },
        {
          type: "doc",
          id: "proving/wasm-to-wavm",
          label: "Wasm To WAVM"
        },
        {
          type: "doc",
          id: "proving/wavm-custom-opcodes",
          label: "Custom WAVM opcodes"
        },
        {
          type: "doc",
          id: "proving/wavm-floats",
          label: "WAVM floats"
        },
        {
          type: "doc",
          id: "proving/wavm-modules",
          label: "WAVM modules"
        }
      ]
    },
    {
      type: "category",
      label: "Gas / fees",
      items: [
        {
          type: "doc",
          id: "arbos/gas",
          label: "L2 gas"
        },
        {
          type: "doc",
          id: "arbos/l1-pricing",
          label: "L1 pricing"
        }
      ]
    },
    {
      type: "category",
      label: "Cross-chain messaging",
      items: [
        {
          type: "doc",
          id: "arbos/l1-to-l2-messaging",
          label: "L1-to-L2 messaging"
        },
        {
          type: "doc",
          id: "arbos/l2-to-l1-messaging",
          label: "L2-to-L1 messaging"
        }
      ]
    },
    {
      type: "doc",
      id: "assertion-tree",
      label: "Assertion tree"
    },
    {
      type: "doc",
      id: "inside-anytrust",
      label: "AnyTrust protocol"
    },
    {
      type: "doc",
      id: "why-nitro",
      label: "Why Nitro?"
    },
    {
      type: "doc",
      id: "inside-arbitrum-nitro/inside-arbitrum-nitro",
      label: "Deep dive: Inside arbitrum"
    },
    {
      type: "link",
      href:
        "https://github.com/OffchainLabs/nitro/blob/master/docs/Nitro-whitepaper.pdf",
      label: "Deeper dive: Whitepaper"
    }
  ]
};

module.exports = sidebars;