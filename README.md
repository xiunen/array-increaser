# array-increaser
Increase Array when last bit reach band, it it useful when solve N-Sum problem.

## API

### increase(numberArray, band): Array

Increase numberArray from lower digit to higher digit, and return Number Array.

**numberArray**, A Number Array

**band**, Band, when current digit reach band, the digit would reset to 0, and last digit(higher digit) would increase 1.

#### increaseGreaterThanUpper(numberArray, band)

**numberArray**, A Number Array

**band**, Band, when current digit reach band,  and last digit(higher digit) would increase 1, and current digit would reset to {last digit + 1}.

##Example

```
  const {increase, increaseGreaterThanUpper, repeat} = require('../');
  increase([0], 10); // => [1];

  repeat(123, increase, [1,2], 10); //=>[1, 3, 5];

  repeat(1, increaseGreaterThanUpper, [6], 7); //=> [1,2] // 6 increase 1 is 7, band is 7, so get [1,0], but lower digit should greater than higher digit, so last digit should be 2, so result is [1,2]

  repeat(10, increaseGreaterThanUpper, [6], 7); //=> [3,4] //repeat after 1 time, got [1,2], after 6 times, got [2,3], afrer 10 times, got [3,4]
```

## TODO
Deal with decimals and initial Number Array has element greater than band
