function removeFromArray(arr, ...arg) {
            for (let i = arr.length-1; i >= 0 ;i--) {
                for (const j of arg) {
                    if (arr.indexOf(j) > -1 && arr[i] == j) {
                    arr.splice(arr.indexOf(j), 1);
                    i++;
                    }
                }
                    
    }
    return arr;
    }
    
// Do not edit below this line
module.exports = removeFromArray;
