// https://codeforces.com/problemset/problem/71/A
import { print, readline, testOutput } from '@ip-algorithmics/codeforces-io';

const numberOfLines = parseInt(readline(), 10);
for (let i = 0; i < numberOfLines; i++) {
    let x = readline().trim();

    if (x.length <= 10) {
        print(x);
        continue;
    }

    print(x[0] + (x.length - 2) + x[x.length - 1]);
}

testOutput(); // Result Passed
export {};
