# Dynamic Array Problem

This repository contains the solution to the **[Dynamic Array](https://www.hackerrank.com/challenges/one-month-preparation-kit-dynamic-array/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-two)** problem.

## Problem Statement

The task is to implement a dynamic array structure that supports two types of queries as described below.

## Problem Description

Declare a 2-dimensional array, `arr`, of size `n` empty arrays. All arrays are zero-indexed. Declare an integer, `lastAnswer`, and initialize it to 0.

There are 2 types of queries:

1. **Query 1**: `1 x y`
   - Let `idx = (x ^ lastAnswer) % n`.
   - Append the integer `y` to `arr[idx]`.

2. **Query 2**: `2 x y`
   - Let `idx = (x ^ lastAnswer) % n`.
   - Assign the value at index `y % size(arr[idx])` to `lastAnswer`.
   - Store the new value of `lastAnswer` to an answers array.

### Queries

- **Query 1**: Append a value to a specific sequence in the array.
- **Query 2**: Retrieve a value from a sequence using bitwise XOR and modulo calculations.
