var array1 = [1, 2, 3, 4, 5, 6, 2, 6, 2, 3, 2, 7, 8, 2];
var a = 1;
var b = 0;
var item;
for (var i = 0; i < array1.length; i++) {
    for (var j = i; j < array1.length; j++) {
        if (array1[i] == array1[j])
            b++;
        if (a < b) {
            a = b;
            item = array1[i];
        }
    }
    b = 0;
}
console.log(item + "(" + a + " times)");
