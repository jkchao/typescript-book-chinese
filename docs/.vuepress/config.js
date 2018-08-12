module.exports = {
  base: '/typescript-book-chinese/',
  title: '深入理解 TypeScript',
  description: 'TypeScript Deep Dive 中文版',
  ga: 'UA-106861408-1',
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  themeConfig: {
    repo: 'jkchao/typescript-book-chinese',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '编辑此页',
    activeHeaderLinks: false,
    sidebarDepth: 2,
    lastUpdated: '上次更新',
    nav: [
      { text: 'blog', link: 'https://jkchao.cn' }
    ],
    sidebar: [
      {
        title: '写在前面',
        collapsable: false,
        children: [
          '/'
        ]
      },
      {
        title: 'TypeScript 项目',
        collapsable: false,
        children: [
          '/project/compilation-context',
          '/project/declarationspaces',
          '/project/modules',
          '/project/namespaces',
          '/project/dynamic-import-expressions'
        ]
      },
      {
        title: 'TypeScript 类型系统',
        collapsable: false,
        children: [
          '/typings/overview',
          '/typings/migrating',
          '/typings/types',
          '/typings/ambient',
          '/typings/callable',
        ]
      },
      {
        title: 'TypeScript 错误',
        collapsable: false
      },
      {
        title: '一些提示',
        collapsable: false
      },
      {
        title: 'TypeScript 编译原理',
        collapsable: false
      }
    ]
  }
}