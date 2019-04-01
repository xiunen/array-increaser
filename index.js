function increase(arr=[], band = 10){
  if(band <= 0){
    throw new Erorr('band should greater than 0, current result is '+ arr.toString());
  }

  if(arr.find(i=>i>=band)){
    throw new Error('has element(s) greater than ' + band);
  }

  const len = arr.length;

  if(!len)return arr;

  if(arr[len-1] + 1 >= band){
    if(len === 1){
      arr[0] = 1;
      arr[1] = 0;
      return [1,0];
    }else{
      const newArr = increase(arr.slice(0, len - 1), band);
      newArr.push(0);
      return newArr;
    }
  }

  arr[len-1] += 1;
  return arr;
}

function increaseGreaterThanUpper(arr=[], band = 10){
  if(band <= 0){
    throw new Erorr('band should greater than 0, maybe the result reach maximum, current result is ', arr.toString());
  }

  if(arr.find(i=>i>=band)){
    throw new Error('has element(s) greater than ' + band);
  }

  const len = arr.length;

  if(!len)return arr;

  if(arr[len-1] + 1 === band){
    if(len === 1){
      return [1, 2];
    }else{
      const newArr = increaseGreaterThanUpper(arr.slice(0, len - 1), band - 1);
      newArr.push(newArr[newArr.length-1] + 1);
      return newArr;
    }
  }

  arr[len-1] += 1;
  return arr;
}

function repeat(times, fn, input, band){
  let arr = input;
  for(let i=0;i<times;i++){
    arr = fn(arr, band);
  }
  return arr;
}


module.exports = {
  increase,
  increaseGreaterThanUpper,
  repeat
};
