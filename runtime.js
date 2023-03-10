const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();

perf.start();                     // Starts timer
doublerAppend(tinyArray);
let tinyresultsAppend = perf.stop();  // Stops timer and save time results

perf.start();                     // Starts timer
doublerAppend(smallArray);
let smallresultsAppend = perf.stop();  // Stops timer and save time results

perf.start();                     // Starts timer
doublerAppend(mediumArray);
let mediumresultsAppend = perf.stop();  // Stops timer and save time results


perf.start();                     // Starts timer
doublerAppend(largeArray);
let largeresultsAppend = perf.stop();  // Stops timer and save time results


perf.start();
doublerInsert(tinyArray);
let tinyresultsInsert = perf.stop();

perf.start();
doublerInsert(smallArray);
let smallresultsInsert = perf.stop();

perf.start();
doublerInsert(mediumArray);
let mediumresultsInsert = perf.stop();

perf.start();
doublerInsert(largeArray);
let largeresultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);


console.log("insert", tinyresultsInsert.preciseWords);
console.log("insert", smallresultsInsert.preciseWords);
console.log("insert", mediumresultsInsert.preciseWords);
console.log("insert", largeresultsInsert.preciseWords);

console.log("append", tinyresultsAppend.preciseWords);
console.log("append", smallresultsAppend.preciseWords);
console.log("append", mediumresultsAppend.preciseWords);
console.log("append", largeresultsAppend.preciseWords);
