/*
https://atcoder.jp/contests/abc239/submissions/29440200
*/

function Main(h) {
let r = 12800000 *h;
let s = h*h;
let a =Math.sqrt(r+s);
console.log(a)
}
Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
