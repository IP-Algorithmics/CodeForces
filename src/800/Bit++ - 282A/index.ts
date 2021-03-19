// https://codeforces.com/problemset/problem/282/A
import { print, readline, testOutput } from '@ip-algorithmics/codeforces-io';

const n = parseInt(readline(), 10);
let result = 0;
for (let i = 0; i < n; i++) {
    const x = readline().trim();
    x.includes('++') ? result++ : result--;
}
print(result);

testOutput();
export {};
