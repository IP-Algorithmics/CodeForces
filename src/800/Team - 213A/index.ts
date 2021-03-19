// https://codeforces.com/problemset/problem/231/A
import { print, readline, testOutput } from '@ip-algorithmics/codeforces-io';

let result = 0;
const n = parseInt(readline(), 10);
for (let i = 0; i < n; i++) {
    const x = readline()
        .trim()
        .split(' ')
        .filter((x) => x === '1').length;
    if (x >= 2) result++;
}
print(result);

testOutput();
export {};
