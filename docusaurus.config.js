// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Описание на НСИ асистент',
  tagline: 'Помощник за подаване на годишни отчети към Националния статистически институт през информационна система "Бизнес статистика"',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://nsiwebassistant.azurewebsites.net/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'takecontrolsoft', // Usually your GitHub org/user name.
  projectName: 'docs.nsiassistant.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'bg',
    locales: ['bg'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/takecontrolsoft/docs.nsiassistant.github.io/tree/main/docs/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/takecontrolsoft/docs.nsiassistant.github.io/tree/main/blog/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/nsi-card.png',
      navbar: {
        title: 'НСИ асистент',
        logo: {
          alt: 'НСИ асистент лого',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Указания',
          },
          {to: '/blog', label: 'Блог', position: 'left'},
          {
            href: 'https://github.com/takecontrolsoft/docs.nsiassistant.github.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Описание',
            items: [
              {
                label: 'Указания',
                to: '/docs/intro',
              },
              {
                label: 'Инсталиране',
                to: '/docs/install',
              },
            ],
          },
          {
            title: 'Връзки',
            items: [
              {
                label: 'Take control - SI',
                href: 'https://takecontrolsoft.eu/',
              },
              {
                label: 'Linked In',
                href: 'https://www.linkedin.com/company/take-control-si',
              },
            ],
          },
          {
            title: 'Разработка',
            items: [
              {
                label: 'Новости',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/takecontrolsoft',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} NSI Assistant, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
