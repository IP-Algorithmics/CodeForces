// https://codeforces.com/problemset/problem/112/A
import { print, readline, testOutput } from '@ip-algorithmics/codeforces-io';

const str1 = readline().trim().toLowerCase();
const str2 = readline().trim().toLowerCase();
// print(str2.localeCompare(str1));
str1 <= str2 ? (str1 === str2 ? print(0) : print(-1)) : print(1);

testOutput();
export {};
