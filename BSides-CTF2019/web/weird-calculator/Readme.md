# Weird Calculator

**category** : web

## Challenge

This was a web challenge where we were given a file that contains web source code. Looking at the NodeJS code, the web evaluated our input. This means that we could inject a payload to read the index file to get the flag.

My payload snippet:
`res.end(require(‘fs’).readFileSync(‘index.js’).toString() + require(‘fs’).readFileSync(‘flag.txt’).toString())`

# flag: `bsides_delhi{Prototype_and_sh3ll1ng_by_the_Cs1de}`