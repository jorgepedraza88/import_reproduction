// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Welcome to Asterisk',
  tagline: "unknow's Design System",
  url: 'https://asterisk.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'unknow', // Usually your GitHub org/user name.
  projectName: 'asterisk', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/unknowhq/asterisk/tree/main'
        },
        blog: {
          showReadingTime: true,
          path: 'changelog', // CHANGES FILE PATH
          routeBasePath: 'changelog', // CHANGE URL PATH
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/unknowhq/asterisk/tree/main'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      })
    ]
  ],

  stylesheets: [
    '//fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,500,600,700,800'
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: "unknow's Design System",
          src: 'img/logo.svg'
        },
        items: [
          {
            type: 'doc',
            docId: 'getting-started/intro',
            position: 'left',
            label: 'Docs'
          },
          { to: '/changelog', label: 'Changelog', position: 'left' },
          // {
          //   type: 'docsVersionDropdown',
          // },
          {
            type: 'html',
            position: 'right',
            value: `<a href='https://www.figma.com/file/rW5quJGMIswjbiDsq3OoEB/UI' target='_blank'><div class='navbar-icon'><img src='/img/figma-logo.svg' alt='figma logo'/></div></a>`
          },
          {
            type: 'html',
            position: 'right',
            value: `<a href='https://github.com/unknowhq/asterisk' target='_blank'><div class='navbar-icon'><img src='/img/github-logo.svg' alt='github logo'/></div></a>`
          },
          {
            type: 'html',
            position: 'right',
            value: `<a href='http://localhost:6006' target='_blank'><div class='navbar-icon'><img src='/img/storybook-logo.svg' alt='storybook logo'/></div></a>`
          }
        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/category/getting-started'
              },
              {
                label: 'Foundations',
                to: '/docs/category/foundations'
              },
              {
                label: 'UI Components',
                to: '/docs/category/ui-components'
              },
              {
                label: 'Patterns',
                to: '/docs/category/patterns'
              },
              {
                label: 'Community',
                to: '/docs/category/community'
              }
            ]
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Learn unknow',
                href: 'https://learn.unknow.com/'
              },
              {
                label: 'Developer Docs',
                href: 'https://docs.unknow.com/'
              },
              {
                label: 'unknow Forums',
                href: 'https://forums.unknow.com/'
              },
              {
                label: 'Product Updates',
                href: 'https://www.unknow.com/whats-new'
              }
            ]
          },
          {
            title: 'More',
            items: [
              {
                label: 'Changelog',
                to: '/changelog'
              },
              {
                label: 'Figma',
                href: 'https://www.figma.com/file/rW5quJGMIswjbiDsq3OoEB/UI'
              },
              {
                label: 'GitHub',
                href: 'https://github.com/unknowhq/asterisk'
              },
              {
                label: 'StoryBook',
                href: 'http://localhost:6006'
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} unknow`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }
    })
};

module.exports = config;
