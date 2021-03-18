// const { readline, print, testOutput } = require('@ip-algorithmics/codeforces-io');
import { print, readline, testOutput } from '@ip-algorithmics/codeforces-io';

test('example', () => {
    let numberOfLines = parseInt(readline(), 10);
    for (let i = 0; i < numberOfLines; i++) {
        let x = readline()
            .trim()
            .split(',')
            .map((y) => parseInt(y, 10));

        if ((x[0] < 90 && x[0] > -90) || (x[1] < 90 && x[1] > -90)) {
            print(x[0] + ',' + x[1]);
            break;
        }
    }

    testOutput(); // Result Passed
});

export {};
