module Lib where

someFunc :: IO ()
someFunc = putStrLn "someFunc"

-- https://projecteuler.net/problem=1
q1 = count 1 1000 0

count acc n sum =
  if acc == n
    then sum
    else count (acc+1) n (if rem acc 3 == 0
                            then acc+sum
                            else if rem acc 5 == 0
                                   then acc+sum
                                   else sum
                         )