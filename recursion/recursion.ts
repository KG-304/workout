export const sumTo: any = (n: number) => {
  if (n === 0) {
    return 0;
  }
  return n + sumTo(n - 1);
};

/* 




If the element is a number, add it to total

If the element is an array, recursively call sumNested on it and add the result to total

After the loop, return total*/

export const sumNested: any = (arr: number[]) => {
  let total = 0;

  if (!arr.length) {
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      total = total + sumNested(arr[i]);
    } else {
      total = total + arr[i];
    }
  }

  return total;
};
