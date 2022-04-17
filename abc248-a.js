/*
https://atcoder.jp/contests/abc248/submissions/31015604
*/

function Main(input) {
let text=String(input);
let n=0;
let zero=0;let one=0;let two=0;let three=0;let four=0;
let five=0;let six=0;let seven=0;let eight=0;let nine=0;
while(n<9){
var check=text.charAt(n);
if(check==0){zero=1;}
if(check==1){one=1;}
if(check==2){two=1;}
if(check==3){three=1;}
if(check==4){four=1;}
if(check==5){five=1;}
if(check==6){six=1;}
if(check==7){seven=1;}
if(check==8){eight=1;}
if(check==9){nine=1;}
n++;
}
if(zero==0){console.log(0);}
if(one==0){console.log(1);}
if(two==0){console.log(2);}
if(three==0){console.log(3);}
if(four==0){console.log(4);}
if(five==0){console.log(5);}
if(six==0){console.log(6);}
if(seven==0){console.log(7);}
if(eight==0){console.log(8);}
if(nine==0){console.log(9);}
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
