var i;
// 「変数i」を宣言
var num = 0;
// 「変数num」を宣言し、初期値を「0」に設定
for(i = 1; i < 11; i++){
// 変数iの初期値を「1」に設定し、変数iが「11」未満のときは変数iに1を足す（「i++」は「i = i+1」と同じ）
  num = num + i;
// 変数numに「num+i」を代入
}

alert('1から10まで足し算した結果は' + num + 'です');
// アラートウィンドウに計算結果を表示

// 「for文」は、決められた回数の処理を繰り返すときに使う
// for文を書くときは、以下の部分に注意する必要がある

// 「繰り返す回数」を初期値で設定する
// 「条件を満たす場合の処理」を記述する
// for文は、「10回まで繰り返し」などのように、決められた回数内で繰り返し処理を行いたい場合に使われる

// for ( 初期値; 条件式; 増減値 ){
//   繰り返し処理
// }