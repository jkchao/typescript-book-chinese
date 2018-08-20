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
    algolia: {
      apiKey: '96ef85d8c9d352bf6d7058c9bc2122a0',
      indexName: 'typescript-book'
    },
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
          '/project/compilationContext',
          '/project/declarationspaces',
          '/project/modules',
          '/project/namespaces',
          '/project/dynamicImportExpressions'
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
          '/typings/interfaces',
          '/typings/functions',
          '/typings/callable',
          '/typings/typeAssertion',
          '/typings/freshness',
          '/typings/typeGuard',
          '/typings/literals',
          '/typings/readonly',
          '/typings/generices',
          '/typings/typeInference',
          '/typings/typeCompatibility'
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