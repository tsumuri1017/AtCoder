/*
https://atcoder.jp/contests/abc233/submissions/28131764
*/

//input
function Main(input) {
    input = input.split("\n");
    tmp = input[0].split(" ");
    var X = parseInt(tmp[0], 10);
    var Y = parseInt(tmp[1], 10);
  	let counter =0;
  while(Y > X +(counter*10)){
  counter=counter+1;
  }
    //出力
    console.log(counter);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
