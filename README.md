# Kitamura Portfolio Site

北村周仁の個人ポートフォリオサイトです。

## GitHub Pagesへの公開

`main` ブランチへ変更をpushすると、GitHub Actionsが自動でサイトをビルド・公開します。

初回のみ、GitHubリポジトリの次の設定を行ってください。

1. `Settings` を開く
2. 左メニューの `Pages` を開く
3. `Build and deployment` の `Source` を `GitHub Actions` にする

公開URL:

`https://jyu-si.github.io/kitamura-portfolio-site/`

## ローカルでの確認

```bash
pnpm install
pnpm run dev
```

## 本番ビルド

```bash
pnpm run build
```
