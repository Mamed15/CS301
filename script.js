// 1)Ad soyad ata adinizi butov sheklde goturun ve array sheklinde herflerine
// let fullName = "Mamed Axmedov Vuqar"
// // console.log(fullName.split(''));

// Function version
// function splitFullName(fullName) {
//     return fullName.split('');
// }
// console.log(splitFullName(fullName));

// 2) FullName'də soyadinizi adinizin onune keciren alqoritm yazin
// let fullName = "Mamed Axmedov Vuqar"
// // console.log(fullName.slice(6, 13), fullName.slice(0, 5), fullName.slice(14, 19));

// Function version
// function extractFullNameParts(fullName){
//     const part1 = fullName.slice(6,13)
//     const part2 = fullName.slice(0,5)
//     const part3 = fullName.slice(14,19)
    
//     return [part1, part2, part3]
// }
// console.log(extractFullNameParts(fullName));


// // 3) Alinan yeni arrayi stringe cevirin(join)
// let fullName = "Mamed Axmedov Vuqar"
// // let splittedName = fullName.split(' ');
// // console.log(splittedName); 
// // let newFullName = splittedName[1] + ' ' + splittedName[0] + ' ' + splittedName[2];
// // console.log(newFullName); 

// Function version
// function stringeFullName(fullName){
//     let splittedName = fullName.split(' ');
// console.log(splittedName); 
// let newFullName = splittedName[1] + ' ' + splittedName[0] + ' ' + splittedName[2];
// return newFullName
// }
// console.log(stringeFullName(fullName));


// 4) Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin
// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]
// let number = 0
// for (i = 0; i<arr.length; i++) {
//     if (arr[i] ===5) {
//         number++
//     }
// }
// console.log(number);

// Function version
// function countOccurrences(arr, targetNumber) {
//     let number = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === targetNumber) {
//             number++;
//         }
//     }
//     return number;
// }
// let targetNumber = 5;
// console.log(countOccurrences(arr, targetNumber));
 
//5) Yuxaridaki arraydaki butun reqemlerin cemini tapin
// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]
// let amount = 0
// for (let i = 0; i < arr.length; i++) {
//      amount = amount + arr[i]
// }
// console.log(amount);

// Function version
// function sumArrElements(arr){
//     let amount = 0
//     for(let i=0; i < arr.length; i++){
//         amount = amount+arr[i]
//     }
//     return amount
// }
// console.log(sumArrElements(arr));

//6) arrayda tekrar olunan reqemleri artan sira ile duzun
//  let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]
// //  arr.sort()
// //  console.log(arr);

// Function version
// function numbers(arr){
//    return arr.sort()
// }
// console.log(numbers(arr));

//7) arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin(Math.max)
// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]
// let maxNumber = Math.max(...arr);

// let filteredNumbers = arr.filter(num => num === maxNumber);
// let count = filteredNumbers.length;

// console.log(maxNumber);
// console.log(count);

// Function version
// function findMaxAndCount(arr) {
//     let maxNumber = Math.max(...arr);

//     let filteredNumbers = arr.filter(num => num === maxNumber);
//     let count = filteredNumbers.length;

//     console.log(maxNumber);
//     console.log(count);
// }

// console.log(findMaxAndCount(arr));

//8) Adinizdaki herflerin sayini tapin ve hemin sayin arrayda olub olmamasini yoxlayin Meselen Ulfat adinda 5 herf var ve 5 arrayda var(includes)
// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]
// let myName= "Mamed"
// let myNameLenghtYes = "Yes"
// for(let i=0; i<arr.length; i++){
//       if(myName.length === arr[i]){
//         myNameLenghtYes = "true"
//       }
// }
// console.log(myNameLenghtYes)

// Function version
// function checkNameLength(arr, name) {
//     let result = "false";

//     for (let i = 0; i < arr.length; i++) {
//         if (name.length === arr[i]) {
//             result = "true";
//             break; 
//         }
//     }

//     return result;
// }
// let myName = "Mamed";
// let myNameLengthYes = checkNameLength(arr, myName);
// console.log(myNameLengthYes);


//9) arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin
// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]
// for(let i=0; i<arr.length; i++){
//     if (arr[i] % 3 === 2) {
//         console.log("This number is :",arr[i], " ", "This index is:", i);
//         break;
//       }
// }

// Function version
// const findNumberWithModulo = function(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 3 === 2) {
//             console.log("This number is:", arr[i], " ", "This index is:", i);
//             break;
//         }
//     }
// };
// findNumberWithModulo(arr);

//10) arraydaki en boyuk reqemin ilk indexini tapin
// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]
// for(let i = 0; i<arr.length; i++) {
//     if (arr[i] === Math.max(...arr)){
//         console.log(i);
//         break;
//     }
// }

// Function version
// const findIndexOfMaxNumber = function(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === Math.max(...arr)) {
//             console.log(i);
//             break;
//         }
//     }
// };

// findIndexOfMaxNumber(arr);



//11) 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin
// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]
// for(let i=0; i<arr.length; i++) {
//     if (arr[i] === 4 ) {
//         console.log(i);
//     }
// }

// Function version
// const findIndicesOfValue = function(arr, targetValue) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === targetValue) {
//             console.log(i);
//         }
//     }
// };

// findIndicesOfValue(arr, 4);

//12) 5 reqeminin arraydaki en boyuk ve en kicik indexlerini tapin
// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]
// let indexMaxMin = [];    // Сreate an empty array indexMaxMin, which will be used to store the indices of elements equal to 5.
// for (let i=0; i < arr.length; i++) {
//       if (arr[i] === 5) {
//           indexMaxMin.push(i); //when it find index of 5, it push this index into the array indexMaxMin

//       }
    
// }
// console.log(indexMaxMin);
// console.log( "Min Index:",Math.min(...indexMaxMin) + " " +  "Max index: ", Math.max(...indexMaxMin));

// Function version
// const findIndicesMinMaxOfValue = function(arr, targetValue) {
//     let indexMinMax = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === targetValue) {
//             indexMinMax.push(i);
//         }
//     }

//     console.log(indexMinMax);
//     console.log("Min Index:", Math.min(...indexMinMax), "Max Index:", Math.max(...indexMinMax));
// };


// findIndicesMinMaxOfValue(arr, 5);

// 13) "arr" - arrayindan reqemleri 2 den boyuk olan yeni array yaradin ve alinmish arrayla "arr" arrayinin uzunluqlari ferqini hesablayin
// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]
// newArr = [];
// for (let i = 0; i < arr.length; i++) {

//     if (arr[i] > 2) {
//         newArr.push(arr[i])
//     }
// }
// console.log(arr.length - newArr.length)

// Function version
// const findIndicesMinMaxOfValue = function(arr, targetValue) {
//     let indexMinMax = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === targetValue) {
//             indexMinMax.push(i);
//         }
//     }

//     console.log(indexMinMax);
//     console.log("Min Index:", Math.min(...indexMinMax), "Max Index:", Math.max(...indexMinMax));
// };

// findIndicesMinMaxOfValue(arr, 5);


//14) 7 reqeminin indexleri cemini tapin.
// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]
// amount=0
// for(let i=0; i<arr.length; i++) {
//     if (arr[i] === 7)
//     amount = amount +arr[i]
// }
// console.log(amount);

// Function version
// const countOccurrences = function(arr, targetValue) {
//     let amount = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === targetValue) {
//             amount = amount + arr[i];
//         }
//     }

//     return amount;
// };

// let result = countOccurrences(arr, 7);
// console.log(result);



// let arr2 = [
    // {
    //     name: 'test',
    //     key: 1
    // },
    // {
    //     name: 'task',
    //     key: 2
    // },
    // {
    //     name: 'tanqo',
    //     key: 3
    // },
    // {
//         name: 'like',
//         key: 4
//     },
//     {
//         name: 'task',
//         key: 5
//     },
//     {
//         name: 'trust',
//         key: 6
//     },
//     {
//         name: 'test',
//         key: 7
//     },
//     {
//         name: 'last',
//         key: 8
//     },
//     {
//         name: 'tanqo',
//         key: 9
//     },
//     {
//         name: 'elephant',
//         key: 10
//     },
//     {
//         name: 'love',
//         key: 11
//     },
//     {
//         name: 'small',
//         key: 12
//     },
//     {
//         name: 'little',
//         key: 13
//     },
// ]

// 16 arr2 de "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin
// let filteredArr = arr2.filter(item => item.name.startsWith('t'));
// console.log(filteredArr);

// Function version
// const filterArrayByPrefix = function(arr, prefix) {
//     return arr.filter(item => item.name.startsWith(prefix));
// }
// let filteredArr = filterArrayByPrefix(arr2, 't');
// console.log(filteredArr);


// 17 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin
// let newArr = arr2.filter(item => item.name.startsWith('t') && item.name.endsWith('t')).length;
// console.log(newArr);

// let amount = 0
// for (let i=0; i<arr2.length; i++){
//     if (arr2[i].name.startsWith("t") && arr2[i].name.endsWith("t")){
//         amount=amount+1
//     }
// }
// console.log(amount);

// Function version
// const filterArrayByPrefix = function(arr, prefix) {
//         return arr.filter(item => item.name.startsWith(prefix) && item.name.endsWith(prefix)).length;
//     };
    
//     let number = filterArrayByPrefix(arr2, 't');
//     console.log(number);

// 18 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin    ||||IZAH
// let totalKeySum = 0;

// arr2.forEach(item => {
//     const name = item.name.toLowerCase(); 
//     if (name.startsWith('t') && name.endsWith('t')) {
//         totalKeySum += item.key;
//     }
// });

// console.log("Total key sum for words starting and ending with 't'", totalKeySum);

// Function version
// const totalKeySumWords = (arr) => {
//     let totalKeySum = 0;

//     arr.forEach(item => {
//         const name = item.name.toLowerCase(); 
//         if (name.startsWith('t') && name.endsWith('t')) {
//             totalKeySum += item.key;
//         }
//     });

//     return totalKeySum;
// };

// const result = totalKeySumWords(arr2);
// console.log("Total key sum for words starting and ending with 't'", result);



// 19 arr2 de "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.
// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i].name.endsWith('e')) {
//         arr2[i].name = 'superdev';
//     }
// }

// console.log(arr2);

// Function version
// const updateNames = (arr) => {
//     for (let i = 0; i < arr2.length; i++) {
//         if (arr2[i].name.endsWith('e')) {
//             arr2[i].name = 'superdev';
//         }
//     }
//         return arr 
// }
// const updatedArr = updateNames(arr2)
// console.log(updatedArr)

// 20 arr2 de "name"-i en uzun olan obyektin key-i ni tapin      |izah
// let maxLength = 0;
// let maxKey;

// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i].name.length > maxLength) {
//         maxLength = arr2[i].name.length;
//         maxKey = arr2[i].key;
//     }
// }

// console.log("The longest name:", maxLength);
// console.log("Appropriate key:", maxKey);

// Functin version
// const findLongestName = (arr) => {
//     let maxLength = 0;
//     let maxKey;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].name.length > maxLength) {
//             maxLength = arr[i].name.length;
//             maxKey = arr[i].key;
//         }
//     }

//     return { maxLength, maxKey };
// };

// const result = findLongestName(arr2);
// console.log("The longest name:", result.maxLength);
// console.log("Appropriate key:", result.maxKey);


// 21 arr2 de "name"-i en uzun olan obyektin indexin kvadratini hesablayin
// let maxIndex = 0;
// let maxLength = 0;

// for (let i = 0; i < arr2.length; i++) {
//     const currentLength = arr2[i].name.length;
//     if (currentLength > maxLength) {
//         maxLength = currentLength;
//         maxIndex = i;
//     }
// }

// const squareOfMaxIndex = maxIndex * maxIndex;
// console.log("Square of the index of the longest name:", squareOfMaxIndex);


// Function version
// const calculateSquareOfMaxIndex = (arr) => {
//     let maxIndex = 0;
//     let maxLength = 0;

//     for (let i = 0; i < arr.length; i++) {
//         const currentLength = arr[i].name.length;
//         if (currentLength > maxLength) {
//             maxLength = currentLength;
//             maxIndex = i;
//         }
//     }

//     return maxIndex * maxIndex;
// };

// const result = calculateSquareOfMaxIndex(arr2);
// console.log("Square of the index of the longest name:", result);


// 22 arr2 de "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin.
// let newArr = [];

// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i].name.length === 4) {
//         newArr.push(arr2[i]);
//     }
// }

// console.log(newArr);

// Fuction version
// const filterByLength = (arr, length) => {
//     let newArr = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].name.length === length) {
//             newArr.push(arr[i]);
//         }
//     }

//     return newArr;
// };

// const resultArr = filterByLength(arr2, 4);
// console.log(resultArr);

// 23 arr2 de en boyuk "key" - i olan obyektin "name"-i ni tapin
// let maxKey = Number.NEGATIVE_INFINITY;
// let maxKeyName;

// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i].key > maxKey) {
//         maxKey = arr2[i].key;
//         maxKeyName = arr2[i].name;
//     }
// }

// console.log("Name with the largest key:", maxKeyName);

// Function version
// const findNameWithLargestKey = (arr) => {
//     let maxKey = Number.NEGATIVE_INFINITY;
//     let maxKeyName;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].key > maxKey) {
//             maxKey = arr[i].key;
//             maxKeyName = arr[i].name;
//         }
//     }

//     return maxKeyName;
// };
// const result = findNameWithLargestKey(arr2);
// console.log("Name with the largest key:", result);



// 24 arr2 de terkibinde 2 'L' herfi olan obyekt(ler)in index(ler)ini tapin.
// let indicesWithDoubleL = [];

// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i].name.includes('l') && arr2[i].name.indexOf('l') !== arr2[i].name.lastIndexOf('l')) {
//         indicesWithDoubleL.push(i);
//     }
// }

// console.log("Indices with two 'l' in the name:", indicesWithDoubleL);

// Function version
// const findIndicesWithDoubleL = (arr) => {
//     const resultIndices = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].name.includes('l') && arr[i].name.indexOf('l') !== arr[i].name.lastIndexOf('l')) {
//             resultIndices.push(i);
//         }
//     }

//     return resultIndices;
// };

// const result = findIndicesWithDoubleL(arr2);
// console.log("Indices with two 'l' in the name:", result);


// 25 arr2 de terkibinde 2 't' herfi olan obyekt(ler)in key(ler)ini tapin.
// let keysWithDoubleT = [];

// for (let i = 0; i < arr2.length; i++) {
//     if ((arr2[i].name.match(/t/gi) || []).length === 2) {
//         keysWithDoubleT.push(arr2[i].key);
//     }
// }

// console.log("Keys with two 't' in the name:", keysWithDoubleT);

// // Function version
// const findKeysWithDoubleT = (arr) => {
//     let keysWithDoubleT = [];

//     for (let i = 0; i < arr.length; i++) {
//         if ((arr[i].name.match(/t/gi) || []).length === 2) {
//             keysWithDoubleT.push(arr[i].key);
//         }
//     }

//     return keysWithDoubleT;
// };

// const result = findKeysWithDoubleT(arr2);
// console.log("Keys with two 't' in the name:", result);

    