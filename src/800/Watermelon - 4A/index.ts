// https://codeforces.com/problemset/problem/4/A
import { print, readline, testOutput } from '@ip-algorithmics/codeforces-io';

const kg = parseInt(readline(), 10);

if ((kg - 2) % 2 === 0 && kg > 2) {
    print('YES');
} else {
    print('NO');
}

testOutput(); // Result Passed
export {};
