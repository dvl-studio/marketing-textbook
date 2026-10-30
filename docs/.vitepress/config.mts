import { defineConfig } from 'vitepress'

// GitHub Actions 會自動帶入 BASE_PATH（例如 /marketing-classics/）；本機開發則為 '/'
const base = process.env.BASE_PATH || '/'

export default defineConfig({
  lang: 'zh-TW',
  title: '行銷與消費者行為的十三堂經典課',
  description: '從說服、決策與創新擴散，到因果量測與生成式 AI：13 篇經典與前沿文獻的中文結構化閱讀本',
  base,
  cleanUrls: true,
  head: [['link', { rel: 'icon', href: `${base}favicon.svg` }]],

  themeConfig: {
    siteTitle: '十三堂經典課',
    nav: [
      { text: '首頁', link: '/' },
      { text: '編寫說明', link: '/introduction' },
      { text: '知識地圖', link: '/knowledge-map' },
      { text: '全書總結', link: '/conclusion' },
      { text: '參考文獻', link: '/references' }
    ],

    sidebar: [
    {
      text: '開始閱讀',
      items: [
        { text: '首頁', link: '/' },
        { text: '編寫說明', link: '/introduction' },
        { text: '全書知識地圖', link: '/knowledge-map' }
      ]
    },
    {
      text: '第一部｜說服、意圖與決策',
      link: '/part-1/',
      collapsed: false,
      items: [
        { text: '01 效果階層', link: '/part-1/chapter-01' },
        { text: '02 精細化可能性模型', link: '/part-1/chapter-02' },
        { text: '03 計畫行為理論', link: '/part-1/chapter-03' },
        { text: '04 展望理論', link: '/part-1/chapter-04' },
        { text: '05 社會影響', link: '/part-1/chapter-05' }
      ]
    },
    {
      text: '第二部｜注意力、選擇與擴散',
      link: '/part-2/',
      collapsed: false,
      items: [
        { text: '06 創新擴散', link: '/part-2/chapter-06' },
        { text: '07 持續注意力', link: '/part-2/chapter-07' },
        { text: '08 選擇架構', link: '/part-2/chapter-08' }
      ]
    },
    {
      text: '第三部｜因果與量測',
      link: '/part-3/',
      collapsed: false,
      items: [
        { text: '09 因果推論', link: '/part-3/chapter-09' },
        { text: '10 廣告報酬的「不利經濟學」', link: '/part-3/chapter-10' },
        { text: '11 大數據不會自動消除偏誤', link: '/part-3/chapter-11' }
      ]
    },
    {
      text: '第四部｜生成式 AI',
      link: '/part-4/',
      collapsed: false,
      items: [
        { text: '12 生成式 AI 與創新流程', link: '/part-4/chapter-12' },
        { text: '13 生成式 AI 的導入治理', link: '/part-4/chapter-13' }
      ]
    },
    {
      text: '結語與資料',
      items: [
        { text: '全書總結', link: '/conclusion' },
        { text: '參考文獻與來源說明', link: '/references' }
      ]
    }
    ],

    outline: { level: [2, 3], label: '本頁目錄' },
    docFooter: { prev: '上一頁', next: '下一頁' },
    returnToTopLabel: '回到頂端',
    sidebarMenuLabel: '章節目錄',
    darkModeSwitchLabel: '外觀',
    lightModeSwitchTitle: '切換為淺色模式',
    darkModeSwitchTitle: '切換為深色模式',

    // 若要顯示 GitHub 連結，取消註解並改成你的 repo
    // socialLinks: [{ icon: 'github', link: 'https://github.com/YOUR_USERNAME/marketing-classics' }],

    footer: {
      message: '本書為 13 篇文獻的結構化摘要與教學性重述，並非逐字翻譯；學術引用請回到原始文本核對。',
      copyright: '全章完整版｜2026-10-28'
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜尋', buttonAriaLabel: '搜尋' },
          modal: {
            displayDetails: '顯示詳細列表',
            resetButtonTitle: '清除查詢條件',
            backButtonTitle: '關閉搜尋',
            noResultsText: '找不到相關結果',
            footer: {
              selectText: '選擇',
              navigateText: '切換',
              closeText: '關閉'
            }
          }
        }
      }
    }
  }
})
