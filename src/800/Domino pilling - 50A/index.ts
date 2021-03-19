// https://codeforces.com/problemset/problem/50/A
import { print, readline, testOutput } from '@ip-algorithmics/codeforces-io';

const [m, n] = readline()
    .trim()
    .split(' ')
    .map((x) => parseInt(x, 10));

const area = m * n;
const dominoArea = 2 * 1;

print(Math.floor(area / dominoArea));

testOutput();
export {};
