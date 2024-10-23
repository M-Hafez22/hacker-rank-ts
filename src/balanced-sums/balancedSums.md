# Sherlock and Array - balanced Sums

> This repository contains the solution to the **[Sherlock and Array](https://www.hackerrank.com/challenges/one-month-preparation-kit-sherlock-and-array/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-two)** problem.

## Problem Description

Watson gives Sherlock an array of integers. His challenge is to find an element of the array such that the sum of all elements to the left is equal to the sum of all elements to the right.

Example

```ts
arr = [5, 6, 8, 11]
```

8 is between two subarrays that sum to 11.

```ts
arr = [1]
```

The answer is [1] since left and right sum to 0.

You will be given arrays of integers and must determine whether there is an element that meets the criterion. If there is, return YES. Otherwise, return NO.

Function Description

Complete the balancedSums function in the editor below.

balancedSums has the following parameter(s):

int arr[n]: an array of integers

Returns

- string: either YES or NO

Input Format

The first line contains T, the number of test cases.

The next T pairs of lines each represent a test case.

- The first line contains , the number of elements in the array arr.
- The second line contains  space-separated integers arr[i] where 0<= i < n.

Sample Input
2
3
1 2 3
4
1 2 3 3

Sample Output
NO
YES
