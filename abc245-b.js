/*
https://atcoder.jp/contests/abc245/submissions/30455463
*/
function Main(input) {
	input = input.split("\n");
	list = input[1].split(" ").map(Number);
	let n=0;
  while(list.includes(n)){
  n++;
  }
console.log(n)
}
 
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
