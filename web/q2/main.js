if (false) {
    var sum = 0;
    var temp;
    /*
     * for (initCode; condition; roundEndCode)
     * */
    for (var a = 1, b = 1; b < 4 * 1000 * 1000; temp = b, b = a + temp, a = temp) {
        if ((b % 2) == 0) {
            sum += b;
        }
    }
    console.log('the sum is:', sum);
}
{
    var sum = 0;
    var currentA = 1;
    var currentB = 1;
    var oldA;
    var oldB;
    for (; ;) {
        // 1E8; // 10 ^ 8
        if (currentB > 4e6) {
            break;
        }
        if (currentB % 2 == 0) {
            sum += currentB; // sum = sum + currentB
        }
        oldA = currentA;
        oldB = currentB;
        currentA = oldB;
        currentB = oldA + oldB;

    }
    console.log(sum);
}
