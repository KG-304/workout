export function isPalindrome(x: number): boolean {
  let localNum = x.toString();

  let reversedNum = localNum.split("").reverse().join("");

  let count = 0;
  for (let i = 0; i < localNum.length; i++) {
    if (reversedNum.charAt(i) === localNum.charAt(i)) {
      count++;
    }
  }

  if (count === localNum.length) {
    return true;
  }

  return false;
}
