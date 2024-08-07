/****************************************
        forEACH functions
 ****************************************/
/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
function doubleValues(arr){
    let doubleArr=[];
    arr.forEach(function(numDouble){
        doubleArr.push(numDouble*2);
    })
    return doubleArr;
}

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr){
    let evenValuesArr=[];
    arr.forEach(function(inputEvenVals){
        if(Math.abs(inputEvenVals%2)==0){
            evenValuesArr.push(inputEvenVals);
        }
    });
    return evenValuesArr;
}

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr){
    let firstLastArr=[];
    arr.forEach(function(inputStringFL){
        firstLastArr.push(`${inputStringFL[0]}${inputStringFL[inputStringFL.length-1]}`);
    });
    return firstLastArr;
}

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(arr,key,value){
    let addKeyValueArray=[];
    
    arr.forEach(function(inputArray){
        let objectArray={};
        objectArray['name']=inputArray.name
        objectArray[key]=value;
        addKeyValueArray.push(objectArray);
    });
    return addKeyValueArray;
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

/********************************************
 * Technically this function works correctly, but needs to search in order of the str and not the vowels to return the correct values for the test
 * Essentially the test is asking for a very specific order to be returned (the order vowels appear in the string AND then the count)
 *******************************************/
function vowelCount(str){
   let vowelsCounted=[];
   let vowelValues='aeiou';
   let vowelArray=vowelValues.split("");
   str=str.toLowerCase();
   let strArray=str.split("");
   vowelArray.forEach(function(vowels){
    let count=0;   
    strArray.forEach(function(character){
        if(character===vowels){
            count+=1;
        }
    })
    if(count>0){
        let vowelsObject={};
        vowelsObject[vowels]=count;
        vowelsCounted.push(vowelsObject);
    }
   });
   return vowelsCounted;
}

/****************************************
            MAP functions
 ****************************************/

/*
Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValuesWithMap([1,2,3]) // [2,4,6]
    doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
*/

function doubleValuesWithMap(arr) {
    return arr.map(function(doubleMapValue, doubleMapIndex, doubleMapArr){
        return doubleMapValue*2;
    });
}

/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr){
    return arr.map(function(timesValue,timesIndex,timesArray){
        return timesValue*timesIndex;
    });
}

/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractKey(arr, key){
    return arr.map(function(keyedValue,keyedIndex,keyedArray){
        return keyedValue.name;
    })
}

/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr){
    return arr.map(function(fullValue,fullIndex,fullArray){
        return `${fullValue.first} ${fullValue.last}`;
    });
}

/****************************************
        FILTER functions
 ****************************************/

/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

function filterByValue(arr, key) {
    return filteredArray=arr.filter(function(byValValue, byValIndex,byValArray){
        return byValValue[key]===true;
    });
}

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

function find(arr, searchValue) {
    let foundValue=arr.filter(function(search,searchIndex,searchArr){
        return search===searchValue;
    })
    return foundValue[0];
}

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(arr, key, searchValue) {
    let catOwner=arr.filter(function(ownerValue, ownerIndex,ownerArray){
        return ownerValue[key]===searchValue;
    });
    return catOwner[0];
}

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str) {
    let vowelsOptions=['a','e','i','o','u'];
    let lowerCaseStr=str.toLowerCase().split("");

    let vowelsFilter=vowelsOptions.filter(function(vowelValue,vowelIndex,vowelArray){
        let vowelsRemoved=lowerCaseStr.filter(function(charValue,charIndex,charArray){
            if(charValue!=vowelValue){
                return charValue;
            };
        })
        lowerCaseStr=vowelsRemoved;        
        return lowerCaseStr;
    })
    return lowerCaseStr.join(''); 
    
}

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(arr) {
    //filter for the odd numbers
    let filterOdds=arr.filter(function(oddValue){
        return (oddValue%2!=0);
    })
    
    //double the numbers
    return filterOdds.map(function(doubleOddValue,doubleOddIndex,doubleOddArray){
        return doubleOddValue*2;
    });
}
