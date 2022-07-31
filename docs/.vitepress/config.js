module.exports = {
  title: 'W-UI',
  description: 'sunny95-ui',
  themeConfig: {
    lastUpdated: '最后更新时间',
    docsDir: 'docs',
    editLinkText: '编辑此网站',
    repo: 'https://www.baidu.com',
    footer: {
      message: 'Released under the MIT License',
      copyright: 'Coptright ©️ 2022-present sunny95'
    },
    nav: [
      { text: '指南', link: '/guide/installation', activeMatch: '/guide/' },
      {
        text: '组件', link: '/components/icon', activeMatch: '/components/'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '安装', link: '/guide/installation' },
            {
              text: '快速开始', link: '/guide/quieStart'
            }
          ]
        }
      ],
      '/components/': [
        {

          text: '基础组件',
          items: [{
            text:'Icon', link: '/components/icon'
          }]
        }
      ]
    }
  
  }
}