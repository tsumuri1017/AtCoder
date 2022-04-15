/*
https://atcoder.jp/contests/abc244/submissions/30278339
*/
function Main(input) {
	input = input.split("\n");
  text= input[1]
	tmp = input[0]
	console.log(text.charAt(tmp-1));
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
