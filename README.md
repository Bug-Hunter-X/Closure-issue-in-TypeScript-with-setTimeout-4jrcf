# Closure issue in TypeScript with setTimeout
This repository demonstrates a common closure-related issue in JavaScript/TypeScript when using `setTimeout` within a loop.  The problem arises because the `setTimeout` callback function doesn't capture the value of `i` immediately but only when the callback is executed. By then, the loop has finished, and `i` holds its final value.

## Problem
The `printNumbers1` function intends to print numbers from 1 to `n` with a delay. However, due to the closure issue, it prints the final value of `i` multiple times.

## Solution
The solution involves using an immediately-invoked function expression (IIFE) or `let` to create a new scope for each iteration of the loop, ensuring that each callback function captures its own unique value of `i`.

## How to run
1. Clone this repository.
2. Open a terminal and navigate to the cloned directory.
3. Run `tsc bug.ts && node bug.js` to see the original error.
4. Run `tsc bugSolution.ts && node bugSolution.js` to see the corrected output.