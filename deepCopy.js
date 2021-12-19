// создание стрелочной функции и передать аргументы через него
const deepCopyFunction = (obj) => {
    
    let newObj;
    
  //Возвращаем значение если obj не является объектом
   if (typeof obj !== "object") {
        return obj;
   }
    // чтобы узнать наш аргумент массив или объект
    newObj = Array.isArray(obj) ? [] : {}
    
    // пробегаемся по объекту
    for (key in obj) {
        
        //записываем в newObj значение ключей в объекте используя рекурсию
        newObj[key] = deepCopyFunction(obj[key]);
    }

    return newObj;
}

let res = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    
}};

console.log(deepCopyFunction(res));
