// https://codeforces.com/problemset/problem/339/A
import { print, readline, testOutput } from '@ip-algorithmics/codeforces-io';

const sumArr = readline()
    .trim()
    .split('+')
    .sort((a, b) => a.localeCompare(b));
print(sumArr.join('+'));

testOutput();
export {};
