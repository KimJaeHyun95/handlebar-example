// Lodash를 import 합니다.
const _ = require('lodash');

// 배열에서 중복된 값을 제거하는 예제입니다.
const arr = [1, 1, 2, 3, 3, 3, 4, 5, 5];
const uniqueArr = _.uniq(arr);
console.log(uniqueArr); // [1, 2, 3, 4, 5]
