function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); //This will work fine

function printNumbers1(n: number): void {
  for (let i = 1; i <= n; i++) {
    (function(j){
      setTimeout(() => {
        console.log(j);
      }, j * 1000);
    })(i);
  }
}

printNumbers1(5); //This will print 1,2,3,4,5

function printNumbers2(n: number): void {
    for (let i = 1; i <= n; i++) {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    }
  }
  
printNumbers2(5); //This will also print 1,2,3,4,5