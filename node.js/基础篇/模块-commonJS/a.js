function test() {
    console.log('test-a');
}
function test2() {
    console.log('test2-a');
}
//导出test函数
//module.exports只能导出一个对象
// module.exports = test;
//导出多个对象
//方式一：
module.exports = {
    //要导出的对象
    // test: test,
    // test2: test2
    //简写
    test,
    test2
};
//方式二：
// exports.test = test; //这种方式导出的是一个对象，可以导出多个对象
// exports.test2 = test2; //这种方式导出的是一个对象，可以导出多个对象