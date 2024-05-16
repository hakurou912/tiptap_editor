## About this

独学でNext.jsを学んでいます。  
今回は「Tiptap editor」というWYSIWYGエディターのフレームワークを使って、リッチエディターを作成してみました。  
HTMLやJSON形式で出力可能なので、この機能を使ってAPIを提供してみても良さそうと思っています。  

エディター作成に当たり、よく見かける「Draft.js」や「Editor.js」、「TOAST UI Editor」も触ってみましたが、  
Next.jsで実装時に、よく分からないエラーが出たり、動いたとしても不具合が起きることが有りました。  
いろいろ模索しているうちに辿り着いたのが「Tiptap editor」でした。  
「Trumbowyg」というものも気になったのですが、「Tiptap editor」で必要機能は実装可能だったため、今回はこちらを採用しました。  

使用したもの
- [Tiptap editor](https://tiptap.dev/docs/editor/introduction) -  WYSIWYG エディターを構築するためのフレームワーク
- [Bootstrap@5.3.0](https://getbootstrap.jp/)  - スタイル適用、モーダル機能（js）
- [CORS Proxy](https://corsproxy.io/) - URLからOGP情報を取得するフリーのWeb API
- Next.js 14.2.3

Tiptap editor 所感    
必要な機能を随時取り込み、また自分でカスタムノードを作成して更に機能を拡張させることも可能のようでした。  
カスタムノードについては、URLをもとにOGP情報を解析してリンクカードを作成する機能と、  
Xでポストしたことを埋め込めるようにしました。（鍵垢は表示されません）  
埋め込みについてはTiptapが提供している拡張機能は有りましたが（[Embeds](https://tiptap.dev/docs/editor/experiments/embeds)）、  
Youtubeしか埋め込めないため、オリジナルで様々なURLを埋め込める汎用的なリンクカードを挿入できるようにしました。  
他は、公式ドキュメントが充実していたため実装しやすかったです。（コード例や、画面の出力結果が参照できました）  


課題
- プレビューモードの実装  
- 要素の並び替え機能(一応Tiptapの拡張機能で提供されていますが、PCでは動くもスマートフォンでは動かなかったため、別途オリジナルで作りたい)  
- DB連携  


参考
- [Zenn 記事（Tiptapでオリジナルエディタをつくろう！）](https://zenn.dev/tellernovel_inc/articles/4a471eff90ab12)  
