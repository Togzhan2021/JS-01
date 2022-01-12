function func(s, a, b) {
  if (s.match(/^$/)) {
    return -1;
  }

  var aIndex = -1;
  var bIndex = -1;

  if (aIndex == -1 || bIndex == -1) {
    for (var i = 0; i < s.length; i++) {
      if (s.charAt(i) == a) {
        aIndex = i;
      } else if (s.charAt(i) == b) {
        bIndex = i;
      }
    }
  } else if (aIndex != -1) {
    return bIndex == -1 ? aIndex : Math.max(aIndex, bIndex);
  } else {
    return bIndex != -1 ? bIndex : -1;
  }

  console.log("aIndex:", aIndex);
  console.log("bIndex:", bIndex);
}

func("string", "st", "g");
