/*
https://atcoder.jp/contests/abc249/submissions/31213290
*/
function Main(input) {
input = input.split("");
let 文字列の長さ=input.length;let counter=0;
let 大文字チェック=0;let 小文字チェック=0;
let 被りのチェック=[];let 被エラチェック=false;
const 大文字 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";const 小文字 = 大文字.toLowerCase();
while(counter<文字列の長さ){
if(大文字.includes(input[counter])){大文字チェック=1;}
if(小文字.includes(input[counter])){小文字チェック=1;}
if(被りのチェック.includes(input[counter])){
被エラチェック=true;}else{被りのチェック.push(input[counter]);}
counter++;}
if((大文字チェック==1)&&(小文字チェック==1)&&(被エラチェック==false))
{console.log('Yes');}else{console.log('No');}}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
