//ES5数组api push pop unshift shift splice reverse sort

function ES5_ARRAY_api() {
    //1.push 数组开头添加元素
    //2.pop 数组开头删除元素
    //3.unshift 数组结尾添加元素
    //4.shift 数组结尾删除元素
    //注意，push和unshift都是添加元素，返回的都是数组的长度，而pop和shift都是删除元素，返回的却是被删除的元素！！！
    //5.splice(index,delnum,item)(分别是index位置，删除的个数，替换的值) 删除，添加，替换
    let arr = ['a', 'b', 'c', 'd', 'e', 'f']
    console.log(arr.splice(1, 1), arr)

}

//ES6数组新增方法
//1.Array.from()  可以把类数组对象遍历转换成数组 形式是
//     let arrayLike = {
//     '0': 'a',
//     '1': 'b',
//     '2': 'c',
//     length: 3
// };
//必须有length属性，前面的数字属性可以是字符串或者数字
//也可以把字符串转为数组
// Array.from还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组。
// Array.from(arrayLike, x => x * x);
// // 等同于
// Array.from(arrayLike).map(x => x * x);
// Array.from([1, 2, 3], (x) => x * x)
// // [1, 4, 9]
//
//Object.values()可以把对象的属性值，创建成一个数组
//Object.keys()可以把对象的属性名，创建成一个数组
//如果没有length的普通对象，就使用Object.values进行转换就好，Object.values({name:'lyb',age:22})




//2.Array.of() 可以将一组值，转化为数组
//3.arr.copyWithin(target,start,end)在数组内部 ，可以将数组某一个值替换成数组另一个新值，会覆盖原值，修改了原数组，返回修改后的数组
//4.find(value,index,arr) 数组实例的find方法，用于找出第一个符合条件的数组成员。它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员。如果没有符合条件的成员，则返回undefined。
// arr.find((value,index,arr) => {value是当前值，index是当前索引，arr是当前数组})
//5.findIndex(value,index,arr) 数组实例的findIndex方法的用法与find方法非常类似，返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1
//6.fill(value,start,end) 用于填充数组，用法很灵活,value是填充的值，start是起始位置，end是结束位置，不包括end





//ES5 字符串api length charAt indexOf lastIndexOf toUpperCase toLowerCase slice substr substring


function ES5_STRING_api() {
    let test_string = 'hello world';
    //1.length 查看数组和字符串长度
    console.log(test_string.length);
    //2.charAt 获取下标对应的字符
    console.log(test_string.charAt(0), test_string.charAt(1), test_string.charAt(20))
    //3.indexOf（value,start） 查看某个字符串出现的位置，value是查询的字符串值，start是开始的位置 返回的是当前位置，位置从0开始算
    console.log(test_string.indexOf('l', 0))
    //4. lastIndexOf 查看某个字符串最后一次出现的下标
    //  console.log(text_string.lastIndexOf('l'))
    //5.toUpperCase toLowerCase
    console.log(test_string.toUpperCase())

    //6.slice substr substring
    // slice(start, end)  截取字符串，start开始的下标，end结束的下标，不包含end本身，end为空截取到最后，负数表示倒数。
    //  substr(start, count)  截取字符串，start开始的下标，count截取的长度，如果count为空，截取最后；start为负数表示倒数。
    //  substring(start, end) 截取字符串，start开始的下标，end结束的下标，如果end为空截取到最后，如果下标为负数自动转成0。
}

//ES6 字符串新增实例方法 includes() startsWith() endsWith() repeat() padStart() padEnd()
// trim() trimStart() trimEnd() 

//1.includes(item) 字符串中是否包含了item字符串，返回布尔值true or false
//2.startsWith（item）字符串头部是否是item，返回布尔值
//3.endsWith（item）字符串尾部是否是item，返回布尔值
//4.repeat（times）字符串重复的次数，times是次数 a.repeat(times),如果参数为正小数，则向下取整
//参数如果是小数，会被取整。如果repeat的参数是负数或者Infinity，会报错。
//但是，如果参数是 0 到-1 之间的小数，则等同于 0，
//这是因为会先进行取整运算。0 到-1 之间的小数，取整以后等于-0，repeat视同为 0。
//参数NaN等同于 0。如果repeat的参数是字符串，则会先转换成数字。
//5.padStart(length,value) 在头部补齐当前value字符串，补齐以后总共length位数
//6.padEnd(length,value)在尾部补齐value字符串，补齐以后共length位数
//7.trim() 去除字符串两边的空格 str.trim()
//8.trimStart()去除字符串开头的空格
//9.trimEnd() 去除字符串结尾的空格
//10.matchAll() 正则匹配到所有的符合条件的内容
let str = '我是你的哥哥，你是我的弟弟'
console.log(str.matchAll(/[我]/))










//ES5 Mathapi floor ceil abs PI round max min random
function ES5_Math_api() {
    //floor 向下取整 ceil向上取整 abs取绝对值 PI圆周率 round取四舍五入 max取最大 min取最小 random去随机值
    let math01 = -1.6
    console.log(Math.floor(math01), Math.ceil(math01), Math.PI, Math.abs(math01), Math.round(math01))
}

//ES5 Date 




// ES5_STRING_api()
// ES5_ARRAY_api()
// ES5_Math_api()




//笔记
// 数组
// toString/join/concat/slice/splice/reverse/sort/
// push/pop/unshift/shift
// 字符串
// new String(2)  /  String()
// 转义字符  \
// length/charAt()/indexOf/lastIndexOf/toUpperCase
// toLowerCase/slice/substr/substring/split
// 匹配模式
// search/match/replace
// Math对象
// PI/abs/ceil/floor/round/max/min/pow/random
