# SlideMilk

# English

# Summary
- SlideMilk is a app for controlling web-based presentation slide.
- Available on iOS/Android, and it needs internet connection.
- The type of available slide is... 1. It works on browser 2.It can move its page by arrow key

## demo
- `node slidemilk.js https://slidebean.com/p/vVPujhYuLu/milkcocoaauth-`


## Ready For Development

### server
- `npm i`
- `java -jar selenium-server/selenium-server-standalone-2.41.0.jar -Dwebdriver.chrome.driver=selenium-server/chromedriver &`

### app
- login [monaca](https://monaca.io/)
- create blank app.
- put `monaca/www/index.html` to `www/index.html`
- Use [monaca debugger(iOS)](https://itunes.apple.com/en/app/monaca/id550941371?mt=8) or [monaca debugger(Android)](https://play.google.com/store/apps/details?id=mobi.monaca.debugger&hl=en) app and test the interaction.

## How to Use
`node slidemilk.js slideURL`

## Platform
- [slidebean](http://slidebean.com)
- [google slide](http://www.google.com/intl/ja_jp/slides/about/)
- [reveal.js based slide](http://lab.hakim.se/reveal-js/)
- [slideshare](http://www.slideshare.net/)

FYI: All right/left moving presentation service available.

## Controller

Made by [Monaca](https://ja.monaca.io/) and [milkcocoa](https://mlkcca.com/)
Android/iOS/Browser oriented, and haven't launch yet.

## License
`SlideMilk` is released under the [MIT License](http://opensource.org/licenses/MIT).



# 日本語

## 概説
- SlideMilkはスマートフォンからプレゼンテーションのスライドを操作するアプリケーションです。
- iOS/Androidで動作し、インターネット環境を必要とします。
- 操作できるスライドの種類は 1.ブラウザ上のスライドであること 2.キーボードの矢印キーで操作できること を満たしているスライドすべてです。

##デモ
- `node slidemilk.js https://slidebean.com/p/vVPujhYuLu/milkcocoaauth-`

## 開発準備

### サーバー
- `npm i`
- `java -jar selenium-server/selenium-server-standalone-2.41.0.jar -Dwebdriver.chrome.driver=selenium-server/chromedriver &`

### アプリ
- [monaca](https://ja.monaca.io/)にログインする
- 空のプロジェクトを作成する
- `monaca/www/index.html`を`www/index.html`に設置する
- [monaca debugger(iOS)](https://itunes.apple.com/jp/app/monaca/id550941371?mt=8)か[monaca debugger(Android)](https://play.google.com/store/apps/details?id=mobi.monaca.debugger&hl=ja)を使用して動作を確認する

## 使い方
`node slidemilk.js slideURL`

## プラットホーム
- [slidebean](http://slidebean.com)
- [google slide](http://www.google.com/intl/ja_jp/slides/about/)
- [reveal.js based slide](http://lab.hakim.se/reveal-js/)
- [slideshare](http://www.slideshare.net/)

## コントローラー
[Monaca](https://ja.monaca.io/)と[milkcocoa](https://mlkcca.com/)で出来ています。アプリはiOS/Android/Browserで動きますが、まだ申請はしていません。

## ライセンス
`SlideMilk` は [MIT License](http://opensource.org/licenses/MIT) に準拠します。
