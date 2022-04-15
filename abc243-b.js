/*https://atcoder.jp/contests/abc243/submissions/30054830*/
function Main(input) {
	input = input.split("\n");
	second = input[1].split(" ");
    third = input[2].split(" ");
  	let counter = 0;
  	let itti = 0;
  	let subitti =0;
	var a = parseInt(input[0], 10);
  	while(counter<a){
	if((second[counter])==(third[counter])){
    itti++;
    }else{
      if(second.includes(third[counter])){
      subitti++;
      }
    }
	counter++;
	}
  console.log(itti)
  console.log(subitti)
}
 
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
