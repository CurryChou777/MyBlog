const readFileList = require("../../scripts/build.js");

module.exports = {
  // 左上角标题
  title: 'DailyReport',
  description: '博客',
  themeConfig: {
    lastUpdated: 'Last Updated',
    logo: '/logo.png',

    // 添加导航栏
    nav: [{
        text: 'blog',
        link: '/blog/'
      },
      {
        text: 'vue',
        link: '/vue/'
      },
      {
        text: 'css',
        link: '/css/'
      },
      {
        text: 'js',
        link: '/js/'
      },
      {
        text: 'github',
        items: [{
            text: 'focus-outside',
            link: 'https://github.com/txs1992/focus-outside'
          },
          {
            text: 'stylus-converter',
            link: 'https://github.com/txs1992/stylus-converter'
          }
        ]
      }
    ],
    // 为以下路由添加侧边栏
    sidebar: {
      '/blog/': [{
        title: "2021年02月",
        collapsable: false,
        children: readFileList("2021", "02")
      }, {
        title: "2021年03月",
        collapsable: false,
        children: readFileList("2021", "03")
      }]
    }
  }
}