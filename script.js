'use strict'
// 1行目に記載している 'use strict' は削除しないでください
function test(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("OK! Test PASSED.");
  } else {
    console.error("Test FAILED. Try again!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
    console.trace();
  }
}


let array = ["🐊受付🐊", "🐊会場案内🐊", "🐊駐車場案内🐊", "🐊会計🐊"];
// const textId = document.getElementById("text-id");
// let array = [textId.value];参照が出来なかった
function arrayLotter() {
  disp.innerText = array[Math.floor(Math.random() * array.length)];
}
btn.addEventListener("click", arrayLotter);

//課題：ラン数のテストの仕方を学ぶこと！
//array[Math.floor(Math.random()*array.length)]
//　↓
//配列内を消すとarray[]
//Math.floor(Math.random()*array.length) 配列のいずれかの数字0,1,2,3 length=4
//Math.floor() は小数点以下を切り捨て →Math.random()*array.lengthは小数点を含む数字を意味する
//Math.random()*array.length　について
// * は掛け算
//array.length　は要素の数
//Math.random() は0~1の間の数字を生成する　「0.111」とか「0.37654」をランダムに
//「Math.random()＊array.length」＝0.553 (生成された数)×4 (lenght)＝2.212
//Math.floor(2.212)で小数点以下を消す
//　2　になってarray[2]の会場案内が取り出される
//Math.floor(Math.random()*array.length);//で数字は出せる
//array[Math.floor(Math.random()*array.length)];//項目が出る



//金子さんとconsoleに上がるかどうかテスト※cは小文字！
// function test(){
//     disp.innerText = "hello";
// }
// btn.addEventListener("click",test);
// //OKです

//人目のカウント
const number = document.getElementById("num");
const countbtn = document.getElementById("btn");
let count = 0;

btn.addEventListener("click",
  function () {
    count++;//変数に１を足す
    number.innerHTML = count;//HTMLの書き換えをしたい
  }
);

//TypeError: Cannot read properties of undefined (reading 'addEventListener')エラーが出てるよ
//未定義のプロパティを読み取ることが出来ない


const secondDiv = document.getElementById("second-div"); 
const num = document.getElementById("num");
const btnElement = document.getElementById("btn");

// console.log(texttext.value)
//webの参考にしたもの
function btnClick() {
  // console.log("🐊");//consoleに表示される ok
  let strGators = "";
  for (let i = 1; i <= Number(num.innerText); i++) { //num.innertextはテキスト型だった
    strGators = strGators + "🐊";
  }
  return secondDiv.innerText = strGators;
  //toString()テキストに変換 Number( str )数値に変換OK
  // return "🐊"
}

btnElement.addEventListener("click", btnClick);
test(btnClick(), "");//0の時　OK  
