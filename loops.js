function forLoop(array){
<<<<<<< HEAD
	for (let i = 0; i < 25; i++){
		array.push(`I am ${i} strange loop${i != 1 ? 's' : ''}.`);
		}
	return(array);
}

function whileLoop(num){
  while (num > 0) {
    console.log(num);
    --num
  }
  return "done"
}

var i = 0;
function doWhileLoop(num){
  num = parseInt(num, 10);
  do {
    console.log("I run once regardless");
    ++i
    } while (i <= num)
=======
	for (let i = 1; i < 25; i++){
		array.push(`I am ${i} strange loop${i != 1 ? 's' : ''}.`);
		}
	return(array);
>>>>>>> 070fc443725c351b2a9db04f8a60d888c6bd0339
}