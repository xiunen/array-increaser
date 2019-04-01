const arrayIncreaser = require('../');

describe('test increaser',()=>{
  test('increase',()=>{
    let arr = [0,0,0];
    let band  = 10;
    for(let i = 0; i < 9888; i++){
      arr = arrayIncreaser.increase(arr, band);
    }
    expect(arr).toEqual([9,8,8,8]);
  });

  test('increaseGreaterThanUpper',()=>{
    let arr = [0,0,0];
    let band  = 9;
    for(let i = 0; i < 11; i++){
      arr = arrayIncreaser.increaseGreaterThanUpper(arr, band);
    }
    expect(arr).toEqual([0,1,4]);
  });

  test('increaseGreaterThanUpper 2',()=>{
    let arr = [0,0,0];
    let band  = 9;
    for(let i = 0; i < 20; i++){
      arr = arrayIncreaser.increaseGreaterThanUpper(arr, band);
    }
    expect(arr).toEqual([0,2,7]);
  });

  test('increaseGreaterThanUpper 3',()=>{
    let arr = [0,0,0];
    let band  = 9;
    for(let i = 0; i < 100; i++){
      arr = arrayIncreaser.increaseGreaterThanUpper(arr, band);
    }
    expect(arr).toEqual([1,2,4,7]);
  });

  test('repeat',()=>{
    let arr = [0,1,2];
    let band = 10;
    const result = arrayIncreaser.repeat(111, arrayIncreaser.increase, arr, band);
    expect(result).toEqual([1,2,3]);
  })
});
