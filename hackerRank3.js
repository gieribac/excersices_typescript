'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'repeatedString' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 */

function repeatedString(s, n) {
    let mod = n%s.length;
    let result;
    let count = 0;
    let countTruck = 0;
    if (mod > 0) {
        for (let k = 0; k < s.length-mod; k++){        
            if (s[k] === 'a'){
                countTruck++;
            }       
        }
    }
    let i = 0;        
    while ( i < s.length ) {      
        if (s[i] === 'a') {
          count++;      
        };
        i++;
    }    
    result = count * Math.floor(n/s.length)+countTruck;
    return result;   
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine().trim(), 10);

    const result = repeatedString(s, n);

    ws.write(result + '\n');

    ws.end();
}
