function test1() {
    if (true) {
        var i = 100;
        console.log('i=' + i);
    }
    console.log('i=' + i);
}
function test2() {
    let i = 200;
    if (true) {
        let i = 100;
        console.log('i=' + i);
    }
    console.log('i=' + i);
}
console.log('test1:');
test1();
console.log('test2:');
test2();
