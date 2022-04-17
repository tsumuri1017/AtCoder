/*
https://atcoder.jp/contests/abc248/submissions/31020454
*/
function Main(input) {
input = input.split(" ");
const A=Number(input[0]);
const B=Number(input[1]);
const K=Number(input[2]);
let s=A;
let counter=0;
while(s<B){
s=s*K;
counter++;
}
console.log(counter);
}
 
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
