function func(str, a, b) {
  /*str - string, text
	a - letter
	b- letter
	 */
  if (str.match(/^$/)) {
    return -1;
  }

  var aIndex = -1;
  var bIndex = -1;

  if (
    str.match(a) &&
    str.match(a)[0] != "" &&
    str.match(a) != null &&
    a.length == 1
  ) {
    aIndex = str.match(a).index;
  } else if (
    str.match(b) &&
    str.match(b)[0] != "" &&
    str.match(b) != null &&
    b.length == 1
  ) {
    bIndex = str.match(b).index;
  } else {
    aIndex = -1;
    bIndex = -1;
  }

  console.log("aIndex:", aIndex);
  console.log("bIndex:", bIndex);

  if (aIndex != -1) {
    return bIndex == -1 ? aIndex : Math.max(aIndex, bIndex);
  } else {
    return bIndex != -1 ? bIndex : -1;
  }
}

func("string", "st", "s");
