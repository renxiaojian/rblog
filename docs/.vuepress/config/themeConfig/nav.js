// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '前端',
    link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        text: '前端文章',
        items: [
          { text: 'JavaScript', link: '/pages/2c4647/' },
          { text: 'Vue', link: '/pages/d18bfd/' },
          { text: 'NodeJs', link: '/pages/672f15/' }
        ],
      },
      {
        text: '学习笔记',
        items: [
          { text: '测试', link: '/note/ceshi/' },
        ],
      },
    ],
  },
  {
    text: '技术',
    link: '/technology/',
    items: [
      { text: '敬请期待', link: '/pages/3e7403/' }
    ],
  },
  {
    text: '更多',
    link: '/more/',
    items: [
      { text: '实用技巧', link: '/pages/baaa02/' }
    ],
  },
  { text: '关于', link: '/about/' },
  {
    text: '收藏',
    link: '/pages/6a57cf/',
    items: [
      { text: '敬请期待', link: '/pages/6a57cf/' }
    ],
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
]
