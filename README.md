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

## 推上 GitHub 並自動發布

```bash
git init
git add .
git commit -m "Initial VitePress site"
git branch -M main
git remote add origin https://github.com/<你的帳號>/<repo 名稱>.git
git push -u origin main
```

接著到 GitHub：**Settings → Pages → Build and deployment → Source 選 `GitHub Actions`**。
之後每次 push 到 `main` 都會自動建置並發布，網址為：

```
https://<你的帳號>.github.io/<repo 名稱>/
```

網址前綴（`base`）由 `.github/workflows/deploy.yml` 依 repo 名稱自動帶入，不需手動修改。

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

## 日後修改內容

直接編輯 `docs/` 內對應的 `.md` 檔，push 後會自動重新發布。

- 提示框：`::: tip 標題` … `:::`（另有 `info`、`warning`、`danger`）
- 新增章節：新增 `.md` 檔，並在 `docs/.vitepress/config.mts` 的 `sidebar` 加一行

## 注意

- GitHub Pages 發布後內容是公開的；若 repo 是私人的，也請確認你的方案允許私人 repo 使用 Pages。
- 站內搜尋使用 VitePress 內建的本機搜尋；中文是以標點／空白切分的詞段比對，搜尋較長的關鍵詞效果最好。
