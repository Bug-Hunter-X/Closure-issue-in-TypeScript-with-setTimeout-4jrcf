function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); //This will work fine

function printNumbers1(n: number): void {
  for (let i = 1; i <= n; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}

printNumbers1(5); //This will print 6,6,6,6,6 instead of 1,2,3,4,5