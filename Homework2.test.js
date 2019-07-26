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
            },
            // {
            //     rating: -100,//
            // },
            // {
            //     rating: null,
            // },
            // {
            //     rating: undefined,
            // },
            // {
            //     rating: [],
            // },
            // {
            //     rating: {},
            // },
        ];

        testData.forEach(data => {
            const {rating, expected} = data;

            const actual = getMarkByRating(rating);

            it(`should return ${expected} when rating = ${rating}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });
    // describe('getSumAndAmountOfEven99Numbers', () => {
    //     const expected = [2450, 49];
    //
    //     const actual = getSumOrMultiByEven();
    //
    //     it(`Should return array = [${expected}] all the time`, () => {
    //         assert.strictEqual(actual, expected);
    //     });
    // });
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
            // {
            //     number: -5
            // },
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
            // {
            //     number: -5
            // },
        ];

        testData.forEach(data => {
            const {number, expected} = data;

            const actual = getSqrtSequentialSelection(number);

            it(`Should return ${expected} when number = ${number}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });
});