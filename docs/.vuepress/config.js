module.exports = {
  title: ' JanssenZhang的博客',
  description: '欢迎来访',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
  ],
  markdown: {
    lineNumbers: true,
    extendMarkdown: md => {
      md.use(require('markdown-it-task-checkbox'),{
        disabled: true,
        divWrap: false,
        divClass: 'checkbox',
        idPrefix: 'cbx_',
        ulClass: 'task-list',
        liClass: 'task-list-item'
      });
      md.use(require('markdown-it-emoji'));
    }
  },
  themeConfig: {
    repo: "JanssenZhang/JayBlog",
    nav: [
      {
        text: "博客",
        link: "/blog/"
      },
      {
        text: "测试",
        link: "/apple/"
      },
    ],
    sidebar: {
      "/blog/": [
        {
          title: 'PHP',
          collapsable: false,
          children: [
            "php-basis",
            "php-oop",
            "php-function",
            "php-mysql",
          ]
        },
        {
          title: '部署相关',
          collapsable: false,
          children: [
            "github",
          ]
        },
        {
          title: 'Python',
          collapsable: false,
          children: [
            "python-basic",
          ]
        },
        {
          title: '其他',
          collapsable: false,
          children: [
            "pwa",
          ]
        }
      ],
      '/apple/': [
        {
          title: '测试',
          collapsable: false,
          children: [
            "js-api",
            "linkOut",
            "pwa",
          ]
        }
      ]
    },
    lastUpdated: "Last Updated",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "在 GitHub 上编辑此页"
  },
  plugins: {
    '@vuepress/medium-zoom': {
      selector: 'img',
      options: {
          margin: 16
      }
    },
    '@vuepress/back-to-top':true
  },
  evergreen: true
}