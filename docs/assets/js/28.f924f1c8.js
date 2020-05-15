(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{273:function(v,_,t){"use strict";t.r(_);var a=t(28),r=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"テスト駆動開発"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#テスト駆動開発"}},[v._v("#")]),v._v(" テスト駆動開発")]),v._v(" "),t("p",[v._v("〜速い開発速度を保ち、着実に開発を進める〜")]),v._v(" "),t("h2",{attrs:{id:"テスト駆動開発とは"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#テスト駆動開発とは"}},[v._v("#")]),v._v(" テスト駆動開発とは")]),v._v(" "),t("p",[v._v("テスト駆動開発（TDD：Test Driven Development）は、とても小さな開発プロセスを繰り返す、ソフトウェア開発手法の一つです。")]),v._v(" "),t("p",[v._v("その方法は、")]),v._v(" "),t("ol",[t("li",[v._v("まず失敗するテストを書きます")]),v._v(" "),t("li",[v._v("次にそれが通るコードを書きます")]),v._v(" "),t("li",[v._v("読みやすく、綺麗になるように、リファクタリングします")]),v._v(" "),t("li",[v._v("上記を繰り返します。")])]),v._v(" "),t("p",[v._v("といった、とてもシンプルなメソッドです。")]),v._v(" "),t("h2",{attrs:{id:"なぜ使うか"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#なぜ使うか"}},[v._v("#")]),v._v(" なぜ使うか")]),v._v(" "),t("p",[v._v("なぜ、TDDを行うのでしょうか。")]),v._v(" "),t("p",[v._v("それは速い開発スピードを永久に継続したいからです。")]),v._v(" "),t("p",[v._v("なぜTDDだと速い開発スピードを維持できるのでしょうか。")]),v._v(" "),t("p",[v._v("それは、")]),v._v(" "),t("ol",[t("li",[v._v("速く開発したい")]),v._v(" "),t("li",[v._v("速く開発をするためには、綺麗なコードが必要")]),v._v(" "),t("li",[v._v("綺麗なコードを維持するためには、リファクタリングが必要")]),v._v(" "),t("li",[v._v("リファクタリングを好きな時にするためには、コードに対する自信が必要")]),v._v(" "),t("li",[v._v("コードに対する自信を持つためには、テストが必要")])]),v._v(" "),t("p",[v._v("では、いつテストを書くべきでしょうか。")]),v._v(" "),t("p",[v._v("実装前に書きましょう。")]),v._v(" "),t("h2",{attrs:{id:"どうやって行うのか"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#どうやって行うのか"}},[v._v("#")]),v._v(" どうやって行うのか")]),v._v(" "),t("p",[v._v("基本は最初に書いた通り、下記のサイクルを回すことです。")]),v._v(" "),t("ol",[t("li",[v._v("まず失敗するテストを書きます （できれば、どう失敗するのかを推測しましょう）")]),v._v(" "),t("li",[v._v("次にそれが通るコードを書きます　（綺麗じゃなくていいのでテストが通る実装をしましょう）")]),v._v(" "),t("li",[v._v("読みやすく、綺麗になるように、リファクタリングします")]),v._v(" "),t("li",[v._v("上記を繰り返します。")])]),v._v(" "),t("p",[v._v("この手法におけるコードに対する自信の扱い方について、")]),v._v(" "),t("p",[v._v("もう少し詳しく説明をします。")]),v._v(" "),t("p",[v._v("慣れている開発であれば、問題ないと思いますが、")]),v._v(" "),t("p",[v._v("慣れていないアプリケーションや慣れていても行き詰まってしまうなど、")]),v._v(" "),t("p",[v._v("開発中に不安がある時も多々あると思います。")]),v._v(" "),t("p",[v._v("そういった場合には、")]),v._v(" "),t("p",[v._v("TDDのサイクルを小さく回す、つまり、")]),v._v(" "),t("p",[v._v("開発のステップを小さくしてみてください。")]),v._v(" "),t("p",[v._v("例えば、足し算の関数を作る場合を想像してみてください。")]),v._v(" "),t("p",[v._v("いきなり、足し算を作ってエラーになった時、")]),v._v(" "),t("p",[v._v("足し方が悪いのか、数字の出力の方法が悪いのかわかりません。")]),v._v(" "),t("p",[v._v("まず、自分が理解していて、自信を持っている実装を促すようにテストを書きます。")]),v._v(" "),t("p",[v._v("例えば、まずは数字を出力する実装をし、")]),v._v(" "),t("p",[v._v("その後、足し算を実装します。")]),v._v(" "),t("p",[v._v("このように、確かなことから着実に進めるように開発のステップを小さくすることで")]),v._v(" "),t("p",[v._v("自信を持てますし、考えるべき対象を絞ることが可能になります。")]),v._v(" "),t("p",[v._v("もし、開発のステップを大きくして、いきなり足し算関数を作って失敗した場合に")]),v._v(" "),t("p",[v._v("出力が悪いのか、足し算の書き方が悪いのかが切り分けるのが大変です。　（このくらい簡単な関数なら大丈夫かもですが）")]),v._v(" "),t("p",[v._v("より複雑な関数になった場合はより大変になります。")]),v._v(" "),t("p",[v._v("また、頭でデバッグするよりも、テストを実行してしまった方が")]),v._v(" "),t("p",[v._v("圧倒的に速く答えを得ることができます。")]),v._v(" "),t("p",[v._v("言葉で説明してみましたが、この「開発のステップを自由自在にする」ことの強力さは、")]),v._v(" "),t("p",[v._v("実際に体験してみないと理解しづらいと思いますので")]),v._v(" "),t("p",[t("a",{attrs:{href:"https://amzn.to/3czVEd4",target:"_blank",rel:"noopener noreferrer"}},[v._v("テスト駆動開発"),t("OutboundLink")],1),v._v("\nを写経することをおすすめします。")]),v._v(" "),t("h2",{attrs:{id:"注意点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注意点"}},[v._v("#")]),v._v(" 注意点")]),v._v(" "),t("h3",{attrs:{id:"テストで大事なこと"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#テストで大事なこと"}},[v._v("#")]),v._v(" テストで大事なこと")]),v._v(" "),t("p",[v._v("テストはただ書けばいいというわけではありません。")]),v._v(" "),t("p",[v._v("テストを書いていく上で意識すべき大事なことをご紹介します。")]),v._v(" "),t("ul",[t("li",[v._v("実装に依存していない（Freedom）")]),v._v(" "),t("li",[v._v("自信が持てる（Confidence）")]),v._v(" "),t("li",[v._v("速くテスト結果が得られる（Fast Feedback）")]),v._v(" "),t("li",[v._v("わかりやすく、読みやすい（Clean）")])]),v._v(" "),t("h4",{attrs:{id:"実装に依存していない（freedom）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#実装に依存していない（freedom）"}},[v._v("#")]),v._v(" 実装に依存していない（Freedom）")]),v._v(" "),t("p",[v._v("挙動が変わらないように実装を正しく変更した際にテストが壊れてしまうようでは")]),v._v(" "),t("p",[v._v("リファクタリングを自信を持って行うことができません。")]),v._v(" "),t("p",[v._v("実装を変更しても、要件通りに正しく動いていれば成功するテストが良いテストです。")]),v._v(" "),t("h4",{attrs:{id:"自信が持てる（confidence）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自信が持てる（confidence）"}},[v._v("#")]),v._v(" 自信が持てる（Confidence）")]),v._v(" "),t("p",[v._v("きちんと挙動をチェックできているか不安なテストだと自信が持てません。")]),v._v(" "),t("p",[v._v("自信が持てないとリファクタリングができません。")]),v._v(" "),t("p",[v._v("実装の挙動を網羅しているのが、良いテストです。")]),v._v(" "),t("h4",{attrs:{id:"速くテスト結果が得られる（fast-feedback）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#速くテスト結果が得られる（fast-feedback）"}},[v._v("#")]),v._v(" 速くテスト結果が得られる（Fast Feedback）")]),v._v(" "),t("p",[v._v("テストの実行に30分とか1時間、かかっていては")]),v._v(" "),t("p",[v._v("テストを何度も実行することができません。")]),v._v(" "),t("p",[v._v("それでは、速い開発にもならずにTDDのメリットがなくなってしまいます。")]),v._v(" "),t("p",[v._v("過不足なくテストがあり、それぞれのテストが独立しているのが、良いテストです。")]),v._v(" "),t("h4",{attrs:{id:"わかりやすく、読みやすい（clean）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#わかりやすく、読みやすい（clean）"}},[v._v("#")]),v._v(" わかりやすく、読みやすい（Clean）")]),v._v(" "),t("p",[v._v("テストが書いてあっても、何をテストしているのかわからないテストだと")]),v._v(" "),t("p",[v._v("自信を持てませんし、修正がしづらくなります。")]),v._v(" "),t("p",[v._v("わかりやすく、読みやすいのが、良いテストです。")]),v._v(" "),t("h2",{attrs:{id:"よくある質問"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#よくある質問"}},[v._v("#")]),v._v(" よくある質問")]),v._v(" "),t("h3",{attrs:{id:"テストがあればいいなら、後からテスト書けばいいのではないですか？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#テストがあればいいなら、後からテスト書けばいいのではないですか？"}},[v._v("#")]),v._v(" テストがあればいいなら、後からテスト書けばいいのではないですか？")]),v._v(" "),t("p",[v._v("個人的にはおすすめしません。")]),v._v(" "),t("p",[v._v("テスト駆動開発は、テスト駆動設計だとも考えられます。")]),v._v(" "),t("p",[v._v("最初に実装を書いてしまうとテストの書きづらいコードになってしまう場合が多いです。")]),v._v(" "),t("p",[v._v("テストがほとんどないシステムでテストを書きやすいように必要な挙動を維持したままリファクタリングや追加実装をした際に、")]),v._v(" "),t("p",[v._v("とても大変な思いをした経験があります。")]),v._v(" "),t("h3",{attrs:{id:"qaチームがいるから、テストコードはいらないと思いますが、いかがですか？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#qaチームがいるから、テストコードはいらないと思いますが、いかがですか？"}},[v._v("#")]),v._v(" QAチームがいるから、テストコードはいらないと思いますが、いかがですか？")]),v._v(" "),t("p",[v._v("テストの大事な要素に速いフィードバックがあります。")]),v._v(" "),t("p",[v._v("全ての実装を作り終えた後にQAに渡し、")]),v._v(" "),t("p",[v._v("根幹の部分を直さないといけないようなバグを見つかる可能性もゼロではありません。")]),v._v(" "),t("p",[v._v("それをQAのタイミングまで待たなくてはならないのは時間がもったいないです。")]),v._v(" "),t("p",[v._v("テストを書かずにQAにテストをお願いし、")]),v._v(" "),t("p",[v._v("直すと他にも影響が出てしまうようなバグでリリースが延期したことがあると聞いたことがあります。")]),v._v(" "),t("h3",{attrs:{id:"テスト書く時間があるなら実装する時間に当てたいのですが、いかがですか？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#テスト書く時間があるなら実装する時間に当てたいのですが、いかがですか？"}},[v._v("#")]),v._v(" テスト書く時間があるなら実装する時間に当てたいのですが、いかがですか？")]),v._v(" "),t("p",[v._v("それでもいいでしょう。緊急で開発しないといけない場合など、")]),v._v(" "),t("p",[v._v("その瞬間の速度が大事であれば、決定次第だと思います。")]),v._v(" "),t("p",[v._v("ただし、ずっとその状態を続けるということであれば、それはお勧めしません。")]),v._v(" "),t("p",[v._v("テストのないコードはほぼ間違いなく、")]),v._v(" "),t("p",[v._v("開発すればするほど、開発速度が落ちていきます。")]),v._v(" "),t("p",[v._v("また、関係のない（と思われる）ところでデグレが生じるなど、")]),v._v(" "),t("p",[v._v("品質も低下すると予想されます。")]),v._v(" "),t("p",[v._v("さらに、テストがないことで気づけず、QAも関係ないと思っていた箇所なので見逃してしまい、")]),v._v(" "),t("p",[v._v("本番環境に出てしまうといった最悪の事態を経験したことがあります。")]),v._v(" "),t("p",[v._v("一時的にテストを書かないのは、仕方がないかもしれませんが、")]),v._v(" "),t("p",[v._v("余裕ができた際にテストを追加していくことをお勧めします。")]),v._v(" "),t("h3",{attrs:{id:"テストのないアプリケーションを担当することになりましたが、どうすればいいですか？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#テストのないアプリケーションを担当することになりましたが、どうすればいいですか？"}},[v._v("#")]),v._v(" テストのないアプリケーションを担当することになりましたが、どうすればいいですか？")]),v._v(" "),t("p",[v._v("追加開発する必要があるのであれば、")]),v._v(" "),t("p",[v._v("その周辺のコードを優先的にテストを追加していきましょう。")]),v._v(" "),t("p",[v._v("ある程度、自信が持てたら、実際にTDDで実装していきましょう。")]),v._v(" "),t("p",[v._v("必要がない部分に関しては、テストを追加しなくてよいですが、")]),v._v(" "),t("p",[v._v("今後、開発する予定があるのであれば、テストを追加していくとよいでしょう。")]),v._v(" "),t("h2",{attrs:{id:"参考資料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考資料"}},[v._v("#")]),v._v(" 参考資料")]),v._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://amzn.to/3czVEd4",target:"_blank",rel:"noopener noreferrer"}},[v._v("テスト駆動開発"),t("OutboundLink")],1)]),v._v(" "),t("li",[t("a",{attrs:{href:"https://www.youtube.com/watch?v=xPL84vvLwXA",target:"_blank",rel:"noopener noreferrer"}},[v._v("TDD: The Bad Parts — Matt Parker"),t("OutboundLink")],1)]),v._v(" "),t("li",[t("a",{attrs:{href:"https://www.jamesshore.com/Blog/Red-Green-Refactor.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("Red-Green-Refactor"),t("OutboundLink")],1)])]),v._v(" "),t("h2",{attrs:{id:"さいごに"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#さいごに"}},[v._v("#")]),v._v(" さいごに")]),v._v(" "),t("p",[v._v("文章の改善のため、フィードバックや質問などありましたら、"),t("a",{attrs:{href:"https://forms.gle/TKUJ2Gs9EoH2jQvp7",target:"_blank",rel:"noopener noreferrer"}},[v._v("こちら"),t("OutboundLink")],1),v._v("からお願いいたします。")])])}),[],!1,null,null,null);_.default=r.exports}}]);