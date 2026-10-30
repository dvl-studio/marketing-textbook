# 行銷與消費者行為的十三堂經典課（網站版）

以 [VitePress](https://vitepress.dev/) 建置的中文線上閱讀本，內容由 Word 檔《六項疑點查核修正版 v4》轉換而來，共 13 章、4 個部分。

## 本機測試

需要 Node.js 18 以上（建議 22）。

```bash
npm install
npm run dev        # 開發模式，網址通常是 http://localhost:5173
npm run build      # 正式建置，必須沒有錯誤
npm run preview    # 預覽建置後的網站
```

## 專案結構

```
docs/
├── index.md                 首頁
├── introduction.md          編寫說明
├── knowledge-map.md         全書知識地圖（可點擊跳章）
├── part-1 ~ part-4/         各部首頁 + 各章
├── conclusion.md            全書總結
├── references.md            參考文獻與來源說明
├── public/favicon.svg
└── .vitepress/
    ├── config.mts           網站設定（標題、側邊欄、搜尋）
    └── theme/               配色與版面樣式
```

