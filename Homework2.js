const getSumOrMultiByEven = (a, b) => a % 2 === 0 ? a * b : a + b;

const getQuarter = (x, y) => {
    let result = "";

    if (x > 0 && y > 0)	{
        result = "First quarter";
    } else if (x < 0 && y > 0) {
        result = "Second quarter";
    } else if (x < 0 && y < 0) {
        result = "Third quarter";
    } else if (x > 0 && y < 0) {
        result = "Fourth quarter";
    } else if (x === 0 && y === 0) {
        result = "Center";
    } else if (x > 0 && y === 0 ) {
        result = "Positive axis OX";
    } else if (x === 0 && y < 0) {
        result = "Negative axis OY";
    } else if (x === 0 && y > 0 ) {
        result = "Positive axis OY";
    } else if (x < 0 && y === 0) {
        result = "Negative axis OX";
    }

    return result;
};

const getOnlyPositiveSum = (a, b, c) => {
    let result = 0;

    if (a > 0) {
        result += a;
    }
    if (b > 0) {
        result += b;
    }
    if (c > 0) {
        result += c;
    }

    return result;
};

const countExpression = (a, b, c) => a * b * c > a + b + c ? a * b * c + 3 : a + b + c + 3;

const getMarkByRating = rating => {
    let mark;

    if (rating >= 0 && rating <= 19) {
        mark = "F";
    } else if (rating >= 20 && rating <= 39) {
        mark = "E";
    } else if (rating >= 40 && rating <= 59) {
        mark = "D";
    } else if (rating >= 60 && rating <= 74) {
        mark = "C";
    } else if (rating >= 75 && rating <= 89) {
        mark = "B";
    } else if (rating >= 90 && rating <= 100) {
        mark = "A";
    } else {
        throw new Error ("Invalid given rating!");
    }

    return mark;
};

const getSumAndAmountOfEven99Numbers = () => [2450, 49];

const isSimple = number => {

    if (number <= 1) {
        return false;
    }

    for (let i = 2; i < number / 2; i++) {
        if (number % i === 0){
            return false;
        }
    }

    return true;
};

const getSqrtSequentialSelection = number => {

    if (number === 0) {
        return 0;
    } else if (number < 0) {
        throw new Error("Negative number!");
    }

    let count = number;

    let temp;

    for (let i = 0; i <= number; i++){
        if (number - i * i < count && i * i - number < count){
            count = number - i * i;
            temp = i;
        }
    }

    return temp;
};

const getSqrtBinarySearch = number => {

    if (number === 0) {
        return 0;
    } else if (number < 0) {
        return "Negative number input!";
    }

    let left = 0;

    let right = number;

    let item = 0;

    do {
        item = (left + right + (left + right) % 2) / 2;

        if (item ** 2 > number) {
            right = item;
        }
        else {
            left = item;
        }

    } while (right - left > 1);

    return number - left ** 2 > right ** 2 - number ? right : left;
};

const getFactorial = number => {
    let result = number;

    for (let i = number - 1; i > 0; i--) {
        result *= i;
    }

    return result;
};

const getTheSumOfDigits = number => {
    let sum = 0;

    while (number >= 1) {
        sum += number % 10;
        number = (number - number % 10) / 10;
    }

    return sum;
};

const reverseNumber = number => {
    let newNum = 0;

    let power;

    do {
        power = 1;

        for (let t = number / 10; t >= 1; t /= 10) {
            power *= 10;
        }

        newNum += number % 10 * power;
        number = (number - number % 10) / 10;

    } while (number >= 1);

    return newNum;
};

const findMinElemArray = array => {

    if (array === undefined || ! array.length)  {
        return null;
    }

    let min = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }

    return min;
};

const findMaxElemArray = array => {

    if (array === undefined || ! array.length)  {
        return null;
    }

    let max = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }

    return max;
};

const findIndexOfMinElemArray = array => {

    if (array === undefined || ! array.length)  {
        return null;
    }

    let min = array[0];

    let minIndex = 0;

    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
            minIndex = i;
        }
    }

    return minIndex;
};

const findIndexOfMaxElemArray = array => {

    if (array === undefined || ! array.length)  {
        return null;
    }

    let max = array[0];

    let maxIndex = 0;

    for (let i = 1;i <array.length; i++) {
        if (array[i] > max) {
            max = array[i];
            maxIndex = i;
        }
    }

    return maxIndex;
};

const sumOddElemArray = array => {

    if (array === undefined || ! array.length || array.length<2) {
        return null;
    }

    let sum = 0;

    for (let i = 1; i < array.length; i += 2) {
        sum += array[i];
    }

    return sum;
};

const reverseArray = array => {

    if (array === undefined || ! array.length) {
        return null;
    }

    for (let i = 0, j = array.length - 1; i < array.length / 2, j > array.length / 2; i++, j--) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
};

const amountOddElemArray = array => {

    if (array === undefined || ! array.length || array.length<2) {
        return null;
    }

    let amount=0;

    for (let i = 1; i < array.length; i += 2) {
        array++;
    }

    return amount;
};

const swapHalfArray = array => {

    if (array === undefined || ! array.length) {
        return null;
    }

    for (let i = 0, j = array.length / 2 + (array.length / 2) % 1; j < array.length, i < array.length / 2 - (array.length / 2) % 1; j++, i++) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
};

const arrayBubbleSort = array => {

    if (array === undefined || ! array.length) {
        return null;
    }

    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i; j < array.length; j++) {
            if (array[j] < array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    return array;
};
//descending
const arrayInsertSort = array => {

    if (array === undefined || ! array.length) {
        return null;
    }

    for (let i = 0; i < array.length; i++) {
        let item = array[i];

        let j = i;

        for(; j > 0 && array[j - 1] < item; j--) {
            array[j] = array[j - 1];
        }

        array[j] = item;
    }

    return array;
};
//----------------------------------------------------------------------------------------------------------
//                                      TO BE CONTINUED
//----------------------------------------------------------------------------------------------------------
//10
//quick sort--------------------------------------------------------------
const part = (array, left, right) => {
    let item=array[(right+left - (right+left)%2)/2];
    let i=left;
    let j=right;
    while (i<=j) {
        while (array[i]>item) i++;
        while (array[j]<item) j--;
        if (i<=j) {
            let temp=array[i];
            array[i]=array[j];
            array[j]=temp;
            i++;
            j--;
        }
    }
    return i;
};
const arrayQuickSort = (array, left, right) => {
    left=typeof left!="number"?0:left;
    right=typeof right!="number"?array.length-1:right;
    let index;
    if (array.length>1) {
        index = part(array, left, right);
        if (left<index-1) arrayQuickSort(array, left, index-1)
        if (index<right) arrayQuickSort(array, index, right);
    }
    return array;
};
//--------------------------------------------------------------------------

const arrayShellSort = array => {
    let step=(array.length-array.length%2)/2;
    while (step>=1) {
        for (let i=step; i<array.length; i++) {
            const current=array[i];
            let j=i;
            while (j>0 && array[j-step]<current) {
                array[j]=array[j-step];
                j-=step;
            }
            array[j]=current;
        }
        step=(step-step%2)/2;
    }
    return array;
};
//heap sort*********************************************************************
let len;
const arrayHeapSort = array => {
    len=array.length;
    for (let i=(len-len%2)/2; i>=0; i-=1) heapBranch(array, i);
    for (i=len-1; i>=0; i--) {
        let temp=array[0];
        array[0]=array[i];
        array[i]=temp;
        len--;
        heapBranch(array, 0);
    }
}
const heapBranch = (array, i) => {
    let left=2*i+1;
    let right=2*i+2;
    let max=i;
    if (left<len && array[left]>array[max]) max=left;
    if (right<len && array[right]>array[max]) max=right;
    if (max!==i) {
        let temp=array[i];
        array[i]=array[max];
        array[max]=temp;
        heapBranch(array, max);
    }
}
let arr=[3,6,2,545,75468,67,44,32,645,7,4,6,5346,457,5,734,53,-5,7749,-1,98,98,7,0,70,6,7,-4,-88,]
arrayHeapSort(arr);//using
//*******************************************************************************
//merge sort+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const sliceArray = (array,i,j) => {
    let newArray;
    if(!j) {
        newArray=new Array(array.length-i);
        for(let k=0;k<newArray.length;k++){
            newArray[k]=array[k+i];
        }
        return newArray;
    }
    else {
        newArray=new Array(j-i);
        for(let k=0,q=i;k<newArray.length,q<j;k++,q++){
            newArray[k]=array[q];
        }
        return newArray;
    }
};
const pushElem = ( array, elem) => {
    let newArray=new Array(array.length+1);
    for(let i=0;i<array.length;i++) newArray[i]=array[i];
    newArray[newArray.length-1]=elem;
    return newArray;
}
const merge = (first, second) => {
    let array=[];
    let i=j=0;
    while (i<first.length && j<second.length) {
        array=pushElem(array,(first[i]<second[j])?first[i++]:second[j++]);
    }
    return [
        ...array,
        ...sliceArray(first,i),
        ...sliceArray(second,j)
    ];
}
const arrayMergeSort = array => {
    if (array.length<=1) return array;
    const middle=(array.length-array.length%2)/2;
    const arrLeft=sliceArray(array,0,middle);
    const arrRight=sliceArray(array,middle);
    return merge(arrayMergeSort(arrLeft), arrayMergeSort(arrRight));
};
//functions
//1
const getDayName = number => {
    switch(number){
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        case 7: return "Sunday";
        default: return "Wrong number!";
    }
}
//2
const getDistanceBetweenTwoPoints = (point1,point2) => ((point2.x-point1.x)**2+(point2.y-point1.y))**0.5;
//extra homework
const twoMinElem = array => {
    let min1=Infinity, min2=Infinity;
    let indemMin1;
    for(let i=0;i<array.length;i++){
        if(array[i]<min1){
            min1=array[i];
            indexMin1=i;
        }
    }
    let newArray=new Array(array.length-1);
    let i=0, j=0;
    while(i<array.length){
        if(i===indexMin1){
            i++;
            continue;
        }
        else{
            newArray[j]=array[i];
            if(newArray[j]<min2) min2=newArray[j];
            i++;
            j++;
        }
    }
    for(let i=0;i<newArray.length;i++) if(newArray[i]<min2) min2=newArray[i];
    return [min1,min2];
}
const averageArray = array => {
    let average=0;
    for(let i=0;i<array.length;i++) average+=array[i];
    return average/2;
}
const maxRowMatrix = array => {
    let newArray=new Array(array.length);
    let max;
    for(let i=0;i<array.length;i++){
        max=-Infinity
        for(let j=0;j<array[i].length;j++) if(array[j][i]>max) max=array[j][i];
        newArray[i]=max;
    }
    return newArray;
}
const positiveAndNegativeArrays = array => {
    let positive=[], negative=[];
    for(let i=0;i<array.length;i++){
        if(array[i]>0) positive=pushElem(positive,array[i]);
        else if(array[i]<0) negative=pushElem(negative,array[i]);
    }
    return [positive,negative];
};
const countSimpleNumbers = array => {
    let count=0;
    let anotherCount=0;
    for(let i=0;i<array.length;i++){
        for(let j=2;j<array[i];j++){
            if(array[i]%j===0){
                anotherCount++;
            }
        }
        if(anotherCount===0 && array[i]!==1) count++;
        anotherCount=0;
    }
    return count;
};