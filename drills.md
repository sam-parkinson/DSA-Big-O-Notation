# Big O notation drills

## Drill 1

a. The algorithm has a complexity of O(1), since only one operation is performed
b. The algorithm has a complexity of O(n), the operation will be performed once for each person in the room until a match is found

## Drill 2

Big O is O(1) -- one operation is performed, then depending on the result one of two statements is returned

## Drill 3

Big O is O(n^2) -- strictly, should be arr1.length * arr2.length, but the complexity depends on the length of both arrays, so best represented by n^2

## Drill 4

Big O is O(n) -- performs one operation on each item in array

## Drill 5

O(n) -- goes through list, checks each item i.e. performs one operation

## Drill 6

O(n^2) -- goes through list, for each item in outer loop, performs amount of operations dependent on length of list

## Drill 7

This takes in a number, then returns an array consisting of the Fibonnaci sequence up to that number.
Its runtime complexity is O(n) -- it performs one operation for 1 and 2, then four operations for every number up to the input number (get result[i - 2], get result[i - 3], add those two, append to result).

## Drill 8

O(log n) -- each operation cuts size of problem in half, as size of input increases, amount of steps increases more slowly

## Drill 9

O(1) -- performs a constant number of operations regardless of length of the array

## Drill 10

This function accepts a number, checks if it is not one or zero, then attempts to find a divisor, returning false if a divisor exists and returning true if the number inputted is a prime number.
Its runtime complexity is O(n) -- it loops through every number between 2 and n, then performs a constant number of operations on each number

## Drill 11

### Tower of Hanoi

## Drill 12

See drills.js, functions {whatever}

## Drill 13

## Drill 14