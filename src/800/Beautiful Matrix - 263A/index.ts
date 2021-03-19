// https://codeforces.com/problemset/problem/263/A
import { print, readline, testOutput } from '@ip-algorithmics/codeforces-io';

const n = 5;
for (let i = 0; i < n; i++) {
    const row = readline().trim().split(' ');
    if (row.includes('1')) {
        print(Math.abs(2 - i) + Math.abs(2 - row.indexOf('1')));
        break;
    }
}

testOutput();
export {};
