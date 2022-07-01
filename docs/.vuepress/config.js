module.exports = {
  base: '/typescript-book-chinese/',
  title: '深入理解 TypeScript',
  description: 'TypeScript Deep Dive 中文版',
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  plugins: [
    // '@vuepress/pwa',
    '@vuepress/back-to-top',
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-106861408-1' // UA-00000000-0
      }
    ]
  ],
  // theme: [],
  themeConfig: {
    repo: 'jkchao/typescript-book-chinese',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '编辑此页',
    activeHeaderLinks: false,
    sidebarDepth: 3,
    lastUpdated: '上次更新',
    // algolia: {
    //   apiKey: 'fd0efd57c48824ceb1bcfa9690dba5b0',
    //   indexName: 'jkchao_typescript'
    // },
    adsConfig: [
      { title: '关注公众号', src: '/typescript-book-chinese/qrcode.jpg' },
      { title: '与我交流', src: '/typescript-book-chinese/contact.png' },
      {
        title: '购买此书',
        src:
          'https://static.jkchao.cn/2019-11-22/WechatIMG719.png?imageMogr2/auto-orient/thumbnail/80x/blur/1x0/quality/75|imageslim',
        url: 'https://item.jd.com/12755624.html'
      }
    ],
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
          '/tips/barrel',
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
          '/tips/covarianceAndContravariance',
          '/tips/infer'
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
        title: 'TypeScript FAQs',
        collapsable: false,
        children: [
          '/faqs/class',
          '/faqs/commandline-behavior',
          '/faqs/comments',
          '/faqs/common-bug-not-bugs',
          '/faqs/common-feature-request',
          '/faqs/decorators',
          '/faqs/enums',
          '/faqs/function',
          '/faqs/generics',
          '/faqs/glossary-and-terms',
          '/faqs/jsx-and-react',
          '/faqs/modules',
          '/faqs/thing-that-dont-work',
          '/faqs/tsconfig-behavior',
          '/faqs/type-guards',
          '/faqs/type-system-behavior'
        ]
      },
      {
        title: 'TypeScript 更新',
        collapsable: false,
        children: ['/new/typescript-3.9', '/new/typescript-3.8', '/new/typescript-3.7']
      }
      // {
      //   title: 'TypeScript 更新',
      //   collapsable: false,
      //   children: ['/new/typescript-3.7']
      // }
    ]
  }
};
