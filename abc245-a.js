/*
https://atcoder.jp/contests/abc245/submissions/30471162
*/

function Main(input) {
    input = input.split("\n");
    list = input[0].split(" ");
    let a = list[0]
    let b = list[1]
    let c = list[2]
    let d = list[3]
    let takahashi = (a * 360) + b;
    let aoki = (c * 360) + d;
    if (takahashi > aoki) {
        console.log('Aoki');
    } else{
        console.log('Takahashi');
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
