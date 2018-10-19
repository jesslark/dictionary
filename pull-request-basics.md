# Doing a pull request is not that scary
*This document assumes you are on a Mac.*

A pull request is just making some changes to some code, then asking the person who maintains that code if they want to check your changes out. If your pull request is approved by that person, then your code is in their codebase and that's pretty cool. It's easier to learn this stuff at the command line, I think. If you want to use a GUI for git there are lots of programs and tutorials out there.

## Ok but what's the command line? 
- Go to your Applications/Utilities folder in Finder
- Open Terminal
- You are at the command line, get intimidated
- Type 
```
echo Any text you want.
```
- To find out where you are, type 'pwd'
- To get a list of files and directories where you are right now, type 'ls'
- To move to a directory in that list, type 'cd directoryname' (where directoryname is the name of the directory you want to change to)
- to move back up a level, type 'cd ..'
- To go back to the home directory, type 'cd ~'
- To make a new directory, type 'mkdir newdirectoryname' (where newdirectoryname is whatever you want to call your directory)
- See? Not that scary. You made it do stuff! The command line is just a way to explicitly explain to the computer exactly what you want it to do. If you want to know what a command does, search for it on the web. 

## But I don't even understand the difference between 'git' and 'github'
- git is a program that tracks changes in files
 - any particular set of files that are tracked together with git is called a 'repository' (or 'repo')
 - git just keeps a list of things like, on May 5, 2018, Grace Hopper added this code, then lets you look back at those changes if you need to
- github is a website that helps manage repos
- Github is not a neccessary part of using git
- Github (or an equivalent site) is helpful because it allows users to see each other's repos and becuase it stores your work remotely.
- For now, go to Github and make an account

## Ok but how do I get git?
- Go to the command line and enter the following:
```
cd ~
git --version
```
- Follow the instructions, it will prompt you to install git if you do not already have it.

## Ok so ... what now?
- Now you surf around github and find a repo you want to contribute to. Be sure to read the README.md files and any other documentation to ensure your PR (pull request) is helpful.
- Or you can start right here. Super easy.

## Ok I'm ready to contribute

1. FORK the repo 
 - Click the fork button in the upper right of a repo
 - This will copy that to your own github
 - When you make a pull request it will ask whoever is running the original repo if they want to add your changes
2. CLONE the repo from your own
 - Be on the <> Code tab
 - Click the green 'Clone or download' button
 - Highlight the address and copy it
 - At the command line, enter 'git clone the-address-you-just-copied
 - Get a listing of the files in the current directory
 - Change to the new directory your 'git clone' just made
 - Type 'git checkout -b someusefulname
 - You just created a new "branch". This is like a little save slot for your code, and the name on the slot is whateveryou put for someusefulname.
3. Open up whatever program you use to write code
4. Modify a file or add a new file
5. Look over your changes and fix any typos, remove any unnecessary comments or console.logs, etc.
5. Go back to the command line and type the following:
```
git add .
git commit -m "Some message to describe the change you made."
git push origin whatever-you-named-your-branch
```
- If you can't remember your branch name, type 'git status' to get some basic info about your repo and branch.
6. The command line should offer you a link to make a pull request. Go to that link. Follow the on screen instructions to make a PR. 
7. It's out of your hands, now the owner of the repo can decide whether to use your code or not.
8. If you own that repo, you can go approve that request yourself.
