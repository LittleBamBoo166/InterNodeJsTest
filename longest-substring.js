const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const longestSubstringLength = (str) => {
    let longestSubstring = "";
    let curSub = "";
    let start = 0, end = 0;
    while (start < str.length && end < str.length) {
        while (start >= 0 && start < str.length && end < str.length) {
            if (curSub.indexOf(str.charAt(end)) == -1) {
                curSub = str.slice(start, end + 1);
                end++;
            } else {
                if (curSub.length > longestSubstring.length) {
                    longestSubstring = curSub;
                    curSub = "";
                }
                start = end;
                end = start + 1;
                break;
            }            
        }
    }
    return longestSubstring.length;
}

rl.question('Type your string: ', function (str) {
    console.log(`The longest substring of ${str} is: ${longestSubstringLength(str)}`);
    rl.close();
});


rl.on('close', function () {
  console.log('\nProgram end.');
  process.exit(0);
});