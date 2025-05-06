export function isAnagram(s: string, t: string): boolean | undefined {
  const charCountRecord = new Map<string, number>();

  if (s.length !== t.length) {
    return false;
  }

  for (let p = 0; p < s.length; p++) {
    let count = 0;
    let characterToCheck = s.charAt(p);
    for (let i = 0; i < s.length; i++) {
      if (characterToCheck === s.charAt(i)) {
        count++;
      }
      charCountRecord.set(s.charAt(p), count);
    }
  }

  for (let q = 0; q < t.length; q++) {
    if (!charCountRecord.has(t.charAt(q))) {
      return false;
    }
    let recordToGet = charCountRecord.get(t.charAt(q))!;
    if (recordToGet === 0) {
      return false;
    } else {
      recordToGet = recordToGet - 1;
      charCountRecord.set(t.charAt(q), recordToGet);
    }
  }

  for (const [key, value] of charCountRecord) {
    if (value !== 0) {
      return false;
    }
    return true;
  }
}

/* 
===== V1 =====
  let firstStringCheckSet = new Set();
  let secondStringCheckSet = new Set();

  if (s.length !== t.length) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    firstStringCheckSet.add(s.charAt(i));
  }
  for (let j = 0; j < t.length; j++) {
    secondStringCheckSet.add(t.charAt(j));
  }

  let count = 0;

  for (const key of firstStringCheckSet) {
    if (secondStringCheckSet.has(key)) {
      count++;
    }
  }

  return firstStringCheckSet.size === count;
*/
