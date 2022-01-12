// the variable names aren't understandable
function func(s, a, b) {
  if (s.match(/^$/)) {
    return -1;
  }

  var i = s.length - 1;
  var aIndex = -1;
  var bIndex = -1;

  // 1. changed (aIndex == -1 && bIndex == -1) to (aIndex == -1 || bIndex == -1)
  // because if we give func("string", "s", "g") then the result will be correct
  // the index of "s" will be 0 and the index of "g" will be 5
  // 2. changed i >= 0, cause index should check for 0 index

  while ((aIndex == -1 || bIndex == -1) && i >= 0) {
    if (s.substring(i, i + 1) == a) {
      aIndex = i;
    } else if (s.substring(i, i + 1) == b) {
      bIndex = i;
    }
    i = i - 1;
  }

  console.log("aIndex:", aIndex);
  console.log("bIndex:", bIndex);

  // Using the Conditional Ternary operator
  if (aIndex != -1) {
    return bIndex == -1 ? aIndex : Math.max(aIndex, bIndex);
  }
  return bIndex != -1 ? bIndex : -1;
}

func("string", "s", "g");
