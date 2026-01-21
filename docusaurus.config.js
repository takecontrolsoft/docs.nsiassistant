// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'НСИ Асистент - Документация',
  tagline: 'Автоматизирано попълване на ГФО към НСИ. Спестява време и усилия при подаване на годишни финансови отчети.',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://doc.nsiassistant.bg',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'takecontrolsoft', // Usually your GitHub org/user name.
  projectName: 'docs.nsiassistant', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // SEO and meta tags
  headTags: [
    // Open Graph / Facebook
    {
      tagName: 'meta',
      attributes: {
        property: 'og:type',
        content: 'website',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:site_name',
        content: 'НСИ Асистент',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:locale',
        content: 'bg_BG',
      },
    },
    // Twitter Card
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    },
    // Additional SEO
    {
      tagName: 'meta',
      attributes: {
        name: 'keywords',
        content: 'НСИ, НСИ Асистент, ГФО, годишни финансови отчети, статистика, автоматизация, бизнес статистика, счетоводство, България',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'author',
        content: 'Тейк Контрол - Софтуер и Инфраструктура ЕООД',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'robots',
        content: 'index, follow',
      },
    },
    // Canonical link
    {
      tagName: 'link',
      attributes: {
        rel: 'canonical',
        href: 'https://doc.nsiassistant.bg',
      },
    },
  ],

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
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-1QXC2F5M77',
          anonymizeIP: true,
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'videos',
        path: 'videos',
        routeBasePath: 'videos',
        sidebarPath: './sidebarsVideos.js',
        editUrl: undefined,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Social card image for Open Graph and Twitter
      image: 'img/social-card.png',
      metadata: [
        {name: 'description', content: 'Документация за НСИ Асистент - автоматизирано попълване на годишни финансови отчети към Националния статистически институт'},
        {property: 'og:description', content: 'Спестява време и усилия при подаване на ГФО. Ръководство за инсталиране, конфигуриране и използване.'},
      ],
      navbar: {
        title: 'НСИ Асистент',
        logo: {
          alt: 'НСИ Асистент',
          src: 'img/favicon.png',
        },
        items: [
          {
            to: '/docs/intro',
            label: 'Ръководство',
            position: 'left',
            className: 'navbar__item--styled',
          },
          {
            type: 'docSidebar',
            sidebarId: 'videosSidebar',
            docsPluginId: 'videos',
            label: 'Видеа',
            position: 'left',
            className: 'navbar__item--styled',
          },
          {
            href: 'https://nsiassistant.bg/WelcomePage',
            label: 'Започни',
            position: 'right',
            className: 'navbar__item--styled navbar__item--highlighted',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Документация',
            items: [
              {
                label: 'Въведение',
                to: '/docs/intro',
              },
              {
                label: 'Ръководство',
                to: '/docs/guide',
              },
              {
                label: 'Инсталиране',
                to: '/docs/category/инсталиране',
              },
            ],
          },
          {
            title: 'Продукт',
            items: [
              {
                label: 'НСИ Асистент',
                href: 'https://nsiassistant.bg',
              },
              {
                label: 'Онлайн магазин',
                href: 'https://products.takecontrolsoft.eu/nsi-assistant',
              },
              {
                label: 'Видеа',
                href: 'https://www.youtube.com/@nsiassistant/videos',
              },
            ],
          },
          {
            title: 'Ресурси',
            items: [
              {
                label: 'Видео уроци',
                href: 'https://www.youtube.com/@nsiassistant',
              },
              {
                label: 'ИС Бизнес Статистика',
                href: 'https://isbs.nsi.bg',
              },
              {
                label: 'НСИ',
                href: 'https://nsi.bg',
              },
            ],
          },
          {
            title: 'Компания',
            items: [
              {
                label: 'takecontrolsoft.eu',
                href: 'https://takecontrolsoft.eu/bg',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/take-control-si',
              },
              {
                label: 'Контакти',
                to: '/docs/guide/contacts',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} "Тейк Контрол - Софтуер и Инфраструктура" ЕООД. Всички права запазени.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

