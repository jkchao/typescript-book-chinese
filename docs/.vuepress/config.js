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
    sidebarDepth: 3,
    lastUpdated: '上次更新',
    algolia: {
      apiKey: 'fd0efd57c48824ceb1bcfa9690dba5b0',
      indexName: 'jkchao_typescript'
    },
    nav: [
      { text: '原书链接', link: 'https://basarat.gitbooks.io/typescript/content/docs/getting-started.html' },
      { text: 'Blog', link: 'https://jkchao.cn' }
    ],
    sidebar: [
      {
        title: '写在前面',
        collapsable: false,
        children: ['/']
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
          '/typings/enums',
          '/typings/lib',
          '/typings/functions',
          '/typings/callable',
          '/typings/typeAssertion',
          '/typings/freshness',
          '/typings/typeGuard',
          '/typings/literals',
          '/typings/readonly',
          '/typings/generices',
          '/typings/typeInference',
          '/typings/typeCompatibility',
          '/typings/neverType',
          '/typings/discrominatedUnion',
          '/typings/indexSignatures',
          '/typings/movingTypes',
          '/typings/exceptionsHanding',
          '/typings/mixins',
          '/typings/thisType'
        ]
      },
      {
        title: 'JSX',
        collapsable: false,
        children: ['/jsx/support', '/jsx/reactJSX', '/jsx/nonReactJSX']
      },
      {
        title: 'TypeScript 错误提示',
        collapsable: false,
        children: ['/error/interpreting', '/error/common']
      },
      {
        title: 'TIPs',
        collapsable: false,
        children: [
          '/tips/stringBasedEmuns',
          '/tips/nominalTyping',
          '/tips/statefulFunctions',
          '/tips/bind',
          '/tips/curry',
          '/tips/typeInstantiation',
          '/tips/lazyObjectLiteralInitialization',
          '/tips/classAreUseful',
          '/tips/avoidExportDefault',
          '/tips/limitPropertySetters',
          '/tips/createArrays',
          '/tips/outFileCaution',
          '/tips/staticConstructors',
          '/tips/singletonPatern',
          '/tips/functionParameters',
          '/tips/truthy',
          '/tips/buildToggles',
          '/tips/typesafeEventEmitter',
          '/tips/metadata',
          '/tips/covarianceAndContravariance'
        ]
      },
      {
        title: 'TypeScript 编译原理',
        collapsable: false,
        children: [
          '/compiler/overview',
          '/compiler/program',
          '/compiler/ast',
          '/compiler/scanner',
          '/compiler/parser',
          '/compiler/binder',
          '/compiler/checker',
          '/compiler/emitter'
        ]
      },
      {
        title: 'TypeScript 更新',
        collapsable: false,
        children: []
      }
    ]
  }
};
