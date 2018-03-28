;
(function(w) {
    // ①
    /*数组去重*/
    let a = [0, 1, 2, 1, 10, 20];
    let fn = function(arr) {
        let newArr = [];
        newArr.push(arr[0]);
        for (let i = 0, len = arr.length; i < len; i++) {
            if (newArr.indexOf(arr[i]) < 0) {
                newArr.push(arr[i])
            }
        }
        console.log(newArr);
        return newArr;
    }
    fn(a);

    fn([1, 2, 1, 2, 3, 4, 5, 4]);

    // 用es6 语法 set
    [...new Set([1, 2, 3, 2])]

    // ②
    // 编写一个javscript函数 fn，该函数有一个参数 n（数字类型），
    // 其返回值是一个数组，该数组内是 n 个随机且不重复的整数，且整数取值范围是 [2, 32]。
    let fb = function(n) {
        let arr = [];
        let cc = function() {
            let value = Math.round(Math.random() * 32);
            if (value >= 2 && value <= 32) {
                if (arr.indexOf(value) >= 0) {
                    return cc()
                } else {
                    return value;
                }
            } else {
                return cc();
            }
        };
        for (let i = 0; i < n; i++) {
            arr.push(cc());
        };
        return arr;
    }
    console.log(fb(3));

    // ③
    // 递归  拉平数组flattenDeep(arry) 
    // 递归地拉平数组 ，输入 flattenDeep([1,[2,[3,[4,[5]]]]) =>   [1,2,3,4,5]
    function isArray(a) {
        return Object.prototype.toString.call(a) === '[object Array]';
    }

    // Array.isArray()  IE6,7,8不支持。移动端可以使用
    let array = [];
    let flattenDeep = function(arr) {
        if (!isArray(arr)) {
            console.log('入参不是数组');
            return;
        }
        for (let i = 0, len = arr.length; i < len; i++) {
            if (isArray(arr[i])) {
                flattenDeep(arr[i]);
            } else {
                array.push(arr[i]);
            }
        }
        return array;
    }

    console.log(flattenDeep([1, [2, 3, [4, [5, [10]]]]]));
    console.log(flattenDeep('12'));

    // 精简版
    const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));


    // ④
    // groupBy(collection,function)
    // 输入 groupBy(['wi','window','icon'])
    const groupBy = (arr, fn) =>
        arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val, i) => {
            acc[val] = (acc[val] || []).concat(arr[i]);
            return acc;
        }, {});




})(window)
