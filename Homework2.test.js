describe('Homework2', () => {
    describe('getSumOrMultiByEven', () => {
        //Given
        const testData = [
            {
                a: 2,
                b: 3,
                expected: 6
            },
            {
                a: 1,
                b: 4,
                expected: 5
            },
            {
                a: 0,
                b: 1,
                expected: 0,
            }
        ];

        testData.forEach(data => {
            //When
            const {a, b, expected} = data;

            const actual = getSumOrMultiByEven(a, b);

            //Then
            it(`Should return ${expected} when a = ${a} and b = ${b}`, () => {
                assert.strictEqual(actual ,expected);
            });
        });

    });

    describe('getQuarter', () => {
        const testData = [
            {
                x: 0,
                y: 0,
                expected: 'Center'
            },
            {
                x: 1,
                y: 1,
                expected: 'First quarter'
            },
            {
                x: 40,
                y: 15.5,
                expected: 'First quarter'
            },
            {
                x: 4,
                y: -1,
                expected: 'Fourth quarter'
            },
            {
                x: 10,
                y: -5,
                expected: 'Fourth quarter'
            },
            {
                x: 5,
                y: 0,
                expected: 'Positive axis OX'
            },
            {
                x: 50,
                y: 0,
                expected: 'Positive axis OX'
            },
            {
                x: -3,
                y: -1,
                expected: 'Third quarter'
            },
            {
                x: -300,
                y: -100,
                expected: 'Third quarter'
            },
            {
                x: 0,
                y: -2,
                expected: 'Negative axis OY'
            },
            {
                x: 0,
                y: -20,
                expected: 'Negative axis OY'
            },
            {
                x: 0,
                y: 20,
                expected: 'Positive axis OY'
            },
            {
                x: 0,
                y: 2,
                expected: 'Positive axis OY'
            },
            {
                x: -1,
                y: 0,
                expected: 'Negative axis OX'
            },
            {
                x: -5,
                y: 0,
                expected: 'Negative axis OX'
            },
            {
                x: -5,
                y: 5,
                expected: 'Second quarter'
            },
            {
                x: -100,
                y: 10,
                expected: 'Second quarter'
            },
        ];

        testData.forEach(data => {
            const {x, y, expected} = data;

            const actual = getQuarter(x, y);

            it(`Should return '${expected}' when x = ${x} and y = ${y}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('getOnlyPositiveSum', () => {
        const testData = [
            {
                a: 1,
                b: 2,
                c: 3,
                expected: 6
            },
            {
                a: -1,
                b: 3,
                c: 2,
                expected: 5
            },
            {
                a: -1,
                b: 0,
                c: 2,
                expected: 2
            },
            {
                a: -1,
                b: 3,
                c: 0,
                expected: 3
            },
            {
                a: 0,
                b: 0,
                c: -5,
                expected: 0
            },
            {
                a: 8,
                b: -3,
                c: 0,
                expected: 8
            },
            {
                a: 3,
                b: 0,
                c: 6,
                expected: 9
            },
            {
                a: 4,
                b: 4,
                c: 0,
                expected: 8
            }
        ];

        testData.forEach(data => {
            const {a, b, c, expected} = data;

            const actual = getOnlyPositiveSum(a, b, c);

            it(`Should return ${expected} when a = ${a}, b = ${b} and c = ${c}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('countExpression', () => {
        const testData = [
            {
                a: 0,
                b: 0,
                c: 0,
                expected: 3
            },
            {
                a: 1,
                b: 1,
                c: 1,
                expected: 6
            },
            {
                a: -1,
                b: 1,
                c: 1,
                expected: 4
            },
            {
                a: 1,
                b: -1,
                c: 1,
                expected: 4
            },
            {
                a: 1,
                b: 1,
                c: -1,
                expected: 4
            },
            {
                a: 1,
                b: 2,
                c: 3,
                expected: 9
            },
            {
                a: 4,
                b: 2,
                c: 3,
                expected: 27
            },
            {
                a: 4,
                b: -2,
                c: 3,
                expected: 8
            },
            {
                a: 4,
                b: -2,
                c: -5,
                expected: 43
            }
        ];

        testData.forEach(data => {
            const {a, b, c, expected} = data;

            const actual = countExpression(a, b, c);

            it(`Should return ${expected} when a = ${a}, b = ${b} and c = ${c}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('getMarkByRating', () => {
        const testData = [
            {
                rating: 0,
                expected: 'F'
            },
            {
                rating: 1,
                expected: 'F'
            },
            {
                rating: 12,
                expected: 'F'
            },
            {
                rating: 19,
                expected: 'F'
            },
            {
                rating: 20,
                expected: 'E'
            },
            {
                rating: 21,
                expected: 'E'
            },
            {
                rating: 32,
                expected: 'E'
            },
            {
                rating: 39,
                expected: 'E'
            },
            {
                rating: 40,
                expected: 'D'
            },
            {
                rating: 41,
                expected: 'D'
            },
            {
                rating: 55,
                expected: 'D'
            },
            {
                rating: 59,
                expected: 'D'
            },
            {
                rating: 60,
                expected: 'C'
            },
            {
                rating: 61,
                expected: 'C'
            },
            {
                rating: 69,
                expected: 'C'
            },
            {
                rating: 74,
                expected: 'C'
            },
            {
                rating: 75,
                expected: 'B'
            },
            {
                rating: 76,
                expected: 'B'
            },
            {
                rating: 82,
                expected: 'B'
            },
            {
                rating: 89,
                expected: 'B'
            },
            {
                rating: 90,
                expected: 'A'
            },
            {
                rating: 91,
                expected: 'A'
            },
            {
                rating: 95,
                expected: 'A'
            },
            {
                rating: 100,
                expected: 'A'
            }
        ];

        testData.forEach(data => {
            const {rating, expected} = data;

            const actual = getMarkByRating(rating);

            it(`should return ${expected} when rating = ${rating}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('getSumAndAmountOfEven99Numbers', () => {
        const testData = [
            {
                expected: [2450, 49]
            }
        ];

        testData.forEach(data => {
            const {expected} = data;

            const actual = getSumAndAmountOfEven99Numbers();

            it(`Should return array = [${expected}] all the time`, () => {
                assert.deepEqual(actual, expected);
            });
        });
    });

    describe('isSimple', () => {
        const testData = [
            {
                number: 5,
                expected: true
            },
            {
                number: 1,
                expected: false
            },
            {
                number: 0,
                expected: false
            },
            {
                number: -5,
                expected: false
            },
            {
                number: 7,
                expected: true
            },
            {
                number: 11,
                expected: true
            },
            {
                number: 111,
                expected: false
            },
            {
                number: 113,
                expected: true
            },
            {
                number: 20,
                expected: false
            },
            {
                number: 9,
                expected: false
            }
        ];

        testData.forEach(data => {
            const {number, expected} = data;

            const actual = isSimple(number);

            it(`Should return '${expected}' when number = ${number}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });
    describe('getSqrtSequentialSelection', () => {
        const testData = [
            {
                number: 5,
                expected: 2
            },
            {
                number: 30,
                expected: 5
            },
            {
                number: 31,
                expected: 6
            },
            {
                number: 1,
                expected: 1
            },
            {
                number: 0,
                expected: 0
            },
            {
                number: 4,
                expected: 2
            },
            {
                number: 7,
                expected: 3
            },
            {
                number: -5,
                expected: 'Negative number input!'
            }
        ];

        testData.forEach(data => {
            const {number, expected} = data;

            const actual = getSqrtSequentialSelection(number);

            it(`Should return ${expected} when number = ${number}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });
    describe('getSqrtBinarySearch', () => {
        const testData = [
            {
                number: 5,
                expected: 2
            },
            {
                number: 30,
                expected: 5
            },
            {
                number: 31,
                expected: 6
            },
            {
                number: 1,
                expected: 1
            },
            {
                number: 0,
                expected: 0
            },
            {
                number: 4,
                expected: 2
            },
            {
                number: 7,
                expected: 3
            },
            {
                number: -5,
                expected: 'Negative number input!'
            }
        ];

        testData.forEach(data => {
            const {number, expected} = data;

            const actual = getSqrtSequentialSelection(number);

            it(`Should return ${expected} when number = ${number}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });
    describe('getFactorial', () => {
        const testData = [

            {
                number: 0,
                expected: 0
            },
            {
                number: 1,
                expected: 1
            },
            {
                number: 2,
                expected: 2
            },
            {
                number: 3,
                expected: 6
            },
            {
                number: 4,
                expected: 24
            },
            {
                number: 5,
                expected: 120
            },
            {
                number: 6,
                expected: 720
            },
            {
                number: 7,
                expected: 5040
            },
            {
                number: 8,
                expected: 40320
            },
            {
                number: 9,
                expected: 362880
            },
            {
                number: 10,
                expected: 3628800
            }
        ];

        testData.forEach(data => {
            const {number, expected} = data;

            const actual = getFactorial(number);

            it(`Should return ${expected} when number = ${number}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });
    describe('getTheSumOfDigits', () => {
        const testData = [
            {
                number: 1234,
                expected: 10
            },
            {
                number: 4321,
                expected: 10
            },
            {
                number: 123,
                expected: 6
            },
            {
                number: 0,
                expected: 0
            },
            {
                number: 1024,
                expected: 7
            },
            {
                number: 987654321,
                expected: 45
            }
        ];

        testData.forEach(data => {
            const {number, expected} = data;

            const actual = getTheSumOfDigits(number);

            it(`Should return ${expected} when number = ${number}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });
    describe('reverseNumber', () => {
        const testData = [
            {
                number: 1234,
                expected: 4321
            },
            {
                number: 1000,
                expected: 1
            },
            {
                number: 987654321,
                expected: 123456789
            },
            {
                number: 0,
                expected: 0
            },
            {
                number: 8,
                expected: 8
            },
            {
                number: 56000,
                expected: 65
            },
            {
                number: 103450,
                expected: 54301
            }
        ];

        testData.forEach(data => {
            const {number, expected} = data;

            const actual = reverseNumber(number);

            it(`Should return ${expected} when number = ${number}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });
    describe('findMinElemArray', () => {
        const testData = [
            {
                array: [],
                expected: null
            },
            {
                array: [1],
                expected: 1
            },
            {
                array: [5,3,78,2,9,5,3],
                expected: 2
            },
            {
                array: undefined,
                expected: null
            },
            {
                array: [-2,0,-5,-4,-6,3,6,25,34],
                expected: -6
            }
        ];

        testData.forEach(data => {
            const {array , expected} = data;

            const actual = findMinElemArray(array);

            it(`Should return ${expected} when array = [${array}]`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('findMaxElemArray', () => {
        const testData = [
            {
                array: [],
                expected: null
            },
            {
                array: [1],
                expected: 1
            },
            {
                array: [5,3,78,2,9,5,3],
                expected: 78
            },
            {
                array: undefined,
                expected: null
            },
            {
                array: [-2,0,-5,-4,-6,3,6,25,34],
                expected: 34
            }
        ];

        testData.forEach(data => {
            const {array, expected} = data;

            const actual = findMaxElemArray(array);

            it(`Should return ${expected} when array = [${array}]`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('findIndexOfMinElemArray', () => {
        const testData = [
            {
                array: [],
                expected: null
            },
            {
                array: [1],
                expected: 0
            },
            {
                array: [5,3,78,2,9,5,3],
                expected: 3
            },
            {
                array: undefined,
                expected: null
            },
            {
                array: [-2,0,-5,-4,-6,3,6,25,34],
                expected: 4
            }
        ];

        testData.forEach(data => {
            const {array, expected} = data;

            const actual = findIndexOfMinElemArray(array);

            it(`Should return min index = ${expected} when array = [${array}]`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('findIndexOfMaxElemArray', () => {
        const testData = [
            {
                array: [],
                expected: null
            },
            {
                array: [1],
                expected: 0
            },
            {
                array: [5,3,78,2,9,5,3],
                expected: 2
            },
            {
                array: undefined,
                expected: null
            },
            {
                array: [-2,0,-5,-4,-6,3,6,25,34],
                expected: 8
            }
        ];

        testData.forEach(data => {
            const {array, expected} = data;

            const actual = findIndexOfMaxElemArray(array);

            it(`Should return min index = ${expected} when array = [${array}]`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('sumOddElemArray', () => {
        const testData = [
            {
                array: [],
                expected: null
            },
            {
                array: [1],
                expected: null
            },
            {
                array: [1, 2, 3, 4],
                expected: 6
            },
            {
                array: [1, 2],
                expected: 2
            },
            {
                array: [1, 2, 3],
                expected: 2
            },
            {
                array: [1, 2, 3],
                expected: 2
            }
        ];

        testData.forEach(data => {
            const {array, expected} = data;

            const actual = sumOddElemArray(array);

            it(`Should return ${expected} when array = [${array}]`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('reverseArray', () => {
        const testData = [
            {
                array: [],
                expected: null
            },
            {
                array: [1],
                expected: [1]
            },
            {
                array: [1, 2],
                expected: [2, 1]
            },
            {
                array: [1, 2, 3],
                expected: [3, 2, 1]
            },
            {
                array: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                expected: [9, 8, 7, 6, 5, 4, 3, 2, 1]
            }
        ];

        testData.forEach(data => {
            const {array, expected} = data;

            const actual = reverseArray(array);

            it(`Should return [${expected}] when array = [${array}]`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('amountOddElemArray', () => {
        const testData = [
            {
                array: [],
                expected: null
            },
            {
                array: [1],
                expected: null
            },
            {
                array: [1, 2],
                expected: 1
            },
            {
                array: [1, 2, 3],
                expected: 1
            },
            {
                array: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                expected: 4
            },
            {
                array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 7],
                expected: 7
            }
        ];

        testData.forEach(data => {
            const {array, expected} = data;

            const actual = amountOddElemArray(array);

            it(`Should return ${expected} when array = [${array}]`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('swapHalfArray', () => {
        const testData = [
            {
                array: [],
                expected: null
            },
            {
                array: [1],
                expected: [1]
            },
            {
                array: [1, 2],
                expected: [2, 1]
            },
            {
                array: [1, 2, 3],
                expected: [3, 2, 1]
            },
            {
                array: [1, 2, 3, 4],
                expected: [3, 4, 1, 2]
            },
            {
                array: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                expected: [6, 7, 8, 9, 5, 1, 2, 3, 4]
            },
            {
                array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 7],
                expected: [8, 9, 10, 1, 2, 3, 7, 1, 2, 3, 4, 5, 6, 7]
            }
        ];

        testData.forEach(data => {
            const {array, expected} = data;

            const actual = swapHalfArray(array);

            it(`Should return [${expected}] when array = [${array}]`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('arrayBubbleSort', () => {
        const testData = [
            {
                array: [],
                expected: null
            },
            {
                array: [1],
                expected: [1]
            },
            {
                array: [1, 2],
                expected: [2, 1]
            },
            {
                array: [1, 2, 3],
                expected: [3, 2, 1]
            },
            {
                array: [1, 2, 3, 4],
                expected: [4, 3, 2, 1]
            },
            {
                array: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                expected: [9, 8, 7, 6, 5, 4, 3, 2, 1]
            },
            {
                array: [1, 4, 2, 7, 8, 4, 3, 2, 1],
                expected: [8, 7, 4, 4, 3, 2, 2, 1, 1]
            },
            {
                array: [5, 4, 3, 2, 1],
                expected: [5, 4, 3, 2, 1]
            }
        ];

        testData.forEach(data => {
            const {array, expected} = data;

            const actual = arrayBubbleSort(array);

            it(`Should return [${expected}] when array = [${array}]`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('arrayInsertSort', () => {
        const testData = [
            {
                array: [],
                expected: null
            },
            {
                array: [1],
                expected: [1]
            },
            {
                array: [1, 2],
                expected: [2, 1]
            },
            {
                array: [1, 2, 3],
                expected: [3, 2, 1]
            },
            {
                array: [1, 2, 3, 4],
                expected: [4, 3, 2, 1]
            },
            {
                array: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                expected: [9, 8, 7, 6, 5, 4, 3, 2, 1]
            },
            {
                array: [1, 4, 2, 7, 8, 4, 3, 2, 1],
                expected: [8, 7, 4, 4, 3, 2, 2, 1, 1]
            },
            {
                array: [5, 4, 3, 2, 1],
                expected: [5, 4, 3, 2, 1]
            }
        ];

        testData.forEach(data => {
            const {array, expected} = data;

            const actual = arrayInsertSort(array);

            it(`Should return [${expected}] when array = [${array}]`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });
});