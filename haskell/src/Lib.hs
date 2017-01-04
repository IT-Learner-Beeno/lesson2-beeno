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

q2 = sum $ filter even $ takeWhile (<4000000) fib

fib :: [Int]
fib = 1:2:(zipWith (+) fib (tail fib))

q3 = foldl1 max $ filter isPrime' $ factor'

--factor n = [x| x <- [1..n], rem n x == 0]

nextFactor n last
  | last == n = error "already the last factor"
  | otherwise = nextFactor' n last (last+1)

nextFactor' n last trying
  | rem n trying == 0 = trying
  | otherwise         = nextFactor' n last (trying+1)

factor' n = factor'' n 1 n []

factor'' :: Int -> Int -> Int -> [Int] -> [Int]
factor'' n a b acc
  | (nextFactor n a) < b =
    let
      nextA = nextFactor n a
      nextB = div n nextA
    in
      factor'' n nextA nextB (a:b:acc)
  | otherwise            = a:b:acc

--isPrime x = (==2) $ length $ factor x

isPrime' 1 = False
isPrime' x = nextFactor x 1 == x