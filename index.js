// Your code here
function mapToNegativize(sourceArray) {
    return sourceArray.map(i => i *(-1));
}

function mapToNoChange(sourceArray) {
    return sourceArray
}

function mapToDouble(sourceArray) {
return sourceArray.map(i => i * 2);
}

function mapToSquare(sourceArray) {
    return sourceArray.map(i => i**2)
}

function reduceToTotal(sourceArray, startingPoint=0) {
   let total = startingPoint
    for (let i of sourceArray) {
        total += i
    }
    return total;
}

function reduceToAllTrue(sourceArray) {
    for (let i of sourceArray) {
        if (!i) return false;
    }
    return true;
}

function reduceToAnyTrue(sourceArray) {
    for (let i of sourceArray) {
        if (i) return true;
    }
    return false;
}