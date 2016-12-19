# Note 2
[project euler](https://projecteuler.net/about)

## Tools to install
 - Intellij Idea
 - Git for Windows

## setup git
  1. open [https://www.github.com]
  2. open new repo
  3. setup ssh key
     ```
     ssh-keygen
     ```
     (press Enter for the options)
  4. git init
  5. git add *
  6. git commit -m 'init commit'
  7. git push origin master

## cmd (command)
 - Run Prompt
   1. Win + R
   2. cmd
   3. Enter
 - working directory (folder's path)
   - e.g. "C:\Users\chacha\Documents"
 - commands
   - |command name|meaning|
     |------------|-------|
     | cd | __C__ hange Working __D__ irectory |
     | dir | Display Working Directory Content |
     | cat | show file content |
     | i | insert |
     | a | append |

## vim
For more detail, use the program `vimtutor` (from bash).

  | command | meaning | exmaple | explain |
  |---|---|---|---|
  | d | delete | d2w | delete two words |
  | / | search | /Author | search the word "Author" and move the cursor to here |
  | u | undo |

## Idea shortcut
 - Left Panel (Project View)
   - Alt + 1
 - Console
   - Alt + F12
 - Settings (Project)
   - Ctrl + Shift + Alt + S
 - Settings (IDE tools)
   - Ctrl + Alt + S
 
## Language Tools
 - GHC (compiler)
   - Developer write source code
   - compiler turns source code into program
 - Stack (package manager) (Librarian)
   - package is similar to reference book
   - Create new Project
     ```cmd
     > stack new lesson 2
     ```
