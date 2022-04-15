/*
https://atcoder.jp/contests/abc238/submissions/29074855
*/
function Main(tmp) {
  if((tmp**2)+1 > 2**tmp){
  console.log('No');
  }
  else{
  console.log('Yes');
  }
}
Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
