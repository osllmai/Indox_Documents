import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Indox Ecosystem",
  tagline:
    "The Indox Ecosystem offers integrated AI tools for data workflows. Our four components (IndoxArcg, IndoxMiner, IndoxJudge, and IndoxGen) enhance AI applications with advanced retrieval, extraction, evaluation, and generation capabilities, supporting multiple document formats and LLM providers.",
  favicon: "img/logo.png",

  // Set the production url of your site here
  url: "https://docs.osllm.ai",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "osllmai", // Usually your GitHub org/user name.
  projectName: "inDox", // Usually your repo name.

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  // Add markdown configuration for Mermaid
  markdown: {
    mermaid: true,
  },

  // Add Mermaid theme
  themes: ["@docusaurus/theme-mermaid"],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Remove the "edit this page" links
          editUrl: undefined,
          lastVersion: "1.0",
          onlyIncludeVersions: ["1.0"],
          versions: {
            "1.0": {
              label: "1.0",
              path: "",
              banner: "none",
            },
          },
          includeCurrentVersion: false,
        },
        blog: false, // Disable blog
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/indox-social-card.jpg",
    navbar: {
      title: "Indox",
      logo: {
        alt: "Indox Logo",
        src: "img/logo.png",
      },
      items: [
        {
          type: "docsVersionDropdown",
          position: "right",
          dropdownItemsAfter: [],
          dropdownActiveClassDisabled: true,
        },
        {
          to: "/docs/intro",
          position: "left",
          label: "Overview",
        },
        {
          to: "/docs/category/indoxarcg",
          position: "left",
          label: "IndoxArcg",
        },
        {
          to: "/docs/category/indoxminer",
          position: "left",
          label: "IndoxMiner",
        },
        {
          to: "/docs/category/indoxjudge",
          position: "left",
          label: "IndoxJudge",
        },
        {
          to: "/docs/category/indoxgen",
          position: "left",
          label: "IndoxGen",
        },
        {
          href: "https://github.com/osllmai/inDox",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Documentation",
          items: [
            {
              label: "Overview",
              to: "/docs/intro",
            },
            {
              label: "IndoxArcg",
              to: "/docs/category/indoxarcg",
            },
            {
              label: "IndoxMiner",
              to: "/docs/category/indoxminer",
            },
            {
              label: "IndoxJudge",
              to: "/docs/category/indoxjudge",
            },
            {
              label: "IndoxGen",
              to: "/docs/category/indoxgen",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/osllm",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/osllmai",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/osllmai/inDox",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} OSLLM.ai`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
