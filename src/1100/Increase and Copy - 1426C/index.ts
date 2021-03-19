// https://codeforces.com/problemset/problem/1426/C
import { print, readline, testOutput } from '@ip-algorithmics/codeforces-io';

const testsNumber = parseInt(readline(), 10);

for (let i = 0; i < testsNumber; i++) {
    const minSum = parseInt(readline(), 10);
    // all the increments should be done at the beginning so the clones can profit more from them
    // we increment up to the ceil of sqrt(sum) since the clones will value more afterwards
    // then we clone the value obtained another (sqrt(sum) - 1) times - it is important to clone it the appropriate number of times (be it 1 more or less  than sqrt times)
    const increments = Math.ceil(Math.sqrt(minSum)) - 1;
    const clones = Math.round(Math.sqrt(minSum)) - 1;
    let moves = increments + clones;
    print(moves);
}

testOutput();
export {};
