/*
https://atcoder.jp/contests/abc244/submissions/30290714
*/
function Main(input) {
	input = input.split("\n");
    let countmax = input[0]
	let code = input[1]
    let x=0;
    let y=0;
	let direction = '東';
	let n = 0;
    while(n<countmax){
      if(code.charAt(n)==='S'){
      	if(direction==='東'){x++;}
        if(direction==='西'){x--;}
        if(direction==='北'){y++;}
        if(direction==='南'){y--;}
      }
      if(code.charAt(n)==='R'){
      	if(direction==='東'){direction='南';}
        else if(direction==='西'){direction='北';}
        else if(direction==='北'){direction='東';}
        else if(direction==='南'){direction='西';}
      }
      n++;
	}
console.log(x,y)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
