# mailman のログ本文から余計な改行を削除するやつ

mailman の過去ログのうち `https://*/pipermail/*` や `http://*/pipermail/*` で公開されているページにアクセスした時に余分な改行を削除する Chrome 拡張です。

読者の読みやすさを優先して文章に関係無く一定の文字数で改行されているメールがありますが、十分に学習していない言語で書かれたメールをページ翻訳サービスに読み込ませても理解できる翻訳結果にならないことが多いため作成しました。

次のような動作をするように作ったつもりです。

- URL が `https://*/pipermail/*` や `http://*/pipermail/*` というページで自動で実行する
- HTML の PRE 要素のうち一番最初に出現した要素に対して実行する
- 文章間を開けるために Line Feed(`\n`)が2回連続で行われている部分を Carriage Return(`\r`)に置換える
- 1回だけ Line Feed(`\n`)が行われている部分を半角スペースに置換える
- Carriage Return を2回の Line Feed に戻す

例外的な形式や改行が Carriage Return + Line Feed(`\r\n`) で行われるページでは正常に動作しません。そのため Chrome 拡張のストアでの公開はしていません。

リポジトリをクローンするかコードをダウンロードして `chrome://extensions/` から追加してください。

## ブックマークレットの方が楽

```
javascript:(function(){var mailBody=document.getElementsByTagName('pre')[0];mailBody.innerHTML=mailBody.innerHTML.replace(/\n\n/g,'\r').replace(/\n/g,' ').replace(/\r/g,'\n\n')})()
```

---

MIT License
