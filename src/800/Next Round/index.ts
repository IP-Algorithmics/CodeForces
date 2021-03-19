// https://codeforces.com/problemset/problem/158/A
import { print, readline, testOutput } from '@ip-algorithmics/codeforces-io';

const [n, k] = readline()
    .trim()
    .split(' ')
    .map((x) => parseInt(x, 10));

const scores = readline()
    .trim()
    .split(' ')
    .map((x) => parseInt(x, 10));
const greaterScores = scores.filter((x) => x >= scores[k - 1] && x > 0);
print(greaterScores.length);

testOutput();
export {};
