# JS-01
[Тестовое задание на позицию frontend-разработчик](https://github.com/tutu-ru/frontend-javascript-test#%D0%B7%D0%B0%D0%B4%D0%B0%D1%87%D0%B0-1-2)

## Рефакторинг
Задачи на работу с чужим кодом.

### Задача №1
Посмотрите на код:

```
function func(s, a, b) {

	if (s.match(/^$/)) {
		return -1;
	}
	
	var i = s.length -1;
	var aIndex =     -1;
	var bIndex =     -1;
	
	while ((aIndex == -1) && (bIndex == -1) && (i > 0)) {
	    if (s.substring(i, i +1) == a) {
	    	aIndex = i;
    	}
	    if (s.substring(i, i +1) == b) {
	    	bIndex = i;
    	}
	    i = i - 1;
	}
	
	if (aIndex != -1) {
	    if (bIndex == -1) {
	        return aIndex;
	    }
	    else {
	        return Math.max(aIndex, bIndex);
	    }
	}
	
	if (bIndex != -1) {
	    return bIndex;
	}
	else {
	    return -1;
	}
}
```
Что можно улучшить? Как бы вы его переписали?
