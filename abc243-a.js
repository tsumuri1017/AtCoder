/*
https://atcoder.jp/contests/abc243/submissions/30040641
*/
function Main(input) {
    input = input.split("\n");
    tmp = input[0].split(" ");
    let v = parseInt(tmp[0], 10);
    let a = parseInt(tmp[1], 10);
	let b = parseInt(tmp[2], 10);
    let c = parseInt(tmp[3], 10);  
  	while(true){
    if(-1 < v-a){
      v=v-a
    }else{
      console.log('F');
      break;
    }
    if(-1 < v-b){
      v=v-b
    }else{
      console.log('M');
      break;
    }
    if(-1 < v-c){
      v=v-c
    }else{
      console.log('T');
      break;
    }
    }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
