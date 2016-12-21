# Lesson 3
 - Install & Configure Linux
 - [Project Euler Question 1](https://projecteuler.net/problem=1)

## Installed packages
| Name     | Description                           |
|----------|---------------------------------------|
| vim      | programmer -text editor               |
| gdm      | login manager                         |
| gnome    | graphical desktop                     |
| cinnamon | MS-Windows-like graphical desktop     |
| chromium | Open-Sourced version of Google Chrome |
| networkmanager <br> dialog <br> wifi-menu <br> net-tools | networking tools <br> (e.g. wifi) |

## Change cinnamon theme
You can configure the theme (look and feel) of cinnamon by:
1. Hit the [Super] key (a.k.a. [Win] key)
2. Type theme
3. Hit [Enter] key
4. Choose the window decorator / icons / whatever :)

## Programming for Question 1

### Conditional Branch
```haskell
if condition
  then result1
  else result2
```
#### Tips
`result1` or `result2` can be a _value_ or another _conditional branch_

Using this technique, you can build more complex logic,
e.g. check if a number is multiple of two numbers.

#### Example
If the reminder of `5/2` is zero, then 5 is a even number, else 5 is an odd number
```haskell
if rem 5 2 == 0
  then "even"
  else "odd"
```
```haskell
if rem 5 2 == 0
  then "ok"
  else if rem 5 3 == 0
         then "also ok"
         else "not ok"
```