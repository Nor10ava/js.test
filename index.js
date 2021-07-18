//return Object.keys(obj).length;
//Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного (который выполнил больше всех задач). Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате "имя":"кол-во задач".

//const findBestEmployee = function (employees) {
    // твой код
  //  let employeMax = 0;
   // let employeName = "";
  //  for (let employe in employees) {
   //     if (employees[employe] > employeMax)
    //        employeMax = employees[employe];
     //   employeName = employe;
    //}
  //  return employeName;
//};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
//console.log(
 //// findBestEmployee({
    //ann: 29,
    //david: 35,
    //helen: 1,
    //lorence: 99,
 // }),
//); // lorence

//console.log(
  //findBestEmployee({
   // poly: 12,
  //  mango: 17,
  //  ajax: 4,
  //}),
//); // mango

//console.log(
  //findBestEmployee({
    //lux: 147,
   // david: 21,
  //  kiwi: 19,
  //  chelsy: 38,
 // }),
//); // lux


//Напиши функцию countTotalSalary(employees) принимающую объект зарплат. Функция считает общую сумму запрплаты работников и возращает ее. Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата".

//const countTotalSalary = function(employees) {
  // твой код

//let totalSalary = 0;
//const arr = Object.values(employees);
//for (let i = 0; i < arr.length; i += 1) {
  //  totalSalary += arr[i];
//}
   // return totalSalary;
    
    //или

//};
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
//console.log(countTotalSalary({})); // 0

//console.log(
 // countTotalSalary({
  //  mango: 100,
  //  poly: 150,
  //  alfred: 80,
  //}),
//); // 330

//console.log(
 // countTotalSalary({
  //  kiwi: 200,
  //  lux: 50,
  //  chelsy: 150,
 /// }),
//); // 400

//Напиши функцию getAllPropValues(arr, prop),
//которая получает массив объектов и имя свойства.
//Возвращает массив значений определенного свойства prop из каждого объекта в массиве.

//const products = [
 // { name: 'Радар', price: 1300, quantity: 4 },
 // { name: 'Сканер', price: 2700, quantity: 3 },
  //{ name: 'Дроид', price: 400, quantity: 7 },
  //{ name: 'Захват', price: 1200, quantity: 2 },
//];

//const getAllPropValues = function(arr, prop) {
  // твой код
   // let newArr = [];
//перебираем
 //   for (let el of arr) {
        //проверяем
     //   if (prop in el) {
            //console.log(el[prop])
       //     newArr.push(el[prop])
      //  }
       // console.log(product)
  //  }
  //  return newArr;
//};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
//console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

//console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

//console.log(getAllPropValues(products, 'category')); // []

 //или

//const products = [
  //{ name: 'Радар', price: 1300, quantity: 4 },
  //{ name: 'Сканер', price: 2700, quantity: 3 },
  //{ name: 'Дроид', price: 400, quantity: 7 },
  //{ name: 'Захват', price: 1200, quantity: 2 },
//];
//7
//const getAllPropValues = function (arr, prop) {
    //let newArr = [];

   // for (let el of arr) {
      //  if (el.hasOwnProperty(prop)) {
            // console.log(el[prop])
         //   newArr.push(el[prop])
      //  }
        // console.log(el)
        // console.log(product)
        
   // }
   // return newArr;
  // твой код
//};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
//console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

//console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

//console.log(getAllPropValues(products, 'category')); // []


//Напиши функцию calculateTotalPrice(allProdcuts, productName), которая получает массив объектов и имя продукта (значение свойства name). Возвращает общую стоимость продукта (цена * количество).

//Вызовы функции для проверки работоспособности твоей реализации.

//const products = [
 // { name: 'Радар', price: 1300, quantity: 4 },
 // { name: 'Сканер', price: 2700, quantity: 3 },
 // { name: 'Дроид', price: 400, quantity: 7 },
 // { name: 'Захват', price: 1200, quantity: 2 },
//];

//const calculateTotalPrice = function(allProdcuts, productName) {
  // твой код
   // let sum = 0;
   // for (let obj of allProducts) {
   //     if (obj.name === productName)
            //надо закончить, посмотреть
  //  }
//};

// Добавить метод getinfo в объект user, который будет возвращать инфу о пользователе в формате
// Name: Peter. Surname: Parker. Age: 22. Position: spider-man.

// const user = {
//     name: 'Peter',
//     surname: 'Parker',
//     age: 22,
//     position: 'spider-man'
// }


//const user = {
   // name: "Peter",
   // surname: "Parker",
   // age: 22,
  //  position: "spider-man",
//}
//function getInfo() {
   // return 'Name:${this.name}. Surname:${this.surname}. Age:${this.age}. Position:${this.position}'
//}


//console.log(getinfo.call(user));

//const books = [
    //{
    //  title: 'Последнее королевство',
     // author: 'Бернард Корнуэлл',
      //genres: ['приключения', 'историческое']
    //},
    //{
    //  title: 'На берегу спокойных вод',
     // author: 'Роберт Шекли',
     // genres: ['фантастика', 'мистика']
    //},
    //{
    //  title: 'Красна как кровь',
    //  author: 'Ли Танит',
     // genres: ['ужасы', 'мистика', 'приключения']
    //}
  //];
  // Пиши код ниже этой строки
  //const allGenres = books.flatMap(book=>book.genres);
  //const uniqueGenres = allGenres.filter((genre,index,array)=> array.indexOf(genre)===index);


  //const getSortedFriends = users => {
   // return [...users]
  //.flatMap(user=>user.friends)
  //.filter((user,index,array)=>array.indexOf(user)===index)
  //    .sort((firstFriend, secondFriend) => firstFriend.localeCompare(secondFriend))
//};